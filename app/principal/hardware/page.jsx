'use client'
import { useState } from "react"
import Image from "next/image"
import Button from "../../components/common/Button"
import Header from "../../components/common/header"
import SocialMedia from "../../components/common/SocialMedia"
import Footer from "../../components/Footer"
import EmailPopUp from "../../components/EmailPopUp"
import { Gallery } from "../../components/common/Galery"
import RandomImages from '../../components/RandomBack'


export default function Home() {
  const [contactPopActive, setContactPopActive] = useState(false)
  const handleContactPopUp = () => {
    setContactPopActive(!contactPopActive)
  }
  return (
    <div>
      <Header />
      {
        contactPopActive && <EmailPopUp handleContactPopUp={handleContactPopUp} />
      }
      <SocialMedia />
      <div className=" mt-[90px]">
        <div className="flex flex-col-reverse lg:flex-row">
          <div className="w-[100%] lg:w-[50%]  mb-[60px] lg:mb-0">
            <div className="hidden lg:block h-[29px] bg-dk-main" />
            <div className="px-[30px] lg:px-[80px] mt-[20px] flex flex-col">
              <span className="text-[25px] font-medium">Hardware & Supplies</span>
              <p className="mt-[20px] mb-[30px] text-[18px] font-medium">DK Glass & Velasco offers a wide range of specialty and decorative
                hardware products for glass including door hinges for showers, and tools
                and parts for doors and windows. These high-tech products are
                manufactured from quality materials in accordance with industry, domestic
                and commercial standards.</p>
            </div>
          </div>
          <div className="w-[100%] lg:w-[80%] flex justify-center border-t-dk-main border-t-[20px] pt-[14px] lg:pt-0 lg:border-none">
            <div className="w-[90%] lg:w-[100%] h-[630px] relative">
              {/* <Image
                src="/carousel5.jpeg"
                alt=""
               
              /> */}
              <Gallery />
            </div>
          </div>
        </div>
        <div className="lg:w-[33%] flex items-end">
        <div className="ml-[40px] mb-[50px]">
              <Button text="Contact us" onClick={handleContactPopUp} />
            </div>
        </div>
        <div className="flex h-[250px] lg:mt-[-80px] flex-col lg:flex-row relative">
          {/* <div className="lg:w-[33%] lg:bg-dk-bg-gray flex justify-end p-[45px] box-border">
            <p className="text-[15px] lg:w-[70%] ">Any glass work you need.</p>
          </div> */}
          {/* <div className="w-[100%] lg:w-[33%] relative border-[8px] border-[white] ">
            <Image
              src="/hardware/hardware12.jpg"
              alt=""
             
            />
          </div> */}
          {/* <div className="lg:w-[100%] flex items-center relative bg-[#ffffff]">
           
          </div> */}
        </div>
        {/* <div className="h-[76px] bg-dk-gray flex justify-center lg:justify-end pt-[15px] pr-[80px]">
          <span className="text-[15px]">Términos y condiciones</span>
        </div> */}
        <Footer />
      </div>
    </div>
  )
}
