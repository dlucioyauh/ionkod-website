// src/app/sobre/page.tsx
'use client';

import Image from 'next/image';

export default function Sobre() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-white px-6 py-12"
      style={{ background: 'linear-gradient(to right, #1f2937 0%, #71a3c1 100%)' }}
    >
      <section className="w-full max-w-5xl text-center">
        <h1 className="text-5xl font-bold mb-6">Sobre a IonKod</h1>

        <div className="relative w-full h-64 mb-8">
          <Image
            src="/images/7.png"
            alt="Equipe IonKod"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>

        <p className="text-lg mb-4">
          A <strong>IonKod</strong> é uma empresa em fase de crescimento, especializada em
          <strong> desenvolvimento de software, criação de sites e integração de sistemas</strong>.
        </p>

        <p className="text-lg mb-4">
          Estamos evoluindo para nos tornar uma <strong>plataforma digital completa</strong>, 
          que oferecerá vídeos, palestras e consultorias para impulsionar negócios e inovação.
        </p>

        <p className="text-lg mb-6">
          Nosso compromisso é <strong>transformar ideias em soluções tecnológicas</strong>, 
          ajudando empresas e profissionais a crescerem com eficiência e qualidade.
        </p>
      </section>

      <section className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between bg-gray-800 p-6 rounded-lg shadow-lg mt-8">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-3xl font-semibold">Nosso Propósito</h2>
          <p className="text-lg mt-4">
            Criar soluções inovadoras que conectam pessoas e tecnologia, 
            proporcionando resultados estratégicos para nossos clientes.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">
            Conheça Nossos Serviços
          </button>

          <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition">
            Entre em Contato
          </button>
        </div>
      </section>
    </main>
  );
}
