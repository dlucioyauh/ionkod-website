'use client';

import React, { Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const PaymentFailedContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  if (!searchParams) return <p>Carregando...</p>;

  const collection_id = searchParams.get('collection_id') || 'N/A';
  const collection_status = searchParams.get('collection_status') || 'N/A';
  const payment_id = searchParams.get('payment_id') || 'N/A';
  const status = searchParams.get('status') || 'N/A';

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-6">Pagamento Não Autorizado</h1>
      <p className="text-center text-lg mb-4">
        O pagamento não foi autorizado. Tente novamente ou entre em contato com o suporte.
      </p>
      <div className="text-center mt-6">
        <p>Detalhes do pagamento:</p>
        <ul className="list-disc text-left mt-2">
          <li>ID da Coleção: {collection_id}</li>
          <li>Status da Coleção: {collection_status}</li>
          <li>ID do Pagamento: {payment_id}</li>
          <li>Status do Pagamento: {status}</li>
        </ul>
      </div>
      <div className="text-center mt-8">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded"
          onClick={() => router.push('/comprar-pacotes')} // Altere para a rota correta
        >
          Voltar para a compra de pacotes
        </button>
      </div>
    </div>
  );
};

const PaymentFailed = () => {
  return (
    <Suspense fallback={<p>Carregando...</p>}>
      <PaymentFailedContent />
    </Suspense>
  );
};

export default PaymentFailed;
