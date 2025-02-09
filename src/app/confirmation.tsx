// pages/confirmation.tsx
'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

const ConfirmationPage = () => {
  const [paymentStatus, setPaymentStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams) {
      const status = searchParams.get('status');
      if (status) {
        setPaymentStatus(status);
      } else {
        setPaymentStatus('pending');
      }
      setLoading(false);
    }
  }, [searchParams]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-800 text-white">
        Carregando...
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-800 to-gray-700 text-white p-4">
      {paymentStatus === 'approved' && (
        <>
          <h1 className="text-4xl font-semibold mb-4">Obrigado pela Compra!</h1>
          <p className="text-xl mb-6">Seu pagamento foi aprovado com sucesso.</p>
        </>
      )}
      {paymentStatus === 'pending' && (
        <>
          <h1 className="text-4xl font-semibold mb-4">Pagamento Pendente</h1>
          <p className="text-xl mb-6">
            Estamos aguardando a confirmação do seu pagamento.
          </p>
        </>
      )}
      {paymentStatus === 'failure' && (
        <>
          <h1 className="text-4xl font-semibold mb-4">Pagamento Não Aprovado</h1>
          <p className="text-xl mb-6">
            Ocorreu um problema com o seu pagamento. Tente novamente.
          </p>
        </>
      )}
    </div>
  );
};

export default ConfirmationPage;