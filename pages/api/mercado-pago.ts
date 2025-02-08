import { NextApiRequest, NextApiResponse } from 'next';
import axios, { AxiosError } from 'axios'; // Correção da importação

// Define o tipo da resposta da API do Mercado Pago
interface MercadoPagoResponse {
  id: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  const { pacote, valor } = req.body;

  console.log('Dados recebidos:', { pacote, valor }); // Log dos dados recebidos

  // Valida os dados recebidos
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

  console.log('Preferência de pagamento:', preference); // Log da preferência de pagamento

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

    console.log('Resposta do Mercado Pago:', response.data); // Log da resposta
    res.status(200).json({ id: response.data.id });
  } catch (error) {
    const axiosError = error as AxiosError;
    console.error('Erro ao criar preferência de pagamento:', axiosError.response?.data || axiosError.message); // Log detalhado do erro
    res.status(500).json({ error: 'Erro ao processar o pagamento' });
  }
}
