// src/app/contato/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Contato() {
  const [message, setMessage] = useState('');

  const handleEmailSend = () => {
    const mailtoLink = `mailto:dlucio.douglas@gmail.com?subject=Contato%20IonKod&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-white p-6"
      style={{ background: 'linear-gradient(to right, #1f2937 0%, #71a3c1 100%)' }}
    >
      <h1 className="text-4xl font-bold mb-6">Contato</h1>

      <section className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-lg text-center">
        <p className="text-lg mb-4">Entre em contato para mais informações:</p>
        <p className="text-lg"><strong>Email:</strong> dlucio.douglas@gmail.com</p>
        <p className="text-lg mb-6"><strong>WhatsApp:</strong> +55 48 99612-6202</p>

        <textarea
          className="w-full p-3 rounded-md text-black"
          rows={4}
          placeholder="Digite sua mensagem..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <div className="mt-4 flex flex-col gap-3">
          <button
            onClick={handleEmailSend}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Enviar E-mail
          </button>

          <Link href="https://wa.me/5548996126202" target="_blank">
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition">
              Entrar em Contato pelo WhatsApp
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
