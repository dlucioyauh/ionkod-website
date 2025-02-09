'use client';

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const PaymentFailed = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Garante que searchParams não seja null, atribuindo uma string vazia caso seja.
  const collection_id = searchParams?.get('collection_id') ?? '';
  const collection_status = searchParams?.get('collection_status') ?? '';
  const payment_id = searchParams?.get('payment_id') ?? '';
  const status = searchParams?.get('status') ?? '';

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-6">Pagamento Não Autorizado</h1>
      <p className="text-center text-lg mb-4">
        O pagamento não foi autorizado. Tente novamente ou entre em contato com o suporte.
      </p>
      <div className="text-center mt-6">
        <p>Detalhes do pagamento:</p>
        <ul className="list-disc text-left mt-2">
          <li>ID da Coleção: {collection_id || 'Não disponível'}</li>
          <li>Status da Coleção: {collection_status || 'Não disponível'}</li>
          <li>ID do Pagamento: {payment_id || 'Não disponível'}</li>
          <li>Status do Pagamento: {status || 'Não disponível'}</li>
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

export default PaymentFailed;
