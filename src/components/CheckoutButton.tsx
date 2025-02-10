// src/components/CheckoutButton.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const CheckoutButton = ({ pacote, valor }: { pacote: string; valor: number }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handlePayment = async () => {
    setIsLoading(true);

    try {
      const response = await fetch("/api/mercado-pago", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ pacote, valor }),
      });

      if (!response.ok) {
        throw new Error("Erro ao processar o pagamento.");
      }

      const { init_point } = await response.json();

      if (typeof window !== "undefined") {
        window.location.href = init_point;
      }
    } catch (error) {
      console.error("Erro ao processar o pagamento:", error);
      alert("Erro ao processar o pagamento. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div className="mt-5" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <button
        onClick={handlePayment}
        className="btn flex items-center gap-2"
        disabled={isLoading}
      >
        <Image src="/images/passarinho.png" alt="Símbolo" width={30} height={30} />
        {isLoading ? "Processando..." : "Adquira a Consultoria"}
      </button>
    </motion.div>
  );
};

export default CheckoutButton;
