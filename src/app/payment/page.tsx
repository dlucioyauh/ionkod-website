// src/app/payment/page.tsx
'use client';

import { useSearchParams } from 'next/navigation';
import CheckoutButton from '../../components/CheckoutButton';

const PaymentPage = () => {
  const searchParams = useSearchParams();
  const pacote = searchParams?.get('pacote') || '';
  const valor = searchParams?.get('valor') || '0';

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-800 to-gray-700 text-white p-4">
      <h2 className="text-3xl font-bold mb-6">Finalizar Compra</h2>
      <p className="text-lg mb-6">
        Você está adquirindo o pacote: <strong>{pacote}</strong>
      </p>
      <p className="text-xl mb-6">
        Valor: <strong>R$ {valor}</strong>
      </p>
      <CheckoutButton pacote={pacote} valor={parseFloat(valor)} />
    </div>
  );
};

export default PaymentPage;