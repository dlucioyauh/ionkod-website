// src/utils/ParticlesBackground.tsx

"use client";

import dynamic from "next/dynamic";

// Carrega o componente Particles dinamicamente, desabilitando SSR
const Particles = dynamic(() => import("@tsparticles/react"), { ssr: false });

const ParticlesBackground = () => {
  return (
    <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1 }}>
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
                value_area: 800, // Usando "value_area" com type assertion
              } as { enable: boolean; value_area: number }, // Type assertion
            },
            color: {
              value: "#ffffff", // Cor das partículas
            },
            shape: {
              type: "circle", // Formato das partículas
            },
            opacity: {
              value: 0.5, // Opacidade das partículas
            },
            size: {
              value: 3, // Tamanho das partículas (valor único)
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
                enable: true, // Habilita interação ao passar o mouse
                mode: "repulse", // Modo de interação (repulsão)
              },
              onClick: {
                enable: true, // Habilita interação ao clicar
                mode: "push", // Modo de interação (empurrar)
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
    </div>
  );
};

export default ParticlesBackground;