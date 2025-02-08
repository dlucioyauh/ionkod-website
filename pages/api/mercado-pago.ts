// src/pages/api/mercado-pago.ts

import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

// Define o tipo da resposta da API do Mercado Pago
interface MercadoPagoResponse {
  init_point: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  const { pacote, valor } = req.body;

  if (!pacote || typeof pacote !== 'string' || pacote.trim() === '') {
    return res.status(400).json({ error: 'O campo "pacote" é obrigatório e não pode estar vazio.' });
  }

  if (isNaN(valor) || parseFloat(valor) <= 0) {
    return res.status(400).json({ error: 'O campo "valor" deve ser um número maior que zero.' });
  }

  const preference = {
    items: [
      {
        title: pacote,
        unit_price: parseFloat(valor),
        quantity: 1,
      },
    ],
    payment_methods: {
      installments: 12,
      default_installments: 1,
    },
    back_urls: {
      success: `${process.env.NEXT_PUBLIC_SITE_URL}/confirmation`,
      failure: `${process.env.NEXT_PUBLIC_SITE_URL}/payment`,
      pending: `${process.env.NEXT_PUBLIC_SITE_URL}/payment`,
    },
    auto_return: 'approved',
    statement_descriptor: 'IONKOD CONSULTORIA',
  };

  try {
    const response = await axios.post<MercadoPagoResponse>(
      'https://api.mercadopago.com/checkout/preferences',
      preference,
      {
        headers: {
          Authorization: `Bearer ${process.env.MERCADO_PAGO_ACCESS_TOKEN}`,
          'Content-Type': 'application/json',
        },
      }
    );

    // Retorna o link de pagamento (init_point)
    res.status(200).json({ init_point: response.data.init_point });
  } catch (error: any) {
    console.error('Erro ao criar preferência de pagamento:', error.response?.data || error.message);
    res.status(500).json({ error: 'Erro ao processar o pagamento' });
  }
}
