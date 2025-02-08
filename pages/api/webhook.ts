// src/pages/api/webhook.ts
import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const event = req.body;
    console.log('Recebido webhook:', event);

    if (event.type === 'payment') {
      const paymentId = event.data.id;
      console.log(`Pagamento recebido: ID ${paymentId}`);

      // Consulta o Mercado Pago para obter os detalhes do pagamento
      const { data } = await axios.get(`https://api.mercadopago.com/v1/payments/${paymentId}`, {
        headers: {
          Authorization: `Bearer ${process.env.MERCADO_PAGO_ACCESS_TOKEN}`,
        },
      });

      console.log('Detalhes do pagamento:', data);

      // Atualiza o banco de dados com o status do pagamento
      if (data.status === 'approved') {
        console.log(`Pagamento ${paymentId} aprovado!`);
        // Aqui você pode salvar no banco de dados que o pagamento foi concluído
      } else {
        console.log(`Pagamento ${paymentId} com status: ${data.status}`);
      }
    }

    res.status(200).send('OK');
  } catch (error: any) {
    console.error('Erro no webhook:', error.response?.data || error.message);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
}
