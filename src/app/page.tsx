// src/app/page.tsx

"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/animations"; // Supondo que este seja o caminho correto

const HomePage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);
  const [currentImage, setCurrentImage] = useState(1); // Estado para controlar a imagem atual

  // Verifica se o código está sendo executado no cliente
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsClient(true);
    }
  }, []);

  // Atualiza a posição do mouse
  useEffect(() => {
    if (!isClient) return;

    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isClient]);

  // Alterna entre as imagens a cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev % 6) + 1); // Alterna entre 1 e 6
    }, 5000); // 5 segundos

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, []);

  return (
    <div
      className="homepage relative w-full h-screen overflow-hidden"
      style={{ backgroundImage: `url('/images/${currentImage}.png')` }} // Define a imagem de fundo dinamicamente
    >
      {/* 🔹 Conteúdo Principal */}
      {isClient && ( // Renderiza apenas no cliente
        <motion.div
          className="text-center z-10"
          animate={{
            scale: mousePosition.x / window.innerWidth + 0.5,
          }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <h1 className="text-4xl font-bold text-white mb-4">
            Bem-vindo ao <span className="text-yellow-500">IonKod!</span>
          </h1>
          <p className="text-lg text-gray-100">
            Adquira conhecimento prático e transforme sua carreira.
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default HomePage;