
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { useTranslation } from 'react-i18next';

interface TypedTextProps {
  strings: string[];
  typeSpeed?: number;
  backSpeed?: number;
  loop?: boolean;
  className?: string;
}

const TypedText = ({ 
  strings, 
  typeSpeed = 50, 
  backSpeed = 30, 
  loop = true,
  className = ""
}: TypedTextProps) => {
  const el = useRef(null);
  const { i18n } = useTranslation();

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings,
      typeSpeed,
      backSpeed,
      loop,
      showCursor: true,
      cursorChar: '|',
    });

    return () => {
      typed.destroy();
    };
  }, [strings, typeSpeed, backSpeed, loop, i18n.language]);

  return <span ref={el} className={`typing-cursor ${className}`} />;
};

export default TypedText;
