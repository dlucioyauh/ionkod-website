// src/app/_app.tsx
import { useEffect } from 'react';
import { AppProps } from 'next/app';
import '../src/app/globals.css';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Carrega o script Stripe
    const script = document.createElement('script');
    script.src = "https://js.stripe.com/v3/";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Limpeza ao sair da página
    };
  }, []);

  return (
    <>
      <main>
        <Component {...pageProps} />
      </main>
      <Footer /> {/* Rodapé adicionado após a renderização da página */}
    </>
  );
}

export default MyApp;
