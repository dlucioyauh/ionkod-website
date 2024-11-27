// src/app/index.tsx
import Link from 'next/link';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-800 to-gray-500 text-white">
      <h1 className="text-4xl font-semibold mb-4">Curso Exclusivo</h1>
      <p className="text-xl mb-6">Adquira conhecimento prático e transforme sua carreira.</p>
      {/* Link atualizado */}
      <Link href="/payment">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg">
          Ir para Pagamento
        </button>
      </Link>
    </div>
  );
};

export default Home;
