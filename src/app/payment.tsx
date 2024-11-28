// src/app/payment.tsx
import React from 'react';

const PaymentPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-800 text-white">
      <h2 className="text-3xl font-bold mb-6">Pagamento do Curso</h2>
      <p className="text-lg mb-6">Realize o pagamento para acessar o conteúdo exclusivo.</p>
      {/* Aqui você pode adicionar integração com pagamento */}
      <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg">
        Pagar Agora
      </button>
    </div>
  );
};

export default PaymentPage;
