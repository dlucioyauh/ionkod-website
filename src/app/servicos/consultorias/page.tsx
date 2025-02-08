// src/app/servicos/consultorias/page.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Consultorias() {
  return (
    <main className="flex flex-col items-start justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-8">Consultorias</h1>

      <section className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-semibold mb-4">Isabela Moura</h2>

        <div className="flex items-center gap-4">
          <Image
            src="/images/ISABELAMOURA.png"
            alt="Isabela Moura"
            width={100}
            height={100}
            className="rounded-full"
          />
          <p className="text-lg">Consultoria da Isabela Moura.</p>
        </div>

        {/* Botão com animação */}
        <motion.div className="mt-5" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link href="/servicos/consultorias/pacotes">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-600 transition">
              <Image src="/images/passarinho.png" alt="Símbolo" width={25} height={25} />
              Adquira a Consultoria
            </button>
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
