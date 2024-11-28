import DownloadButton from '../components/DownloadButton';

const Confirmation = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-800 to-gray-500 text-white">
      <h1 className="text-4xl font-semibold mb-4">Obrigado pela Compra!</h1>
      <p className="text-xl mb-6">Seu pagamento foi aprovado com sucesso.</p>
      {/* Usando o DownloadButton para gerenciar o download do PDF */}
      <DownloadButton />
    </div>
  );
};

export default Confirmation;
