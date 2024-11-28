// src/components/Button.tsx
import Link from 'next/link';

interface ButtonProps {
  text: string;
  link: string;
}

const Button = ({ text, link }: ButtonProps) => {
  return (
    <Link href={link}>
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg">
        {text}
      </button>
    </Link>
  );
};

export default Button;
