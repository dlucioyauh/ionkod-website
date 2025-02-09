"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/animations";
import { useState, useEffect } from "react";

const HomePage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<{ x: number, y: number }[]>([]);
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);

      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Gerar partículas aleatórias quando o mouse se move
      setParticles(prevParticles => [
        ...prevParticles,
        { x: e.clientX, y: e.clientY }
      ]);

      if (particles.length > 10) {
        setParticles(particles.slice(1));  // Limita o número de partículas na tela
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [particles]);

  return (
    <motion.div 
      className="homepage relative"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      {/* 🔹 Novo vídeo de fundo */}
      <video 
        autoPlay 
        loop 
        muted 
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/images/Imagemdefundo.mp4" type="video/mp4" />
      </video>

      {/* Partículas interativas */}
      {particles.map((particle, index) => (
        <div
          key={index}
          className="particle absolute"
          style={{
            top: `${particle.y}px`,
            left: `${particle.x}px`,
            transform: `translate(-50%, -50%)`,
            animationDelay: `${index * 0.1}s`,
          }}
        ></div>
      ))}

      {/* Conteúdo principal */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
        animate={{
          scale: windowWidth ? mousePosition.x / windowWidth + 0.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <h1 className="text-4xl font-bold text-white mb-4">
          Bem-vindo ao <span className="text-yellow-500">IonKod!</span>
        </h1>
        <p className="text-lg text-gray-100">Adquira conhecimento prático e transforme sua carreira.</p>
      </motion.div>
    </motion.div>
  );
};

export default HomePage;
