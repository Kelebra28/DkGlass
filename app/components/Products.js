'use client'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselCard from "./common/CarouselCard";
import CarouselSimpleCard from "./common/CarouselSimpleCard";
import Image from "next/image";

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

const Products = () => (
  <div className="" id="industrial">
    <div className=" h-[224px] mx-[12px] mt-[40px] relative lg:hidden">
      <Image
        src="/hero.png"
        alt="Portada"
        layout="fill"
      />
    </div>
    <div className="lg:flex lg:flex-col lg:ml-[100px] overflow-hidden">
      <div className="border-l-4 border-dk-main h-[52px] flex items-center mt-[40px] ml-[57px] pl-[21px] lg:ml-[17px]">
        <span className="text-dk-main text-[36px]">Industrial</span>
      </div>
      <p className="mt-[41px] ml-[89px] lg:hidden">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet </p>

      <div className="mt-[40px] mb-[40px] pl-[30px] w-screen lg:hidden">
        <Carousel responsive={responsive}>
          <div className="mx-[10px]">
            <CarouselCard />
          </div>
          <div className="mx-[10px]">
            <CarouselCard />
          </div>
          <div className="mx-[10px]">
            <CarouselCard />
          </div>
          <div className="mx-[10px]">
            <CarouselCard />
          </div>
          <div className="mx-[10px]">
            <CarouselCard />
          </div>
        </Carousel>
      </div>
      <div className="mt-[40px] mb-[40px] w-screen lg:block hidden">
        <Carousel responsive={responsive}>
          <CarouselSimpleCard/>
          <CarouselSimpleCard/>
          <CarouselSimpleCard/>
          <CarouselSimpleCard/>
          <CarouselSimpleCard/>
          <CarouselSimpleCard/>
        </Carousel>
      </div>
    </div>
  </div>
)

export default Products