'use client';

import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const image = document.querySelector(".moving-image");
    if (image) {
      image.style.animation = "moveImage 10s infinite";
    }
  }, []);

  return (
    <div>
      <header className="bg-black bg-opacity-60 p-4 sticky top-0 flex justify-between items-center">
        <h1 className="text-white font-bold text-lg">IonKod</h1>
        <nav>
          <ul className="flex gap-4">
            <li><a href="#sobre" className="text-white hover:text-yellow-400">Sobre</a></li>
            <li><a href="#servicos" className="text-white hover:text-yellow-400">Serviços</a></li>
            <li><a href="#curso" className="text-white hover:text-yellow-400">Curso</a></li>
          </ul>
        </nav>
      </header>

      <div className="image-container">
        <img src="/loop.png" alt="Loop Image" className="moving-image" />
      </div>

      <main>
        <section className="hero text-center py-20">
          <h2 className="text-4xl text-white font-bold mb-4">Bem-vindo à IonKod</h2>
          <p className="text-lg text-white mb-6">
            Transformando ideias em soluções tecnológicas inovadoras.
          </p>
          <a
            href="#curso"
            className="bg-yellow-400 text-black px-4 py-2 rounded hover:scale-105 transition-transform"
          >
            Saiba Mais
          </a>
        </section>

        <section id="sobre" className="py-10 px-4 text-center bg-gray-800 text-white">
          <h3 className="text-3xl font-bold mb-4">Sobre Nós</h3>
          <p className="text-lg">
            A IonKod é uma empresa que visa transformar o mundo por meio de tecnologia
            moderna e acessível, criando oportunidades e soluções para empresas e
            indivíduos.
          </p>
        </section>

        <section id="servicos" className="py-10 px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Nossos Serviços</h3>
          <ul className="list-none">
            <li className="bg-white bg-opacity-10 text-white p-4 mb-2 rounded">
              Desenvolvimento de Sites
            </li>
            <li className="bg-white bg-opacity-10 text-white p-4 mb-2 rounded">
              Aplicativos Móveis
            </li>
            <li className="bg-white bg-opacity-10 text-white p-4 mb-2 rounded">
              Soluções de E-commerce
            </li>
            <li className="bg-white bg-opacity-10 text-white p-4 mb-2 rounded">
              Consultoria Tecnológica
            </li>
          </ul>
        </section>

        <section id="curso" className="py-10 px-4 text-center bg-gray-800 text-white">
          <h3 className="text-3xl font-bold mb-4">Curso Exclusivo</h3>
          <p className="text-lg mb-6">
            Adquira conhecimento prático e transforme sua carreira.
          </p>
          <a
            href="#"
            className="bg-green-500 px-4 py-2 rounded text-white hover:bg-green-400"
          >
            Faça o Download Agora
          </a>
        </section>
      </main>

      <footer className="text-center py-4 bg-black text-white">
        <p>&copy; 2024 IonKod. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
