// src/app/page.tsx

"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/animations";
import { useState, useEffect } from "react";

const HomePage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div 
      className="homepage relative overflow-hidden h-screen bg-black"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      {/* Fundo com IA e tecnologia */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: "url('/futuristic-tech-bg.jpg')",  // Substitua por uma imagem de fundo futurista
          transform: `translate(${mousePosition.x / 50}px, ${mousePosition.y / 50}px)`,
          transition: "transform 0.1s ease-out"
        }}
      ></div>

      {/* Elementos interativos de IA */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
        animate={{
          scale: mousePosition.x / window.innerWidth + 0.5, // Altera o tamanho com a posição do mouse
        }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <h1 className="text-4xl font-bold text-white mb-4">
          Bem-vindo ao <span className="text-yellow-500">IonKod!</span>
        </h1>
        <p className="text-lg text-gray-100">Adquira conhecimento prático e transforme sua carreira.</p>
      </motion.div>

      {/* Objetos interativos que se movem com o mouse */}
      <motion.div
        className="absolute top-16 left-16 w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center shadow-lg cursor-pointer"
        style={{
          position: "absolute",
          left: `${mousePosition.x - 50}px`,
          top: `${mousePosition.y - 50}px`,
        }}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{
          type: "spring",
          stiffness: 50,
        }}
      >
        <span className="text-white">🤖</span>
      </motion.div>

      {/* Adicionando mais objetos interativos que "fogem" ao passar o mouse */}
      {[...Array(5)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center shadow-lg cursor-pointer"
          animate={{
            x: mousePosition.x + Math.random() * 100 - 50,
            y: mousePosition.y + Math.random() * 100 - 50,
          }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 20,
          }}
        >
          <span className="text-white">💡</span>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default HomePage;
