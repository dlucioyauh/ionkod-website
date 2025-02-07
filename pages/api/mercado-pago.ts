// pages/api/mercado-pago.ts
import { NextApiRequest, NextApiResponse } from 'next';

// Importa o SDK do Mercado Pago
const mercadopago = require('mercadopago');

// Configura o Mercado Pago
mercadopago.configure({
  access_token: process.env.MERCADO_PAGO_ACCESS_TOKEN!,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  const { pacote, valor } = req.body;

  console.log('Dados recebidos:', { pacote, valor }); // Log dos dados recebidos
  console.log('Token de acesso:', process.env.MERCADO_PAGO_ACCESS_TOKEN);
  console.log('Preferência de pagamento:', preference);
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
    console.log('Criando preferência de pagamento...'); // Log antes de criar a preferência
    const response = await mercadopago.preferences.create(preference);
    console.log('Resposta do Mercado Pago:', response); // Log da resposta
    res.status(200).json({ id: response.body.id });
  } catch (error) {
    console.error('Erro ao criar preferência de pagamento:', error); // Log de erro
    res.status(500).json({ error: 'Erro ao processar o pagamento' });
  }
}