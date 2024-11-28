import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

const PaymentPage = () => {
  const handlePayment = async () => {
    const stripe = await stripePromise;

    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });

    const { id } = await response.json();
    const { error } = await stripe?.redirectToCheckout({ sessionId: id })!;

    if (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-800 text-white">
      <h2 className="text-3xl font-bold mb-6">Pagamento do Curso</h2>
      <p className="text-lg mb-6">Realize o pagamento para acessar o conteúdo exclusivo.</p>
      <button
        onClick={handlePayment}
        className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg"
      >
        Pagar Agora
      </button>
    </div>
  );
};

export default PaymentPage;
