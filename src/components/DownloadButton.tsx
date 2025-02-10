// src/components/DownloadButton.tsx
"use client";

import { useState } from "react";

const DownloadButton = () => {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);

    try {
      const response = await fetch("/api/get-pdf");

      if (response.status === 200) {
        const blob = await response.blob();
        if (typeof window !== "undefined") {
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = "Aula+01+Inaugural.pdf";
          a.click();
          window.URL.revokeObjectURL(url);
        }
      } else {
        alert("Você precisa pagar para acessar o PDF.");
      }
    } catch {
      alert("Erro ao tentar baixar o PDF. Tente novamente.");
    }

    setLoading(false);
  };

  return (
    <button
      onClick={handleDownload}
      disabled={loading}
      className="bg-blue-500 text-white p-3 rounded"
    >
      {loading ? "Baixando..." : "Baixar PDF"}
    </button>
  );
};

export default DownloadButton;
