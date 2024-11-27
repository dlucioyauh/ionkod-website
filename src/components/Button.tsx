// src/components/Button.tsx
import React from 'react';

type ButtonProps = {
  text: string;
  link: string;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ text, link, className }) => {
  return (
    <a
      href={link}
      className={`bg-yellow-400 text-black px-4 py-2 rounded hover:scale-105 transition-transform ${className}`}
    >
      {text}
    </a>
  );
};

export default Button;
