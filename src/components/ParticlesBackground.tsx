// src/components/ParticlesBackground.tsx
"use client";

import { useCallback } from "react";
import { loadSlim } from "@tsparticles/slim";
import { Particles } from "@tsparticles/react";
import type { Engine } from "@tsparticles/engine";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true },
        particles: {
          number: { value: 100, density: { enable: true, area: 800 } },
          shape: { type: "circle" },
          opacity: { value: 0.5, random: true },
          size: { value: { min: 1, max: 5 } },
          move: { enable: true, speed: 2, direction: "none", outModes: "out" },
        },
        interactivity: {
          events: { onHover: { enable: true, mode: "repulse" }, onClick: { enable: true, mode: "push" } },
          modes: { repulse: { distance: 100 }, push: { quantity: 4 } },
        },
        background: { color: "#1f2937" },
      }}
    />
  );
};

export default ParticlesBackground;
