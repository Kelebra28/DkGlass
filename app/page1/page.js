'use client'
import { useState } from "react"
import Image from "next/image"
import Button from "../components/common/Button"
import Header from "../components/common/header"
import SocialMedia from "../components/common/SocialMedia"
import Footer from "../components/Footer"
import EmailPopUp from "../components/EmailPopUp"

export default function Home() {
  const [contactPopActive, setContactPopActive] = useState(false)
  const handleContactPopUp = () => {
    setContactPopActive(!contactPopActive)
  }
  return (
    <div>
      <Header />
      {
        contactPopActive && <EmailPopUp handleContactPopUp={handleContactPopUp}/>
      }
      <SocialMedia />
      <div className=" mt-[90px]">
        <div className="flex flex-col-reverse lg:flex-row">
          <div className="w-[100%] lg:w-[50%]  mb-[60px] lg:mb-0">
            <div className="hidden lg:block h-[29px] bg-dk-main" />
            <div className="px-[30px] lg:px-[80px] mt-[20px] flex flex-col">
              <span className="text-[25px] font-medium">Mirrors</span>
              <p className="mt-[20px] mb-[30px] text-[18px] font-medium">"Optimize the use of space and natural light with our customizable interior glass fixtures"</p>
            </div>
          </div>
          <div className="w-[100%] lg:w-[50%] flex justify-center border-t-dk-main border-t-[20px] pt-[14px] lg:pt-0 lg:border-none">
            <div className="w-[90%] lg:w-[100%] h-[630px] relative">
              <Image
                src="/product.png"
                alt=""
                layout="fill"
              />
            </div>
          </div>
        </div>
        <div className="flex lg:mt-[-80px] flex-col lg:flex-row">
          <div className="lg:w-[33%] lg:bg-dk-bg-gray flex justify-end p-[45px] box-border">
            <p className="text-[15px] lg:w-[70%] ">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorp</p>
          </div>
          <div className="w-[100%] lg:w-[33%] relative border-[8px] border-[white] ">
            <Image
              src="/register.png"
              alt=""
              layout="fill"
            />
          </div>
          <div className="lg:w-[33%] flex items-end">
            <div className="ml-[40px] mb-[50px]">
              <Button text="Contact us" onClick={handleContactPopUp}/>
            </div>
          </div>
        </div>
        {/* <div className="h-[76px] bg-dk-gray flex justify-center lg:justify-end pt-[15px] pr-[80px]">
          <span className="text-[15px]">Términos y condiciones</span>
        </div> */}
        <Footer />
      </div>
    </div>
  )
}
