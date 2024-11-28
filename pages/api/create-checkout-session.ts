import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

// Inicializando a instância do Stripe com a versão correta da API
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2024-10-28.acacia', // Versão compatível da API
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      // Definir o siteUrl a partir da variável de ambiente ou URL local
      const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

      // Criando uma sessão de checkout com o Stripe
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: 'Curso Exclusivo IonKod',
              },
              unit_amount: 5000, // Valor em centavos (exemplo: $50.00)
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${siteUrl}/confirmation`,
        cancel_url: `${siteUrl}/payment`,
      });

      // Retornando o ID da sessão de checkout
      res.status(200).json({ id: session.id });
    } catch (err: any) {
      // Retornando erro, caso ocorra
      res.status(500).json({ error: err.message });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
