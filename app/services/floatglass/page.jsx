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
          <div className="w-[100%] lg:w-[50%]  mb-[60px] lg:mb-100px">
            <div className="hidden lg:block h-[29px] bg-dk-main" />
            <div className="px-[30px] lg:px-[80px] mt-[20px] flex flex-col">
              <span className="text-[25px] font-medium">Float Glass</span>
              <p className="mt-[20px] mb-[30px] text-[18px] font-medium">
                Float glass is a so-called flat glass, which is produced in a
                float glass process. To do this, the molten glass is applied to
                a bath of liquid tin. Since the glass is lighter than tin, it
                floats on the surface and spreads out completely evenly.
              </p>
              <p className="mt-[20px] mb-[30px] text-[18px] font-medium">
                The result is glass with an immaculately smooth surface that is
                free of air pockets (such as bubbles or streaks). Because of
                these advantages, the float glass process has largely become
                established in the manufacture of flat glass.
              </p>
              {/* <span className="text-[15px]">Model</span> */}
              <span className="mt-[20px] bg-dk-secondary w-[330px] text-[]15px pl-[18px] text-[white] italic font-semibold">
                Other properties of float glass:
              </span>
              <ul>
                <p className="mt-[10px] mb-[30px] text-[15px] font-medium">
                  - Robust against scratches
                </p>
                <p className="mt-[10px] mb-[30px] text-[15px] font-medium">
                  - Weight: approx.2.5 kilograms per square meter and millimeter
                  of glass thickness plane-parallel surfaces: Both sides of the
                  glass surface are completely flat and parallel to each other.
                </p>
                <p className="mt-[10px] mb-[30px] text-[15px] font-medium">
                  - Color: Float glass usually has a slightly greenish color,
                  which is particularly visible on the edges. For lighter glass,
                  special raw materials low in iron oxide are used (see also the
                  point "Float glass vs. white glass" below).
                </p>
                <p className="mt-[10px] mb-[30px] text-[15px] font-medium">
                  - High light transmission: conventional float glass (single
                  glass, glass thickness of 3-10 millimeters) has a light
                  transmission of approx. 85-90%, with white glass the value is
                  even higher.
                </p>
                <p className="mt-[10px] mb-[30px] text-[15px] font-medium">
                  - Resistance to temperature changes: It is around 40 Kelvin
                  (with simple glass without safety treatment), which means that
                  float glass can withstand rapid temperature changes in the
                  range of up to 40 Kelvin.
                </p>
              </ul>
            </div>
          </div>
          <div className="w-[100%] lg:w-[50%] flex justify-center border-t-dk-main border-t-[20px] pt-[14px] lg:pt-0 lg:border-none">
            <div className="w-[90%] lg:w-[100%] h-[630px] relative">
              <ZoomableImg
                src="/services/floatglass3.jpg"
                alt="Dk glass services floatglass3"
                zoom={200}
              />
            </div>
          </div>
        </div>
        <div className="flex lg:mt-[-80px] h-[250px] flex-col lg:flex-row relative">
          <div className="lg:w-[33%] lg:bg-dk-bg-gray flex justify-end p-[45px] box-border">
            <p className="text-[15px] lg:w-[70%] ">Any glass work you need.</p>
          </div>
          <div className="w-[100%] lg:w-[20%] relative border-[8px] border-[white] ">
            <ZoomableImg
              src="/services/floatglass2.jpg"
              alt="Dk glass services floatglass3"
              zoom={200}
            />
          </div>
          <div className="lg:w-[33%] flex items-end">
            <div className="ml-[40px] mb-[50px]">
              <Button text="Contact us" onClick={handleContactPopUp} />
            </div>
          </div>
        </div>
        {/* <div className="h-[76px] bg-dk-gray flex justify-center lg:justify-end pt-[15px] pr-[80px]">
          <span className="text-[15px]">Términos y condiciones</span>
        </div> */}
        <Footer />
      </div>
    </div>
  );
}
