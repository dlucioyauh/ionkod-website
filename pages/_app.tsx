import { useEffect } from 'react';
import { AppProps } from 'next/app'; // Importando o tipo correto
import '../src/app/globals.css';

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

  return <Component {...pageProps} />;
}

export default MyApp;
