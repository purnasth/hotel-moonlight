import React, { useEffect } from 'react';

declare global {
  interface Window {
    Tawk_API?: any;
  }
}

const TawkToChat: React.FC = () => {
  useEffect(() => {
    // Avoid loading the script multiple times
    if (window.Tawk_API) return;

    const tawk = document.createElement('script');
    tawk.src = 'https://embed.tawk.to/676a7e88af5bfec1dbe0fdd5/1ifrvshpq';
    tawk.async = true;
    tawk.charset = 'UTF-8';
    tawk.setAttribute('crossorigin', '*');
    document.body.appendChild(tawk);

    return () => {
      // Cleanup the script on component unmount
      document.body.removeChild(tawk);
    };
  }, []);

  return null; // No UI needed for the chat widget
};

export default TawkToChat;
