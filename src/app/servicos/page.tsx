// src/app/servicos/page.tsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import CheckoutButton from '../../components/CheckoutButton';

const ServicosPage = () => {
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
            <li className="flex items-center gap-3">
              ✅ Reuniões com especialista dedicado aos seus objetivos
            </li>
            <li className="flex items-center gap-3">
              ✅ Estratégias personalizadas para potencializar seus resultados
            </li>
            <li className="flex items-center gap-3">
              ✅ Orientação prática para organizar sua agenda de forma inteligente
            </li>
          </ul>

          {/* Botão com animação */}
          <CheckoutButton pacote="Pacote Básico" valor={1200} />
        </div>
      </div>
    </div>
  );
};

export default ServicosPage;