// src/app/servicos/page.tsx
'use client';
import { useState } from 'react';
import Image from 'next/image';
import CheckoutButton from '../../components/CheckoutButton';

const ServicosPage = () => {
  const [pacote, setPacote] = useState('Pacote Básico');
  const [valor, setValor] = useState(1200);

  return (
    <div className="bg-gradient-to-r from-[#1f2937] to-[#71a3c1] text-white min-h-screen flex items-center justify-center px-10">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        {/* Imagem */}
        <div className="order-2 md:order-1 flex justify-center">
          <Image 
            src="/images/ISABELAMOURA.png" 
            alt="Isabela Moura"
            width={400}
            height={500}
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* Texto e Botão */}
        <div className="order-1 md:order-2 max-w-2xl mx-auto md:max-w-lg">
          <h2 className="text-4xl font-bold mb-4">Consultoria com Isabela Moura</h2>
          <p className="text-lg text-gray-200 mb-6">
            Transforme sua jornada com uma consultoria especializada.
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              ✅ Reuniões com especialista dedicado aos seus objetivos
            </li>
            <li className="flex items-start gap-3">
              ✅ Estratégias personalizadas para potencializar seus resultados
            </li>
            <li className="flex items-start gap-3">
              ✅ Orientação prática para organizar sua agenda de forma inteligente
            </li>
          </ul>

          {/* Seleção de pacote e valor */}
          <select
            value={pacote}
            onChange={(e) => setPacote(e.target.value)}
            className="bg-white/10 text-white p-2 rounded-lg mb-4"
          >
            <option value="Pacote Básico">Pacote Básico</option>
            <option value="Pacote Intermediário">Pacote Intermediário</option>
            <option value="Pacote Premium">Pacote Premium</option>
          </select>

          <input
            type="number"
            value={valor}
            onChange={(e) => setValor(parseFloat(e.target.value))}
            className="bg-white/10 text-white p-2 rounded-lg mb-4"
          />

          {/* Botão com valores dinâmicos */}
          <CheckoutButton pacote={pacote} valor={valor} />
        </div>
      </div>
    </div>
  );
};

export default ServicosPage;