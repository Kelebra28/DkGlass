"use client";
import { useState } from "react";
import LazyImage from "../../components/common/LazyImages";
import Button from "../../components/common/Button";
import Header from "../../components/common/header";
import SocialMedia from "../../components/common/SocialMedia";
import Footer from "../../components/Footer";
import RandomImages from "../../components/RandomBack";
import EmailPopUp from "../../components/EmailPopUp";

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
              <span className="text-[25px] font-medium">Tempered Glass</span>
              <p className="mt-[20px] mb-[30px] text-[18px] font-medium">
                Tempered glass is one of the most common glass types used in
                architecture due to its thermal properties, safety, and
                durability.
              </p>
              <p className="mt-[20px] mb-[30px] text-[18px] font-medium">
                Tempered glass is the process of heating annealed glass, using a
                special furnace, to an even and uniform temperature of about
                700c
              </p>
              <p className="mt-[20px] mb-[30px] text-[18px] font-medium">
                Once the glass is heated up, it is removed from the furnace and
                rapidly cooled down. This puts the glass in a state of
                compression while the core of the glass stays withintension.
              </p>
              <div className="w-[100%] h-[400px] relative mb-[100px]">
                <LazyImage
                  src="/services/tempered6.jpg"
                  alt="Dk glass services"
                />
              </div>

            </div>
          </div>
          <div className="w-[100%] lg:w-[50%] flex justify-center border-t-dk-main border-t-[20px] pt-[14px] lg:pt-0 lg:border-none">
            <div className="w-[90%] lg:w-[100%] h-[630px] relative">
              <LazyImage
                src="/services/template7.jpeg"
                alt="Dk glass services"
              />
            </div>
          </div>
        </div>
        <div className="flex lg:mt-[-80px] flex-col lg:flex-row relative">
          <div className="lg:w-[33%] lg:bg-dk-bg-gray flex justify-end p-[45px] box-border">
            <p className="text-[15px] lg:w-[70%] ">Any glass work you need.</p>
          </div>
          <div className="w-[100%] lg:w-[23%] h-[200px] relative border-[8px] border-[white] ">
            <LazyImage src="/services/tempered5.jpg" alt="Dk glass services" />
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
