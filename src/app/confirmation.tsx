// src/app/confirmation.tsx

import Link from 'next/link';

const Confirmation = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-800 to-gray-500 text-white">
      <h1 className="text-4xl font-semibold mb-4">Obrigado pela Compra!</h1>
      <p className="text-xl mb-6">Seu pagamento foi aprovado com sucesso.</p>
      <Link href="/path-to-your-pdf">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg">
          Baixar Curso em PDF
        </button>
      </Link>
    </div>
  );
};

export default Confirmation;
