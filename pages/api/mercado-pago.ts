// pages/api/mercado-pago.ts
import { NextApiRequest, NextApiResponse } from 'next';

// Importa o SDK do Mercado Pago
const MercadoPago = require('mercadopago');

// Configura o Mercado Pago
MercadoPago.configure({
  access_token: process.env.MERCADO_PAGO_ACCESS_TOKEN!,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  const { pacote, valor } = req.body;

  // Cria a preferência de pagamento
  const preference = {
    items: [
      {
        title: pacote,
        unit_price: parseFloat(valor),
        quantity: 1,
      },
    ],
    payment_methods: {
      installments: 12, // Número máximo de parcelas
      default_installments: 1, // Número padrão de parcelas
    },
    back_urls: {
      success: `${process.env.NEXT_PUBLIC_SITE_URL}/confirmation`,
      failure: `${process.env.NEXT_PUBLIC_SITE_URL}/payment`,
      pending: `${process.env.NEXT_PUBLIC_SITE_URL}/payment`,
    },
    auto_return: 'approved', // Redireciona automaticamente após pagamento aprovado
    statement_descriptor: 'IONKOD CONSULTORIA', // Nome que aparece na fatura do cartão
  };

  try {
    // Cria a preferência no Mercado Pago
    const response = await MercadoPago.preferences.create(preference);
    res.status(200).json({ id: response.body.id });
  } catch (error) {
    console.error('Erro ao criar preferência de pagamento:', error);
    res.status(500).json({ error: 'Erro ao processar o pagamento' });
  }
}