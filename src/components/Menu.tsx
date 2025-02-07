import Link from 'next/link';

const Menu = () => {
  return (
    <nav className="menu">
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/sobre">Sobre</Link></li>
        <li><Link href="/servicos">Serviços</Link></li>
        <li><Link href="/contato">Contato</Link></li>
      </ul>
    </nav>
  );
};

export default Menu;
