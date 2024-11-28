import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-11-20.acacia',
});

// Definindo o tipo para os itens de checkout
interface Item {
  name: string;
  price: number;
  quantity: number;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    // Tipando o corpo da requisição como um array de itens
    const { items }: { items: Item[] } = req.body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: items.map((item) => ({
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.name,
          },
          unit_amount: item.price * 100, // Preço em centavos
        },
        quantity: item.quantity,
      })),
      mode: 'payment',
      success_url: `${req.headers.origin}/confirmation?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/payment`,
    });

    res.status(200).json({ id: session.id }); // Retorna o ID da sessão
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
}
