"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselCard from "./common/CarouselCard";
import CarouselSimpleCard from "./common/CarouselSimpleCard";
import LazyImage from "./common/LazyImages";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1.5,
  },
};

const Products = () => (
  <div className="" id="industrial">
    <div className=" h-[224px] mx-[12px] mt-[40px] relative lg:hidden">
      <LazyImage src="/hero.png" alt="Dk glass Hero" />
    </div>
    <div className="lg:flex lg:flex-col lg:ml-[100px] overflow-hidden">
      <div className="border-l-4 border-dk-main h-[52px] flex items-center mt-[40px] ml-[57px] pl-[21px] lg:ml-[17px]">
        <span className="text-dk-main text-[36px]">Commercial</span>
      </div>
      <ul>
        <li className="w-[180px] ml-[55px] text-[15px] mt-[41px] hidden lg:flex ">
          Storefront
        </li>
        <li className="w-[180px] ml-[55px] text-[15px] mt-[10px] hidden lg:flex ">
          Impact Storefront
        </li>
        <li className="w-[180px] ml-[55px] text-[15px] mt-[10px] hidden lg:flex ">
          Office Partition
        </li>
      </ul>

      <div className="mt-[40px] mb-[40px] pl-[30px] w-screen lg:hidden">
        <Carousel
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={4000}
          infinite={true}
          showDots={true}
          autoPlayDirection="ltr"
        >
          <div className="mx-[10px]">
            <CarouselCard
              text="Sliding Glass Shower Doors"
              img="/residencial/residencial8.jpeg"
            />
          </div>
          <div className="mx-[10px]">
            <CarouselCard
              text="Semi-Frameled Glass Shower Doors"
              img="/residencial/residelcia7.jpeg"
            />
          </div>
          <div className="mx-[10px]">
            <CarouselCard
              text="Custom Glass  Shower Doors"
              img="/residencial/recidencial9.jpeg"
            />
          </div>
          <div className="mx-[10px]">
            <CarouselCard
              text="Frameless glass shower doors"
              img="/residencial/residencial10.jpg"
            />
          </div>
          <div className="mx-[10px]">
            <CarouselCard
              text="Splash panels"
              img="/residencial/residencial11.jpg"
            />
          </div>
          <div className="mx-[10px]">
            <CarouselCard
              text="Shower Doors Hinges"
              img="/residencial/residencial12.jpg"
            />
          </div>
          <div className="mx-[10px]">
            <CarouselCard
              text="Windows Glass Repair & Replacement"
              img="/residencial/residelcia5.jpeg"
            />
          </div>
          <div className="mx-[10px]">
            <CarouselCard
              text="Custom Windows"
              img="/residencial/window1.jpg"
            />
          </div>
          <div className="mx-[10px]">
            <CarouselCard
              text="Frame & Frameless Mirrors"
              img="/comercial/conercial5.jpg"
            />
          </div>
        </Carousel>
      </div>
      <div className="mt-[40px] mb-[40px] w-screen lg:block hidden">
        <Carousel
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={2000}
          infinite={true}
        >
          <CarouselSimpleCard
            title="Store Front & Entrances"
            img="/comercial/comercial1.jpeg"
            text=""
          />
          <CarouselSimpleCard
            title="Exterior & Interior Glass"
            img="/comercial/comercial2.jpg"
            text=""
          />
          <CarouselSimpleCard
            title="Interior Office Partitions"
            img="/comercial/comercail3.jpg"
            text=""
          />
          <CarouselSimpleCard
            title="Door Repair & Replacement"
            img="/comercial/comercial3.jpg"
            text=""
          />
          <CarouselSimpleCard
            title="Commercial Mirrors"
            img="/comercial/comercial4.jpg"
            text=""
          />
        </Carousel>
      </div>
    </div>
  </div>
);

export default Products;
