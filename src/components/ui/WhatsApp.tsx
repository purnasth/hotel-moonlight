import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TbBrandWhatsapp } from 'react-icons/tb';

const WhatsApp: React.FC = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Link
      to="https://wa.me/+977-9851221636"
      target="_blank"
      rel="noreferrer"
      className={`${
        showButton ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      } transition-300 fixed bottom-4 right-1/2 z-40 inline-flex h-9 translate-x-1/2 items-center justify-center gap-1 rounded-full border border-dark/30 bg-white px-4 py-2 text-dark hover:border-dark hover:bg-dark hover:text-light`}
      title="WhatsApp"
      aria-label="WhatsApp"
    >
      <span className="text-sm uppercase">Need Help?</span>
      <TbBrandWhatsapp className="text-2xl" />
    </Link>
  );
};

export default WhatsApp;
