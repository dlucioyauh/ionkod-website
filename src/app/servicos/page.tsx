"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const ServicosPage = () => {
  return (
    <div className="bg-gradient-to-r from-[#1f2937] to-[#71a3c1] text-white min-h-screen flex items-center justify-center px-10">
      <div className="max-w-6xl w-full grid grid-cols-2 gap-16 items-center">
        
        {/* Imagem */}
        <div className="flex justify-center">
          <Image 
            src="/images/ISABELAMOURA.png" 
            alt="Isabela Moura"
            width={400}
            height={500}
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* Texto e Botão */}
        <div className="max-w-lg">
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
          <motion.div className="mt-5" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link href="/payment">
              <button className="btn flex items-center gap-2">
                <Image src="/images/passarinho.png" alt="Símbolo" width={30} height={30} />
                Adquira a Consultoria
              </button>
            </Link>
          </motion.div>

        </div>

      </div>
    </div>
  );
};

export default ServicosPage;
