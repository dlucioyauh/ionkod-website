// src/app/page.tsx
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-800 to-gray-500 text-white">
      <h1 className="text-4xl font-bold mb-4">Bem-vindo ao IonKod!</h1>
      <p className="text-xl mb-6">Explore nossas páginas e recursos.</p>
      <div className="flex gap-4">
        <Link href="/payment">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg">
            Ir para Pagamento
          </button>
        </Link>
        <Link href="/confirmation">
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg">
            Ver Confirmação
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
