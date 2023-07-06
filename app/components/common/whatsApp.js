import React from 'react';
import Image from 'next/image';

const WhatsAppLink = () => {
  const phoneNumber = '832 580 0383'; 
  const message = '¡Hi!';

  const handleClick = () => {
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <a className="text-[15px] font-semibold" href="#" onClick={handleClick}>
        <Image
        src="/whatsapp.png"
        alt="Portada"
        layout="fill"
        /> 
        <p className="pl-8">WhatsApp</p>          
    </a>
  );
}

export default WhatsAppLink;