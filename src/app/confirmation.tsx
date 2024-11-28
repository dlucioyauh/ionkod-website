import { useEffect, useState } from 'react';
import DownloadButton from '../components/DownloadButton';

// Defina um tipo para a session, com base nos dados que você espera
interface Session {
  id: string;
  payment_status: string; // Adicione outros campos conforme necessário
}

const Confirmation = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [session, setSession] = useState<Session | null>(null); // Usando o tipo 'Session'

  useEffect(() => {
    const sessionId = new URLSearchParams(window.location.search).get('session_id');

    if (sessionId) {
      fetch(`/api/check-session?session_id=${sessionId}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            setSession(data.session); // Armazena a session
            setLoading(false);
          } else {
            setError('Pagamento não confirmado.');
            setLoading(false);
          }
        })
        .catch(() => {
          setError('Erro ao verificar o pagamento.');
          setLoading(false);
        });
    }
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-800 to-gray-500 text-white">
      <h1 className="text-4xl font-semibold mb-4">Obrigado pela Compra!</h1>
      <p className="text-xl mb-6">Seu pagamento foi aprovado com sucesso.</p>
      {/* Aqui, você pode usar a session para exibir o status ou outros dados */}
      <p>Status do pagamento: {session?.payment_status}</p>
      <DownloadButton />
    </div>
  );
};

export default Confirmation;
