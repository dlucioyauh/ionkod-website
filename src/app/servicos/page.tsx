// src/app/servicos/page.tsx

'use client';

import Link from 'next/link';

const ServicosPage = () => {
  return (
    <div className="gradient-bg text-white min-h-screen flex flex-col items-center justify-center px-6 py-10">
      <h2 className="text-5xl font-extrabold mb-8 text-center drop-shadow-lg">Nossos Serviços</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
        <Link href="/servicos/consultorias" className="w-full">
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-2xl shadow-lg transform transition-all hover:scale-105 flex items-center justify-center gap-3 text-lg">
            📊 Consultorias
          </button>
        </Link>
        
        <Link href="/servicos/desenvolvimento-sites" className="w-full">
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-2xl shadow-lg transform transition-all hover:scale-105 flex items-center justify-center gap-3 text-lg">
            💻 Desenvolvimento de Sites
          </button>
        </Link>
        
        <Link href="/servicos/desenvolvimento-apps" className="w-full">
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-2xl shadow-lg transform transition-all hover:scale-105 flex items-center justify-center gap-3 text-lg">
            📱 Desenvolvimento de Apps
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServicosPage;