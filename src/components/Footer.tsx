import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto grid md:grid-cols-3 gap-8 px-4">
        <div>
          <h3 className="text-xl font-bold mb-4">Serviços</h3>
          <ul>
            <li><Link href="/servicos/consultorias">Consultoria</Link></li>
            <li><Link href="/servicos">Desenvolvimento</Link></li>
            <li><Link href="/servicos">SEO</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Contato</h3>
          <p>Email: contato@ionkod.com</p>
          <p>Telefone: (00) 0000-0000</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Newsletter</h3>
          <form className="flex">
            <input 
              type="email" 
              placeholder="Seu email" 
              className="p-2 rounded-l text-black"
            />
            <button className="bg-blue-500 p-2 rounded-r">
              Assinar
            </button>
          </form>
        </div>
      </div>
      <div className="text-center mt-8">
        © {new Date().getFullYear()} Ionkod. Todos os direitos reservados.
      </div>
    </footer>
  )
}