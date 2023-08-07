'use client'
import { useState } from "react"
import Header from "../components/common/header"
import Image from "next/image"
import Footer from "../components/Footer"
import EmailPopUp from "../components/EmailPopUp"
import RandomImages from '../components/RandomBack'
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import CarouselSimpleCard from "../components/common/CarouselSimpleCard"

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1.5
  }
};


const AboutUs = () => {
  const [contactPopActive, setContactPopActive] = useState(false)
  const handleContactPopUp = () => {
    setContactPopActive(!contactPopActive)
  }
  return (
    <>
     {
      contactPopActive  && <EmailPopUp handleContactPopUp={handleContactPopUp}/>
    }
    <RandomImages zIndex={-1} />
    <div className="logoRepeat">
      <Header handleContactPopUp={handleContactPopUp} />
      <div className="relative mt-[120px]">
        <div className="w-[52px] h-[100%] bg-dk-secondary absolute top-0 left-0 z-[-1] lg:w-[80px]"> </div>
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-[90%] lg:w-[40%] h-[450px] flex relative img_team">
            <Image
              src="/team.jpg"
              alt="Portada"
              layout="fill"
              className="img_team"
            />
          </div>
          <div className="lg:w-[50%] flex flex-col pl-[20%] lg:pl-[40px] mb-[31px] lg:mb-[0] mt-[80px] logoAbout">
            <div className="border-l-4 border-dk-secondary h-[62px] flex items-center mt-[60px] pl-[21px]">
              <span className="text-dk-main text-[36px] leading-[28px]">About Us</span>
            </div>
            <p className="w-[80%] lg:w-[800px] mt-[20px] text-[18px] font-black text-[#000000]">Our company offers comprehensive design and installation solutions for custom work for commercial and residential clients. We design, create and install all kinds of products with safety and sustainability top of mind. We offer wholesale sales with competitive prices. As strategic expansion planning, our company has a presence in other territories such as Houston, Odessa and Kentucky. trust your next new construction or renovation project to Dk glass & Velasco and let us crystallize your dreams</p>

          </div>
        </div>
        <div className="flex justify-end mt-[100px]">
          <div className="mt-[40px] mb-[40px] w-[80%] lg:block hidden">
          <Carousel 
            responsive={responsive}
            autoPlay={true}
            autoPlaySpeed={2000} 
            infinite={true}
          >
            <CarouselSimpleCard img="/comercial/comercial1.jpeg"  />
            <CarouselSimpleCard img="/comercial/comercial2.jpg"  />
            <CarouselSimpleCard img="/comercial/comercail3.jpg"  />
            <CarouselSimpleCard img="/comercial/comercial3.jpg"  />
          </Carousel>
          </div>
        </div>
        <Footer />
      </div>
    </div>
    </>
  )
}

export default AboutUs