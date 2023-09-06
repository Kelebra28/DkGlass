"use client";
import { useState } from "react";
import ZoomableImg from "../../components/common/ZoomImg";
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
                Custom cut glass manufactured to fit your needs and delivered to
                your doorstep. Choose between different shapes, thicknesses and
                glass types.
              </p>
            </div>
          </div>
          <div className="w-[100%] lg:w-[50%] flex justify-center border-t-dk-main border-t-[20px] pt-[14px] lg:pt-0 lg:border-none">
            <div className="w-[90%] lg:w-[100%] h-[630px] relative">
              <ZoomableImg src="/carousel4.jpg" alt="Dk glass carousel4" className='w-[90%] lg:w-[100%] h-[630px]' />
            </div>
          </div>
        </div>
        <div className="flex h-[250px] lg:mt-[-80px] flex-col lg:flex-row relative">
          <div className="lg:w-[33%] lg:bg-dk-bg-gray flex justify-end p-[45px] box-border">
            <p className="text-[15px] lg:w-[70%] ">Any glass work you need.</p>
          </div>
          <div className="w-[100%] lg:w-[23%] relative border-[8px] border-[white] ">
            <ZoomableImg src="/custom/custom1.jpeg" alt="Dk glass custom1" />
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
