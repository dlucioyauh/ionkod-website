// src/app/page.tsx
"use client";

import ParticlesBackground from "@/components/ParticlesBackground";

export default function Home() {
  return (
    <div className="relative w-full h-screen bg-gradient-to-r from-gray-900 to-blue-400">
      <ParticlesBackground />
      <main className="flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-4xl font-bold">Bem-vindo à IonKod</h1>
        <p className="mt-4 text-lg">Soluções inovadoras para o seu negócio</p>
      </main>
    </div>
  );
}
