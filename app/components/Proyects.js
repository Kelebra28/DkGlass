'use client'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image"
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
  <div className="mb-[100px]">
    <div className="ml-[60px]">
      <h3 className="text-[36px]">Proyectos</h3>
      <div className="border-b-4 border-dk-secondary w-[92px] mt-[15px]" />
    </div>
    <div>
      <Carousel responsive={responsive}>
        <CarouselCard2 />
        <CarouselCard2 />
        <CarouselCard2 />
        <CarouselCard2 />
      </Carousel>
    </div>
    <div className="flex justify-between pt-[90px]">
      <div className="w-[134px] h-[152px] relative">
        <Image
          src="/proyect2.png"
          alt="escalera"
          layout="fill"
        />
      </div>
      <div className="w-[243px] h-[186px] relative">
        <Image
          src="/proyect1.png"
          alt="escalera"
          layout="fill"
        />
      </div>
    </div>
  </div>
)

export default Proyects
