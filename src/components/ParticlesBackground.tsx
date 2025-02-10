"use client";

import { Particles } from "@tsparticles/react";

const ParticlesBackground = () => {
  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: {
            value: "#1f2937",
          },
        },
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 800, // Corrigido para "value_area"
            },
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.5, // Removido "random"
          },
          size: {
            value: { min: 1, max: 5 },
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            outModes: "out",
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            onClick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            repulse: {
              distance: 100,
            },
            push: {
              quantity: 4,
            },
          },
        },
      }}
    />
  );
};

export default ParticlesBackground;
