"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const ServicosPage = () => {
  return (
    <div className="bg-gradient-to-r from-[#1f2937] to-[#71a3c1] text-white min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        {/* Imagem - Ordem alterada em mobile */}
        <div className="order-2 md:order-1 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md"
          >
            <Image 
              src="/images/ISABELAMOURA.png" 
              alt="Isabela Moura"
              width={400}
              height={500}
              className="w-full h-auto rounded-xl shadow-lg"
              priority
            />
          </motion.div>
        </div>

        {/* Texto e Botão */}
        <div className="order-1 md:order-2 max-w-2xl mx-auto md:max-w-lg">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center md:text-left">
              Consultoria com Isabela Moura
            </h2>
            <p className="text-lg sm:text-xl text-gray-200 mb-6 text-center md:text-left">
              Transforme sua jornada com uma consultoria especializada.
            </p>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3 text-base sm:text-lg">
                <span>✅</span>
                Reuniões com especialista dedicado aos seus objetivos
              </li>
              <li className="flex items-start gap-3 text-base sm:text-lg">
                <span>✅</span>
                Estratégias personalizadas para potencializar seus resultados
              </li>
              <li className="flex items-start gap-3 text-base sm:text-lg">
                <span>✅</span>
                Orientação prática para organizar sua agenda de forma inteligente
              </li>
            </ul>

            {/* Botão com animação */}
            <motion.div 
              className="mt-5 flex justify-center md:justify-start"
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/payment" className="block w-full sm:w-auto">
                <button className="btn flex items-center gap-2 bg-white text-[#1f2937] px-6 py-3 rounded-lg font-semibold text-sm sm:text-base w-full justify-center transition-transform hover:bg-opacity-90">
                  <Image 
                    src="/images/passarinho.png" 
                    alt="Símbolo" 
                    width={24} 
                    height={24}
                    className="w-6 h-6"
                  />
                  Adquira a Consultoria
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServicosPage;