"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "@/utils/animations";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Seção Hero com fade-in */}
      <motion.section className="hero" initial="hidden" animate="visible" variants={fadeIn}>
        <h1>Bem-vindo ao <span>IonKod!</span></h1>
        <p>Adquira conhecimento prático e transforme sua carreira.</p>
        <Link href="/payment" className="btn">Adquirir Curso</Link>
      </motion.section>

      {/* Rodapé com fade-in */}
      <motion.footer initial="hidden" animate="visible" variants={fadeIn}>
        <p>&copy; 2024 IonKod. Todos os direitos reservados.</p>
      </motion.footer>
    </div>
  );
};

export default HomePage;
