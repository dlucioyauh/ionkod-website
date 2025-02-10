// src/components/Header.tsx
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Image src="/logo.png" alt="IonKod Logo" width={150} height={50} />
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">Sobre</Link></li>
            <li><Link href="/services">Serviços</Link></li>
            <li><Link href="/contact">Contato</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
} 