// pages/api/create-checkout-session.ts

import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

// Inicializando a instância do Stripe com a versão correta da API
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2024-11-20.acacia', // Versão compatível da API
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      // URL base do site
      const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

      // Itens da compra
      const lineItems = [
        {
          price_data: {
            currency: 'brl', // Moeda BRL
            product_data: {
              name: 'Curso Exclusivo IonKod', // Nome do produto
            },
            unit_amount: 50, // Valor em centavos (R$0,50)
          },
          quantity: 1, // Quantidade
        },
      ];

      // Criar a sessão de checkout
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'], // Tipos de pagamento aceitos
        line_items: lineItems, // Itens do carrinho
        mode: 'payment', // Modo de pagamento direto
        success_url: `${siteUrl}/confirmation?session_id={CHECKOUT_SESSION_ID}`, // Redireciona após sucesso
        cancel_url: `${siteUrl}/payment`, // Redireciona ao cancelar
      });

      // Retornar ID da sessão
      res.status(200).json({ id: session.id });
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Erro desconhecido';
      res.status(500).json({ error: errorMessage });
    }
  } else {
    // Retornar erro caso o método HTTP não seja POST
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
