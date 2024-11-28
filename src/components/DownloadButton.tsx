// src/components/DownloadButton.tsx
import { useState } from 'react';

const DownloadButton = () => {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);

    // Faz a requisição para a API que verifica se o pagamento foi realizado
    const response = await fetch('/api/get-pdf');
    
    if (response.status === 200) {
      // Se o pagamento foi confirmado, inicia o download
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Aula+01+Inaugural.pdf';
      a.click();
      window.URL.revokeObjectURL(url);
    } else {
      alert('Você precisa pagar para acessar o PDF.');
    }

    setLoading(false);
  };

  return (
    <button
      onClick={handleDownload}
      disabled={loading}
      className="bg-blue-500 text-white p-3 rounded"
    >
      {loading ? 'Baixando...' : 'Baixar PDF'}
    </button>
  );
};

export default DownloadButton;
