'use client'
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image"
import CarouselCard from "./common/CarouselCard";
import CarouselCard2 from "./common/CarouselCard2";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Proyects = () => (
  <div id="residencial" className="mb-[100px] lg:mb-[20px] lg:flex lg:justify-between">
    <div className="ml-[60px]">
      <div className="border-l-4 border-dk-secondary h-[52px] items-center mt-[40px] ml-[57px] pl-[21px] hidden lg:flex">
        <span className="text-dk-main text-[36px]">Residencial</span>
      </div>
      <p className="w-[180px] ml-[100px] text-[11px] mt-[41px] hidden lg:flex ">Shower Glass Doors & Supplies & sliding glass shower doors 
         </p>
      <div className="lg:hidden">
        <h3 className="text-[36px]">Commercial</h3>
        <div className="border-b-4 border-dk-secondary w-[92px] mt-[15px]" />
      </div>
    </div>
    <div className="lg:hidden">
      <Carousel 
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={2000} 
        infinite={true}
        rtl={true}
        >
        <CarouselCard2 title="Store Front & Entrances" img="/comercial/comercial1.jpeg" text=""/>
          <CarouselCard2 title="Exterior & Interior Glass" img="/comercial/comercial2.jpg" text=""/>
          <CarouselCard2 title="Interior Office Partitions" img="/comercial/comercail3.jpg" text=""/>
          <CarouselCard2 title="Door Repair & Replacement" img="/comercial/comercial3.jpg" text=""/>
          <CarouselCard2 title="Commercial Mirrors" img="/comercial/comercial4.jpg" text=""/>
      </Carousel>
    </div>
    <div className="lg:w-[70%] hidden lg:block">
      <Carousel 
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={2000} 
        infinite={true}
        rtl={true}
      >
        <CarouselCard text="Sliding Glass Shower Doors" img="/residencial/residencial8.jpeg"/>
        <CarouselCard text="Semi-Frameled Glass Shower Doors" img="/residencial/residelcia7.jpeg" />
        <CarouselCard text="Custom Glass  Shower Doors" img="/residencial/recidencial9.jpeg" />
        <CarouselCard text="Frameless glass shower doors" img="/residencial/residencial10.jpg" />
        <CarouselCard text="Splash panels" img="/residencial/residencial11.jpg" />
        <CarouselCard text="Shower Doors Hinges" img="/residencial/residencial12.jpg" />
        <CarouselCard text="Windows Glass Repair & Replacement" img="/residencial/residelcia5.jpeg" />
        <CarouselCard text="Custom Windows" img="/residencial/window1.jpg" />
        <CarouselCard text="Frame & Frameless Mirrors" img="/comercial/conercial5.jpg" />
      </Carousel>
    </div>
  </div>
)

export default Proyects
