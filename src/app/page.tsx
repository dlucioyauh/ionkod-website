// src/app/page.tsx

"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/animations"; // Supondo que este seja o caminho correto

const HomePage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

  // Configura o canvas e as partículas
  useEffect(() => {
    if (!isClient) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: { x: number; y: number; size: number; speed: number }[] = [];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 4 + 1,
        speed: Math.random() * 2 + 0.5,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(255, 255, 255, 0.7)";

      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        particle.y += particle.speed;
        if (particle.y > canvas.height) {
          particle.y = 0;
          particle.x = Math.random() * canvas.width;
        }
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, [isClient]);

  return (
    <motion.div
      className="homepage relative w-full h-screen flex items-center justify-center overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      {/* 🔹 Fundo Animado */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full"
      ></canvas>

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
    </motion.div>
  );
};

export default HomePage;