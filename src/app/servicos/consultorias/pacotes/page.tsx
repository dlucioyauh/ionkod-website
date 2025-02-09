// src/app/servicos/consultorias/pacotes/page.tsx

"use client";

import { useState } from "react";

const ServiceOptions = () => {
  const [loading, setLoading] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [selectedExtras, setSelectedExtras] = useState<{ [key: string]: boolean }>({});

  const services = [
    {
      title: "Plano A. Estratégia Inicial",
      originalPrice: 148900, // R$ 1489 em centavos
      price: 118700, // R$ 1187 em centavos (promoção)
      description: [
        "2 sessões de 1h cada (online)",
        "Diagnóstico inicial do negócio do cliente",
        "Plano de ação personalizado com 3 metas prioritárias",
        "Estratégias de organização de agenda",
        "Recebimento do material por e-mail",
        "Até 10 receitas do nosso Cookbook! (aprenda a criar suas próprias receitas)",
        "Cortesia: Planilha de precificação",
      ],
      audience: "Empreendedores iniciantes ou quem busca orientação pontual.",
    },
    {
      title: "Intermediário: Potencializador de Resultados",
      price: 248900, // R$ 2489 em centavos
      description: [
        "3 sessões de 1h30 cada (online)",
        "Tudo do Pacote Básico +",
        "Análise detalhada de concorrência e posicionamento de mercado",
        "Estratégias de vendas e marketing",
        "Personalise seu Cookbook! (aprenda a criar suas próprias receitas)",
        "1 semana de suporte via WhatsApp pós-consultoria",
      ],
      audience: "Donos de negócios consolidados que querem escalar ou melhorar processos.",
    },
    {
      title: "Pacote Premium: Transformação Completa",
      price: 489700, // R$ 4897 em centavos
      description: [
        "4 sessões de 2h cada online (Presencial valor a parte)",
        "Tudo do Pacote Intermediário +",
        "Acompanhamento mensal por 3 meses",
        "Elaboração de um Manual do Negócio personalizado",
        "Revisão de portfólio de produtos e dicas para pricing",
        "Cookbook completo livro de receitas-base saudáveis",
        "App de Precificação de produtos ou landpage (Parceria IONKOD)",
      ],
      audience: "Empresas em fase de expansão ou profissionais que desejam posicionamento premium.",
    },
  ];

  const optionalExtras = [
    { name: "Cookbook de Receitas-Base Saudáveis", price: 25700 }, // R$ 257 em centavos
    { name: "Auditoria Instagram", price: 19700 }, // R$ 197 em centavos
    { name: "Mentoria privada. A partir de", price: 18700 }, // R$ 187 em centavos
  ];

  const handleCheckout = async (amount: number, pacote: string, isExtra: boolean = false) => {
    setLoading(true);
    try {
      const selectedExtrasTotal = Object.keys(selectedExtras)
        .filter(key => selectedExtras[key])
        .reduce((total, key) => {
          const extra = optionalExtras.find(extra => extra.name === key);
          return total + (extra ? extra.price : 0);
        }, 0);

      const totalAmount = isExtra ? amount : amount + selectedExtrasTotal;

      const res = await fetch("/api/mercado-pago", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          pacote,
          valor: totalAmount / 100,
        }),
      });

      const data = await res.json();
      if (data.init_point) {
        window.location.href = data.init_point;
      }
    } catch (error) {
      console.error("Erro no checkout:", error);
    }
    setLoading(false);
  };

  const toggleExtra = (extraName: string) => {
    setSelectedExtras(prevState => ({
      ...prevState,
      [extraName]: !prevState[extraName],
    }));
  };

  return (
    <div className="container mx-auto p-6 font-sans text-[#FFFF]">
      <h2 className="text-4xl font-bold text-center mb-8">Nossos Serviços</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col border border-gray-300 p-6 rounded-lg shadow hover:shadow-lg transition"
          >
            <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              {service.description?.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p className="text-sm text-gray-300 mb-4">{service.audience}</p>
            <div className="mt-auto flex flex-col items-start">
              {service.originalPrice && (
                <p className="text-lg text-gray-400 line-through">
                  De: R$ {(service.originalPrice / 100).toFixed(2)}
                </p>
              )}
              <p className="text-xl font-bold text-blue-400">
                Por: R$ {(service.price / 100).toFixed(2)}
              </p>
            </div>
            <button
              onClick={() => {
                setSelectedPackage(service.title);
                handleCheckout(service.price, service.title);
              }}
              className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition mt-4"
              disabled={loading}
            >
              {loading ? "Carregando..." : "Adquirir"}
            </button>
          </div>
        ))}
      </div>

      <h3 className="text-3xl font-bold mt-12 text-center mb-6">Adicionais Opcionais</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {optionalExtras.map((extra, index) => (
          <div
            key={index}
            className="flex flex-col border border-gray-300 p-4 rounded-lg shadow hover:shadow-md transition"
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={selectedExtras?.[extra.name] || false}
                onChange={() => toggleExtra(extra.name)}
                className="mr-2"
              />
              <p className="text-xl font-semibold">{extra.name}</p>
            </div>
            <p className="text-blue-300 font-bold text-lg mb-4">
              R$ {(extra.price / 100).toFixed(2)}
            </p>
            <button
              onClick={() => handleCheckout(extra.price, extra.name, true)}
              className="bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700 transition"
              disabled={loading}
            >
              {loading ? "Carregando..." : "Comprar Separado"}
            </button>
          </div>
        ))}
      </div>

      {selectedPackage && (
        <div className="mt-8 text-center">
          <button
            onClick={() => handleCheckout(0, selectedPackage)}
            className="bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700 transition"
            disabled={loading}
          >
            {loading ? "Carregando..." : "Finalizar Compra"}
          </button>
        </div>
      )}
    </div>
  );
};

export default ServiceOptions;
