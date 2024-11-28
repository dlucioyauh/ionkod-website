// src/components/CheckoutButton.tsx
import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const CheckoutButton = () => {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);

    // Definindo os itens que o usuário está comprando
    const items = [
      { name: 'Produto de Exemplo', price: 25, quantity: 1 }, // 25 centavos = 0.25 BRL
    ];

    // Faz a requisição para criar a sessão de checkout
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      body: JSON.stringify({ items }), // Envie os itens para a criação da sessão
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const session = await response.json();

    if (session.error) {
      console.error('Erro ao criar a sessão:', session.error);
      setLoading(false);
      return;
    }

    // Inicializa o Stripe com a chave pública
    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');

    if (!stripe) {
      console.error('Falha ao inicializar o Stripe!');
      setLoading(false);
      return;
    }

    // Redireciona para o Stripe Checkout
    const { error } = await stripe.redirectToCheckout({
      sessionId: session.id, // Passe o sessionId que você recebeu da sua API
    });

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
