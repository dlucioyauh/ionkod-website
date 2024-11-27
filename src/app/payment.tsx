// src/app/payment.tsx

import { useState } from 'react';
import Link from 'next/link';

const Payment = () => {
  const [paymentStatus, setPaymentStatus] = useState<boolean | null>(null);

  const handlePayment = () => {
    // Aqui você pode integrar com uma API de pagamento real
    setTimeout(() => {
      setPaymentStatus(true);  // Simulando pagamento aprovado
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-800 to-gray-500 text-white">
      <h1 className="text-4xl font-semibold mb-4">Pagamento</h1>
      <p className="text-xl mb-6">Complete seu pagamento para acessar o curso e baixar o material.</p>
      
      {!paymentStatus ? (
        <div>
          <button
            onClick={handlePayment}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg"
          >
            Realizar Pagamento
          </button>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl mb-4">Pagamento Concluído!</h2>
          <Link href="/confirmation">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg">
              Baixar PDF
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Payment;
