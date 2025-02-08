// src/app/payment/payment-failed.tsx

import React from 'react';
import { useRouter } from 'next/router';

const PaymentFailed = () => {
  const router = useRouter();
  const { collection_id, collection_status, payment_id, status } = router.query;

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
          onClick={() => router.push('/')}
        >
          Voltar para a página inicial
        </button>
      </div>
    </div>
  );
};

export default PaymentFailed;
