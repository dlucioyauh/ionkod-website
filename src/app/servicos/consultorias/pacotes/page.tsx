"use client";

import { useState } from "react";

const ServiceOptions = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const services = [
    {
      title: "Pacote Básico: Estratégia Inicial",
      price: "R$ 1.187",
      checkoutUrl: "https://www.mercadopago.com/checkout?amount=1187",
      description: [
        "4 sessões de 1h cada (online)",
        "Diagnóstico inicial do negócio do cliente",
        "Plano de ação personalizado com 3 metas prioritárias",
        "Acesso a templates básicos de organização de agenda",
        "Suporte por e-mail entre sessões",
      ],
      audience: "Empreendedores iniciantes ou quem busca orientação pontual.",
    },
    {
      title: "Pacote Intermediário: Potencializador de Resultados",
      price: "R$ 2.489",
      checkoutUrl: "https://www.mercadopago.com/checkout?amount=2489",
      description: [
        "5 sessões de 1h30 cada (online)",
        "Tudo do Pacote Básico +",
        "Análise detalhada de concorrência e posicionamento de mercado",
        "Estratégias de vendas e marketing digital",
        "Templates premium de gestão de tempo e planilha financeira",
        "1 semana de suporte via WhatsApp pós-consultoria",
      ],
      audience: "Donos de negócios consolidados que querem escalar ou melhorar processos.",
    },
    {
      title: "Pacote Premium: Transformação Completa",
      price: "R$ 4.897",
      checkoutUrl: "https://www.mercadopago.com/checkout?amount=4897",
      description: [
        "5 sessões de 2h cada (online ou presencial, se viável)",
        "Tudo do Pacote Intermediário +",
        "Acompanhamento mensal por 3 meses (2 sessões extras de 30min)",
        "Elaboração de um Manual do Negócio personalizado",
        "Revisão de portfólio de produtos e dicas para pricing",
      ],
      audience: "Empresas em fase de expansão ou profissionais que desejam posicionamento premium.",
    },
  ];

  const optionalExtras = [
    { name: "E-book de Receitas-Base Saudáveis", price: "R$ 197" },
    { name: "Auditoria de Redes Sociais", price: "R$ 287" },
    { name: "Mentoria privada", price: "R$ 187" },
  ];

  return (
    <div className="container mx-auto p-6 font-sans text-white">
      <h2 className="text-4xl font-bold text-center mb-8">
        Nossos Serviços
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col border border-gray-300 p-6 rounded-lg shadow hover:shadow-lg transition"
          >
            <h3 className="text-2xl font-semibold mb-2">
              {service.title}
            </h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              {service.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p className="text-sm text-gray-300 mb-4">{service.audience}</p>
            <div className="mt-auto flex justify-between items-center">
              <p className="text-xl font-bold text-blue-400">
                {service.price}
              </p>
              <a
                href={service.checkoutUrl}
                className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition"
              >
                Adquirir
              </a>
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-3xl font-bold mt-12 text-center mb-6">
        Adicionais Opcionais
      </h3>
      <div className="grid md:grid-cols-3 gap-6">
        {optionalExtras.map((extra, index) => (
          <div
            key={index}
            className="flex flex-col border border-gray-300 p-4 rounded-lg shadow hover:shadow-md transition"
          >
            <p className="text-xl font-semibold mb-2">{extra.name}</p>
            <p className="text-blue-300 font-bold text-lg mb-4">
              {extra.price}
            </p>
            <div className="mt-auto flex justify-center">
              <a
                href="https://www.mercadopago.com/checkout"
                className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
              >
                Adicionar
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceOptions;
