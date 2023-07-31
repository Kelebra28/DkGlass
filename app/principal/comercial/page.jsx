'use client'
import { useState } from "react"
import Image from "next/image"
import Button from "../../components/common/Button"
import Header from "../../components/common/header"
import SocialMedia from "../../components/common/SocialMedia"
import Footer from "../../components/Footer"
import EmailPopUp from "../../components/EmailPopUp"

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
              <span className="text-[25px] font-medium">Commercial Service</span>
              <p className="mt-[20px] mb-[30px] text-[18px] font-medium">DK GLASS & VELASCO is your best option to call for all of your commercial glass and storefront needs.</p>
              <p className="mt-[20px] mb-[30px] text-[18px] font-medium">We specialize in New Commercial Storefronts and Windows, and Custom Commercial Glass for Retail, Hospitality, Gym’s, Restaurants, Medical and Educational customers.</p>
              <p className="mt-[20px] mb-[30px] text-[18px] font-medium">We love to build long-term relationships based on customer satisfaction and the highest service standards. With years of expertise and tools to perform the job as customer request.</p>
              <p className="mt-[20px] mb-[30px] text-[18px] font-medium">Our well-trained and highly skilled technicians are always ready and willing to work on every single project.</p>
              <span className="text-[15px]">Store Front & Entrances</span>
              <span className="mt-[20px] bg-dk-secondary w-[330px] text-[]15px pl-[18px] text-[white] italic font-semibold">Specifications</span>
            </div>
          </div>
          <div className="w-[100%] lg:w-[50%] flex justify-center border-t-dk-main border-t-[20px] pt-[14px] lg:pt-0 lg:border-none">
            <div className="w-[90%] lg:w-[100%] h-[630px] relative">
              <Image
                src="/residencial/residelcia3.jpg"
                alt=""
                layout="fill"
              />
            </div>
          </div>
        </div>
        <div className="flex h-[250px] lg:mt-[-80px] flex-col lg:flex-row">
          <div className="lg:w-[33%] lg:bg-dk-bg-gray flex justify-end p-[45px] box-border">
            <p className="text-[15px] lg:w-[70%] ">Any glass work you need.</p>
          </div>
          <div className="w-[100%] lg:w-[33%] relative border-[8px] border-[white] ">
            <Image
              src="/residencial/residelcia5.jpeg"
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
