// pages/api/check-session.ts
import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-11-20.acacia', // A versão mais recente compatível
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { session_id } = req.query;

    if (!session_id || typeof session_id !== 'string') {
      return res.status(400).json({ error: 'ID da sessão inválido.' });
    }

    try {
      // Obtém a sessão do Stripe
      const session = await stripe.checkout.sessions.retrieve(session_id);

      // Verifica se o pagamento foi bem-sucedido
      if (session.payment_status === 'paid') {
        return res.status(200).json({ success: true, session });
      } else {
        return res.status(400).json({ error: 'Pagamento não confirmado.' });
      }
    } catch (err: unknown) {
      // Verificando e utilizando o erro
      const errorMessage = err instanceof Error ? err.message : 'Erro desconhecido';
      return res.status(500).json({ error: errorMessage });
    }
  } else {
    res.setHeader('Allow', 'GET');
    res.status(405).end('Method Not Allowed');
  }
}
