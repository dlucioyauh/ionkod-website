// src/components/CheckoutButton.tsx
'use client';

const CheckoutButton = ({ pacote, valor }: { pacote: string; valor: number }) => {
  const handlePayment = async () => {
    try {
      const response = await fetch('/api/mercado-pago', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ pacote, valor }),
      });

      const { id } = await response.json();
      window.location.href = `https://www.mercadopago.com.br/checkout/v1/redirect?preference-id=${id}`;
    } catch (error) {
      console.error('Erro ao processar o pagamento:', error);
      alert('Erro ao processar o pagamento. Tente novamente.');
    }
  };

  return (
    <button
      onClick={handlePayment}
      className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
    >
      Pagar com Mercado Pago
    </button>
  );
};

export default CheckoutButton;