// src/app/payment.tsx
'use client';

import CheckoutButton from '../../components/CheckoutButton';
import React from 'react';

const PaymentPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-800 text-white">
      <h2 className="text-3xl font-bold mb-6">Pagamento do Curso</h2>
      <p className="text-lg mb-6">Realize o pagamento para acessar o conteúdo exclusivo.</p>
      {/* Usando o CheckoutButton */}
      <CheckoutButton />
    </div>
  );
};

export default PaymentPage;
