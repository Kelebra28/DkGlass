"use client";
import { useState } from "react";
import LazyImage from "../../components/common/LazyImages";
import Button from "../../components/common/Button";
import Header from "../../components/common/header";
import SocialMedia from "../../components/common/SocialMedia";
import Footer from "../../components/Footer";
import EmailPopUp from "../../components/EmailPopUp";
import RandomImages from "../../components/RandomBack";

export default function Home() {
  const [contactPopActive, setContactPopActive] = useState(false);
  const handleContactPopUp = () => {
    setContactPopActive(!contactPopActive);
  };
  return (
    <div>
      <RandomImages />
      <Header />
      {contactPopActive && (
        <EmailPopUp handleContactPopUp={handleContactPopUp} />
      )}
      <SocialMedia />
      <div className=" mt-[90px]">
        <div className="flex flex-col-reverse lg:flex-row">
          <div className="w-[100%] lg:w-[50%]  mb-[60px] lg:mb-0">
            <div className="hidden lg:block h-[29px] bg-dk-main" />
            <div className="px-[30px] lg:px-[80px] mt-[20px] flex flex-col">
              <span className="text-[25px] font-medium">Custom Glass</span>
              <p className="mt-[20px] mb-[30px] text-[18px] font-medium">
                Add A Modern Accent To Your Staircase, Deck, Or Balcony With Our
                Glass Railing systems
              </p>
              <ul>
                <li className="mt-[20px]">- Custom Designs.</li>
                <li>- Great Quality.</li>
                <li>- Beautifull Designs.</li>
                <li>- Professional Installers.</li>
              </ul>
            </div>
          </div>
          <div className="w-[100%] lg:w-[50%] flex justify-center border-t-dk-main border-t-[20px] pt-[14px] lg:pt-0 lg:border-none">
            <div className="w-[90%] lg:w-[100%] h-[630px] relative">
              <LazyImage src="/carousel1.jpg" alt="Dk glass carousel1" />
            </div>
          </div>
        </div>
        <div className="flex h-[250px] lg:mt-[-80px] flex-col lg:flex-row">
          <div className="lg:w-[33%] lg:bg-dk-bg-gray flex justify-end p-[45px] box-border relative">
            <p className="text-[15px] lg:w-[70%] ">Any glass work you need.</p>
          </div>
          <div className="w-[100%] lg:w-[20%] relative border-[8px] border-[white] ">
            <LazyImage src="/residencial/stairs.jpg" alt="Dk glass stairs" />
          </div>
          <div className="lg:w-[33%] flex items-end">
            <div className="ml-[40px] mb-[50px]">
              <Button text="Contact us" onClick={handleContactPopUp} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
