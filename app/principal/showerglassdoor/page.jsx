'use client'
import { useState } from "react"
import LazyImage from "../../components/common/LazyImages";
import Button from "../../components/common/Button"
import Header from "../../components/common/header"
import SocialMedia from "../../components/common/SocialMedia"
import Footer from "../../components/Footer"
import EmailPopUp from "../../components/EmailPopUp"
import RandomImages from '../../components/RandomBack'


export default function Home() {
  const [contactPopActive, setContactPopActive] = useState(false)
  const handleContactPopUp = () => {
    setContactPopActive(!contactPopActive)
  }
  return (
    <div>
      <RandomImages />
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
              <span className="text-[25px] font-medium">Shower Glass Doors & Supplies</span>
              <p className="mt-[20px] mb-[30px] text-[18px] font-medium">Shower doors are panels of glass designed to keep water from splashing and spraying all over the bathroom. Along with preventing slips and falls on wet floors, they add a certain elegance and finish to your bathroom that a shower curtain usually can’t equal.</p>
              <p className="mt-[20px] mb-[30px] text-[18px] font-medium">The Finest & Elegant Shower Doors Available: Designed, manufactured, shipped and installed by The Best Technicians in Texas.</p>
              {/* <span className="text-[15px]">Model</span> */}
              {/* <span className="mt-[20px] bg-dk-secondary w-[330px] text-[]15px pl-[18px] text-[white] italic font-semibold">Specifications</span> */}
              <ul className="mb-[20px]">
                <li className="mt-[20px]">- Custom shower enclosures</li>
                <li>- Shower door design</li>
                <li>- Frameless shower doors</li>
                <li>- Tub and shower door replacement</li>
              </ul>
            </div>
          </div>
          <div className="w-[100%] lg:w-[50%] flex justify-center border-t-dk-main border-t-[20px] pt-[14px] lg:pt-0 lg:border-none">
            <div className="w-[90%] lg:w-[100%] h-[630px] relative">
              <LazyImage
                src="/carousel6.jpg"
                alt="Dk glass carousel6"
              />
            </div>
          </div>
        </div>
        <div className="flex h-[250px] lg:mt-[-80px] flex-col lg:flex-row">
          <div className="lg:w-[33%] lg:bg-dk-bg-gray flex justify-end p-[45px] box-border relative">
            <p className="text-[15px] lg:w-[70%] ">Any glass work you need.</p>
          </div>
          <div className="w-[100%] lg:w-[33%] relative border-[8px] border-[white] ">
            <LazyImage
              src="/bathrooms/bathrooms2.jpg"
              alt="Dk glass bathrooms2"
            />
          </div>
          <div className="lg:w-[33%] flex items-end">
            <div className="ml-[40px] mb-[50px]">
              <Button text="Contact us" onClick={handleContactPopUp}/>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
