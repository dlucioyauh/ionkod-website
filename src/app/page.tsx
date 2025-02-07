"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/animations";

const HomePage = () => {
  return (
    <motion.div 
      className="homepage"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <h1>Bem-vindo ao <span>IonKod!</span></h1>
      <p>Adquira conhecimento prático e transforme sua carreira.</p>
    </motion.div>
  );
};

export default HomePage;
