// src/components/CheckoutButton.tsx
'use client';

const CheckoutButton = ({ pacote, valor }: { pacote: string; valor: number }) => {
  const handlePayment = async () => {
    try {
      // Verifica se os dados estão corretos
      if (!pacote || valor <= 0) {
        alert('Por favor, selecione um pacote válido.');
        return;
      }

      // Envia os dados para a API
      const response = await fetch('/api/mercado-pago', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ pacote, valor }),
      });

      // Verifica se a resposta foi bem-sucedida
      if (!response.ok) {
        throw new Error('Erro ao processar o pagamento.');
      }

      // Extrai o ID da preferência de pagamento
      const { id } = await response.json();

      // Redireciona para o checkout do Mercado Pago
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