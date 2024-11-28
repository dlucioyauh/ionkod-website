import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const userHasPaid = true; // Substitua por sua lógica real de verificação de pagamento

      if (!userHasPaid) {
        return res.status(403).json({ error: 'Pagamento não confirmado. Acesso negado.' });
      }

      const filePath = path.join(process.cwd(), 'src', 'files', 'Aula+01+Inaugural.pdf');

      if (!fs.existsSync(filePath)) {
        return res.status(404).json({ error: 'Arquivo não encontrado.' });
      }

      const file = fs.readFileSync(filePath);
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename=Aula+01+Inaugural.pdf');
      res.send(file);
    } catch {
      res.status(500).json({ error: 'Erro ao processar o pedido. Tente novamente mais tarde.' });
    }
  } else {
    res.setHeader('Allow', 'GET');
    res.status(405).end('Method Not Allowed');
  }
}
