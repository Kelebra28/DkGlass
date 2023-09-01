import React from "react";
import LazyImage from "./LazyImages";

const WhatsAppLink = () => {
  const phoneNumber = "+1 (832) 580-0383";
  const message = "¡Hi!";

  const handleClick = () => {
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <a className="text-[15px] font-semibold" href="#" onClick={handleClick}>
      <LazyImage src="/icons/whastsapp.png" alt="Dk glass Icon whastsapp" />
      <p className="pl-8">WhatsApp</p>
    </a>
  );
};

export default WhatsAppLink;
