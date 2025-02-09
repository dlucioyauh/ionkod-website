'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

const PaymentPage = () => {
  return (
    <Suspense fallback={<p>Carregando...</p>}>
      <PaymentContent />
    </Suspense>
  );
};

const PaymentContent = () => {
  const searchParams = useSearchParams();
  const status = searchParams ? searchParams.get('status') : null;

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-6">Status do Pagamento</h1>
      <p className="text-center text-lg mb-4">
        {status === 'rejected' ? 'O pagamento foi recusado. Tente novamente.' : 'Pagamento processado com sucesso.'}
      </p>
      <div className="text-center mt-8">
        <a
          href="/comprar-pacotes" // Alterar para a URL correta
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Voltar para a compra de pacotes
        </a>
      </div>
    </div>
  );
};

export default PaymentPage;
