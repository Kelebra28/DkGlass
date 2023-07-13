'use client'
import Header from "../components/common/header"
import Image from "next/image"
import Footer from "../components/Footer"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import CarouselCard from "../components/common/CarouselCard"

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
  return (
    <div>
      <Header />
      <div className="relative mt-[120px]">
        {/* <div className="w-[52px] h-[100%] bg-dk-secondary absolute top-0 left-0 z-[-1] lg:w-[80px]" /> */}
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-[90%] lg:w-[40%] h-[325px] flex relative">
            <Image
              src="/about.png"
              alt="Portada"
              layout="fill"
            />
          </div>
          <div className="lg:w-[50%] flex flex-col pl-[20%] lg:pl-[40px] mb-[31px] lg:mb-[0] mt-[80px]">
            <div className="border-l-4 border-dk-secondary h-[62px] flex items-center mt-[60px] pl-[21px]">
              <span className="text-dk-main text-[36px] leading-[28px]">About Us</span>
            </div>
            <p className="w-[80%] lg:w-[800px] mt-[55px] text-[14px] text-[#6B6B6B]">Our company offers comprehensive design and installation solutions for custom work for commercial and residential clients. We design, create and install all kinds of products with safety and sustainability top of mind. We offer wholesale sales with competitive prices. As strategic expansion planning, our company has a presence in other territories such as Houston, Odessa and Kentucky. trust your next new construction or renovation project to Dk glass & Velasco and let us crystallize your dreams</p>

          </div>
        </div>
        <div className="mt-[40px] mb-[40px] pl-[30px] w-screen lg:mt-[100px] lg:pl-[300px]">
          <div className="border-l-4 border-dk-secondary h-[62px] items-center mt-[60px] pl-[21px] mb-[50px] hidden lg:flex">
            <span className="text-dk-main text-[28px]">Products</span>
          </div>
          <Carousel responsive={responsive}>
            <div className="mx-[10px]">
            <CarouselCard text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, quibusdam expedita! Nisi minus blanditiis, eos quos ratione veniam, maiores dignissimos reiciendis possimus animi eveniet tenetur. Minus voluptate error temporibus mollitia!" img="/residencial/residencial10.jpg" />
            </div>
            <div className="mx-[10px]">
            <CarouselCard text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, quibusdam expedita! Nisi minus blanditiis, eos quos ratione veniam, maiores dignissimos reiciendis possimus animi eveniet tenetur. Minus voluptate error temporibus mollitia!" img="/residencial/residencial11.jpg" />
            </div>
            <div className="mx-[10px]">
            <CarouselCard text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, quibusdam expedita! Nisi minus blanditiis, eos quos ratione veniam, maiores dignissimos reiciendis possimus animi eveniet tenetur. Minus voluptate error temporibus mollitia!" img="/residencial/residencial12.jpg" />
            </div>
            <div className="mx-[10px]">
            <CarouselCard text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, quibusdam expedita! Nisi minus blanditiis, eos quos ratione veniam, maiores dignissimos reiciendis possimus animi eveniet tenetur. Minus voluptate error temporibus mollitia!" img="/residencial/residencial13.jpg" />
            </div>
            <div className="mx-[10px]">
            <CarouselCard text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, quibusdam expedita! Nisi minus blanditiis, eos quos ratione veniam, maiores dignissimos reiciendis possimus animi eveniet tenetur. Minus voluptate error temporibus mollitia!" img="/residencial/residencial14.jpg" />
            </div>
            <div className="mx-[10px]">
            <CarouselCard text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, quibusdam expedita! Nisi minus blanditiis, eos quos ratione veniam, maiores dignissimos reiciendis possimus animi eveniet tenetur. Minus voluptate error temporibus mollitia!" img="/residencial/residencial15.jpg" />
            </div>
          </Carousel>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default AboutUs