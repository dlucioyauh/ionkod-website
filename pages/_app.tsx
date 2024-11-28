import { useEffect } from 'react';
import '../app/globals.css';

function MyApp({ Component, pageProps }: any) {
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
