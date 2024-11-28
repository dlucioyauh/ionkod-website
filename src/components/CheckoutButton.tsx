import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';  // Corrigir a importação

const CheckoutButton = () => {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);

    // Faz a requisição para criar a sessão de checkout
    const response = await fetch('/api/create-checkout-session', { method: 'POST' });
    const session = await response.json();

    // Inicializa o Stripe com a chave pública
    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');

    if (!stripe) {
      console.error('Falha ao inicializar o Stripe!');
      setLoading(false);
      return;
    }

    // Redireciona para o Stripe Checkout
    const { error } = await stripe.redirectToCheckout({ sessionId: session.id });

    if (error) {
      console.error('Error:', error);
    }

    setLoading(false);
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={loading}
      className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg"
    >
      {loading ? 'Processando...' : 'Pagar Agora'}
    </button>
  );
};

export default CheckoutButton;
