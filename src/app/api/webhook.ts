// pages/api/webhook.ts
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { data } = req.body;
    const paymentId = data.id;

    try {
      // Fazendo a consulta do pagamento utilizando a API do Mercado Pago
      const response = await axios.get(
        `https://api.mercadopago.com/v1/payments/${paymentId}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.MERCADO_PAGO_ACCESS_TOKEN}`,
          },
        }
      );

      // A resposta da API contém as informações do pagamento
      const payment = response.data;

      console.log('Pagamento encontrado:', payment);
      
      // Aqui você pode continuar o processamento conforme necessário
      res.status(200).json({ message: 'Pagamento encontrado', payment });
    } catch (error: any) {
      console.error('Erro ao buscar pagamento:', error.response?.data || error.message);
      res.status(500).json({ error: 'Erro ao buscar pagamento' });
    }
  } else {
    res.status(405).json({ error: 'Método não permitido' });
  }
}
