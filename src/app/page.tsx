"use client";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="menu">
        <nav>
          <ul>
            <li><Link href="#home">Início</Link></li>
            <li><Link href="#sobre">Sobre</Link></li>
            <li><Link href="#cursos">Cursos</Link></li>
            <li><Link href="#contato">Contato</Link></li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <h1>Bem-vindo ao <span>IonKod!</span></h1>
        <p>Adquira conhecimento prático e transforme sua carreira.</p>
        <Link href="/payment" className="btn">Adquirir Curso</Link>
      </section>

      <footer>
        <p>&copy; 2024 IonKod. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default HomePage;
