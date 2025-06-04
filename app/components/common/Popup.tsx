'use client';
import { useState, useEffect } from "react";
const Popup = () => {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
      const timeout = setTimeout(() => {
        setShowPopup(true);
      }, 2000);
  
      return () => clearTimeout(timeout);
    }, []);
  
    return (
      <div>
        {showPopup && (
          <a 
          target="_blank"
          className="popup show animate-bounce"
          href="https://www.google.com/maps/place/12245+FM+529+h,+Houston,+TX+77041,+USA/@29.8719473,-95.5975915,17z/data=!3m1!4b1!4m5!3m4!1s0x8640d065c67ca5dd:0x431ac0ad4f4c59dc!8m2!3d29.8719427!4d-95.5950166?entry=ttu">
           <p>Met our new location</p>
          <p>with bulk disccounts and special offers at</p>
            <p>12245 Farm to Market 529 Rd Suite H Houston Tx 77041</p>
          </a>
        )}
      </div>
    );
  };
export default Popup;