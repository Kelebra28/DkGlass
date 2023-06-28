'use client'
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
      <p className="w-[180px] ml-[100px] text-[11px] mt-[41px] hidden lg:flex ">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet </p>
      <div className="lg:hidden">
        <h3 className="text-[36px]">Proyectos</h3>
        <div className="border-b-4 border-dk-secondary w-[92px] mt-[15px]" />
      </div>
    </div>
    <div className="lg:hidden">
      <Carousel responsive={responsive}>
        <CarouselCard2 />
        <CarouselCard2 />
        <CarouselCard2 />
        <CarouselCard2 />
        <CarouselCard2 />
        <CarouselCard2 />
        <CarouselCard2 />
        <CarouselCard2 />
        <CarouselCard2 />
      </Carousel>
    </div>
    <div className="lg:w-[70%] hidden lg:block">
      <Carousel responsive={responsive}>
        <CarouselCard />
        <CarouselCard />
        <CarouselCard />
        <CarouselCard />
        <CarouselCard />
        <CarouselCard />
        <CarouselCard />
        <CarouselCard />
        <CarouselCard />
      </Carousel>
    </div>
  </div>
)

export default Proyects
