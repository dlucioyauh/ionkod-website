// pages/api/create-checkout-preference.ts


import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).end("Método não permitido");
  }

  const { amount } = req.body;

  // Aqui você deve integrar com a API do Mercado Pago para criar a preferência de pagamento.
  // O código abaixo é apenas uma simulação de resposta.
  const init_point = `https://www.mercadopago.com/checkout?pref_id=EXEMPLO_${amount}`;

  return res.status(200).json({ init_point });
}
