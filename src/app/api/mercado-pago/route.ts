// src/app/api/mercado-pago/route.ts

import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

// Define o tipo da resposta da API do Mercado Pago
interface MercadoPagoResponse {
  init_point: string;
}

export async function POST(req: NextRequest) {
  try {
    const { pacote, valor } = await req.json();

    // Validações
    if (!pacote || typeof pacote !== 'string' || pacote.trim() === '') {
      return NextResponse.json({ error: 'O campo "pacote" é obrigatório e não pode estar vazio.' }, { status: 400 });
    }

    if (isNaN(valor) || parseFloat(valor) <= 0) {
      return NextResponse.json({ error: 'O campo "valor" deve ser um número maior que zero.' }, { status: 400 });
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

    return NextResponse.json({ init_point: response.data.init_point });
  } catch (error: any) {
    console.error('Erro ao criar preferência de pagamento:', error.response?.data || error.message);
    return NextResponse.json({ error: 'Erro ao processar o pagamento' }, { status: 500 });
  }
}
