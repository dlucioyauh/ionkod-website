// src/app/servicos/consultorias/page.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function Consultorias() {
  return (
    <main>
      <h1>Consultorias</h1>
      <section>
        <h2>Isabela Moura</h2>
        <Image src="/images/isabela.jpg" alt="Isabela Moura" width={150} height={150} />
        <p>Consultoria da Isabela Moura.</p>
        <Link href="/servicos/consultorias/pacotes">
          <button>Adquirir</button>
        </Link>
      </section>
      {/* Inclua seções para outros parceiros quando necessário */}
    </main>
  );
}
