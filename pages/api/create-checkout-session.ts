// pages/api/create-checkout-session.ts
import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

// Definir o tipo para os itens do corpo da requisição
interface Item {
  name: string;
  price: number; // O preço será em centavos (em reais)
  quantity: number;
}

// Atualize a versão da API do Stripe aqui
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-11-20.acacia', // A versão mais recente compatível
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const { items }: { items: Item[] } = req.body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: items.map((item) => ({
        price_data: {
          currency: 'brl', // Mudamos para BRL (Real Brasileiro)
          product_data: {
            name: item.name,
          },
          unit_amount: item.price, // 50 centavos = 50
        },
        quantity: item.quantity,
      })),
      mode: 'payment',
      success_url: `${req.headers.origin}/confirmation`,
      cancel_url: `${req.headers.origin}/payment`,
    });

    res.status(200).json({ id: session.id });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
}
