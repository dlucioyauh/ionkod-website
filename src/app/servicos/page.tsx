// src/app/servicos/page.tsx
'use client';

import Link from 'next/link';

const ServicosPage = () => {
  return (
    <div className="bg-gradient-to-r from-[#1f2937] to-[#71a3c1] text-white min-h-screen flex flex-col items-center justify-center px-10">
      <h2 className="text-4xl font-bold mb-6">Nossos Serviços</h2>
      
      <div className="space-y-4">
        <Link href="/servicos/consultorias">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-md flex items-center gap-2">
            📊 Consultorias
          </button>
        </Link>
        
        <Link href="/servicos/desenvolvimento-sites">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-md flex items-center gap-2">
            💻 Desenvolvimento de Sites
          </button>
        </Link>
        
        <Link href="/servicos/desenvolvimento-apps">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-md flex items-center gap-2">
            📱 Desenvolvimento de Apps
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServicosPage;
