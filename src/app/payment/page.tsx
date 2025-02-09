'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
// import { criarPreferenciaMercadoPago } from '@/lib/mercadopago';

export default function PaymentPageContent() {
  const searchParams = useSearchParams();
  const pacote = searchParams?.get('pacote') || '';
  const valor = searchParams?.get('valor') || '';

  useEffect(() => {
    if (pacote && valor) {
      const processarPagamento = async () => {
        try {
          const response = await fetch('/api/mercado-pago', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ pacote, valor: parseFloat(valor) }),
          });

          if (!response.ok) {
            throw new Error('Erro ao processar o pagamento.');
          }

          const { init_point } = await response.json();
          window.location.href = init_point; // Redireciona para o Mercado Pago
        } catch (error) {
          console.error('Erro ao processar o pagamento:', error);
          alert('Erro ao processar o pagamento. Tente novamente.');
        }
      };

      processarPagamento();
    }
  }, [pacote, valor]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Redirecionando para o pagamento...</h1>
    </div>
  );
}