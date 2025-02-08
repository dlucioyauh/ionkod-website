// src/components/CheckoutButton.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const CheckoutButton = ({ pacote, valor }: { pacote: string; valor: number }) => {
  const handlePayment = async () => {
    try {
      // Envia os dados para a API do Mercado Pago
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
    <motion.div className="mt-5" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <button onClick={handlePayment} className="btn flex items-center gap-2">
        <Image src="/images/passarinho.png" alt="Símbolo" width={30} height={30} />
        Adquira a Consultoria
      </button>
    </motion.div>
  );
};

export default CheckoutButton;