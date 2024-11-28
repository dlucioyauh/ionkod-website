// pages/api/create-checkout-session.ts
import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

// Definir o tipo para os itens do corpo da requisição (se necessário)
interface LineItem {
  price_data: {
    currency: string;
    product_data: {
      name: string;
    };
    unit_amount: number;
  };
  quantity: number;
}

// Inicializando a instância do Stripe com a versão correta da API
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2024-11-20.acacia', // Versão compatível da API
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

      const lineItems: LineItem[] = [
        {
          price_data: {
            currency: 'brl',  // Moeda em reais (BRL)
            product_data: {
              name: 'Curso Exclusivo IonKod',  // Nome do curso
            },
            unit_amount: 50, // Valor em centavos (R$0,50)
          },
          quantity: 1,
        },
      ];

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: lineItems,
        mode: 'payment',
        success_url: `${siteUrl}/confirmation?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${siteUrl}/payment`,
      });

      res.status(200).json({ id: session.id });
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Erro desconhecido';
      res.status(500).json({ error: errorMessage });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
