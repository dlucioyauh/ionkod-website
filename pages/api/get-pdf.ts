// pages/api/get-pdf.ts
import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Verifique se o usuário fez o pagamento, por exemplo, verificando um token de sessão
    const userHasPaid = checkIfUserHasPaid(req);  // Implementar a lógica de verificação

    if (!userHasPaid) {
      return res.status(403).json({ error: 'Acesso negado. Você precisa pagar para acessar o conteúdo.' });
    }

    // Caminho do arquivo PDF
    const filePath = path.resolve('src', 'files', 'Aula+01+Inaugural.pdf');

    try {
      // Lê o arquivo PDF e envia como resposta
      const fileBuffer = fs.readFileSync(filePath);
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename=Aula+01+Inaugural.pdf');
      res.status(200).send(fileBuffer);
    } catch (error) {
      console.error('Erro ao enviar o PDF:', error);
      res.status(500).json({ error: 'Erro ao acessar o arquivo PDF.' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end('Method Not Allowed');
  }
}

// Função fictícia para verificar se o usuário pagou
function checkIfUserHasPaid(req: NextApiRequest): boolean {
  // Implemente a verificação real aqui, como verificar uma sessão ou token de pagamento
  const paymentStatus = req.cookies['payment_status']; // Exemplo com um cookie
  return paymentStatus === 'paid';  // Condição fictícia, ajuste conforme sua lógica de pagamento
}
