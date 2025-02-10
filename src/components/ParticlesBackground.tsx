// src/components/ParticlesBackground.tsx

"use client";

import dynamic from "next/dynamic";

// Carrega o componente Particles dinamicamente, desabilitando SSR
const Particles = dynamic(() => import("@tsparticles/react"), { ssr: false });

const ParticlesBackground = () => {
  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: {
            value: "#1f2937", // Cor de fundo
          },
        },
        particles: {
          number: {
            value: 100, // Número de partículas
            density: {
              enable: true,
              value_area: 800, // Propriedade correta para densidade
            } as { enable: boolean; value_area: number }, // Type assertion
          },
          shape: {
            type: "circle", // Formato das partículas
          },
          opacity: {
            value: 0.5, // Opacidade das partículas
          },
          size: {
            value: { min: 1, max: 5 }, // Tamanho das partículas
          },
          move: {
            enable: true, // Habilita movimento
            speed: 2, // Velocidade do movimento
            direction: "none", // Direção do movimento
            outModes: "out", // Comportamento ao sair da tela
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true, // Interatividade ao passar o mouse
              mode: "repulse", // Modo de repulsão
            },
            onClick: {
              enable: true, // Interatividade ao clicar
              mode: "push", // Modo de empurrar
            },
          },
          modes: {
            repulse: {
              distance: 100, // Distância de repulsão
            },
            push: {
              quantity: 4, // Quantidade de partículas ao empurrar
            },
          },
        },
      }}
    />
  );
};

export default ParticlesBackground;