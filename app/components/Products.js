'use client'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselCard from "./common/CarouselCard";
import Image from "next/image";

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
    items: 1.5
  }
};

const Products = () => (
  <div className="">
    <div className=" h-[224px] mx-[12px] mt-[40px] relative">
      <Image
        src="/hero.png"
        alt="Portada"
        layout="fill"
      />
    </div>
    <div className="border-l-4 border-dk-main h-[52px] flex items-center mt-[40px] ml-[57px] pl-[21px]">
      <span className="text-dk-main text-[36px]">Productos</span>
    </div>
    <p className="mt-[41px] ml-[89px]">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet </p>

    <div className="mt-[40px] mb-[40px] pl-[30px]">
      <Carousel responsive={responsive}>
        <CarouselCard />
        <CarouselCard />
        <CarouselCard />
        <CarouselCard />
      </Carousel>
    </div>
  </div>
)

export default Products