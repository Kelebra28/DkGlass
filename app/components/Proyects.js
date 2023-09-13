"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselCard from "./common/CarouselCard";
import CarouselCard2 from "./common/CarouselCard2";
import Link from "next/link";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Proyects = () => (
  <div
    id="residencial"
    className="mb-[100px] lg:mb-[20px] lg:flex lg:justify-between"
  >
    <div className="ml-[60px] relative">
      <div className="border-l-4 border-dk-secondary h-[52px] items-center mt-[40px] ml-[57px] pl-[21px] hidden lg:flex">
        <span className="text-dk-main text-[36px]">Residencial</span>
      </div>
      <ul>
        <li className="w-[180px] ml-[100px] text-[15px] mt-[41px] hidden lg:flex hover-item">
          <Link href="/gallery/patio-door">Patio Door</Link>
        </li>
        <li className="w-[180px] ml-[100px] text-[15px] mt-[10px] hidden lg:flex hover-item ">
          <Link href="/gallery/patio-enclosure"> Patio Enclosure</Link>
        </li>
        <li className="w-[180px] ml-[100px] text-[15px] mt-[10px] hidden lg:flex hover-item">
          <Link href="/gallery/sliding-glass"> Sliding Glass Door</Link>
        </li>
        <li className="w-[180px] ml-[100px] text-[15px] mt-[10px] hidden lg:flex hover-item">
          <Link href="/gallery/shower-glass">Shower Glass Door</Link>
        </li>
        <li className="w-[180px] ml-[100px] text-[15px] mt-[10px] hidden lg:flex hover-item">
          <Link href="/gallery/mirrors"> Mirrors</Link>
        </li>
        <li className="w-[180px] ml-[100px] text-[15px] mt-[10px] hidden lg:flex hover-item">
          <Link href="/gallery/railing-stair">Railing stair system</Link>
        </li>
      </ul>

      <div className="lg:hidden">
        <h3 className="text-[36px]">Commercial</h3>
        <div className="border-b-4 border-dk-secondary w-[92px] mt-[15px] relative" />
        <ul>
          <li className="w-[180px] ml-[100px] text-[15px] mt-[41px] hidden lg:flex hover-item">
          <Link href="/gallery/store-front"> Storefront</Link>
          </li>
          <li className="w-[180px] ml-[100px] text-[15px] mt-[10px] hidden lg:flex hover-item">
          <Link href="/gallery/impact-store-front"> Impact Storefront</Link>
          </li>
          <li className="w-[180px] ml-[100px] text-[15px] mt-[10px] hidden lg:flex hover-item">
          <Link href="/gallery/office-partition"> Office Partition</Link>
          </li>
        </ul>
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
        <CarouselCard2
          title="Store Front & Entrances"
          img="/comercial/comercial1.jpeg"
          text="Dk Glass Store Front"
        />
        <CarouselCard2
          title="Exterior & Interior Glass"
          img="/comercial/comercial2.jpg"
          text="Dk Glass Exterior & Interior"
        />
        <CarouselCard2
          title="Interior Office Partitions"
          img="/comercial/comercail3.jpg"
          text="Dk Glass Interior Office"
        />
        <CarouselCard2
          title="Door Repair & Replacement"
          img="/comercial/comercial3.jpg"
          text="Dk Glass Door Repair & Replacement"
        />
        <CarouselCard2
          title="Commercial Mirrors"
          img="/comercial/comercial4.jpg"
          text="Dk Glass Commercial Mirrors"
        />
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
        <CarouselCard
          text="Sliding Glass Shower Doors"
          img="/residencial/residencial8.jpeg"
        />
        <CarouselCard
          text="Semi-Frameled Glass"
          img="/residencial/residelcia7.jpeg"
        />
        <CarouselCard
          text="Custom Glass  Shower Doors"
          img="/residencial/recidencial9.jpeg"
        />
        <CarouselCard
          text="Frameless glass shower doors"
          img="/residencial/residencial10.jpg"
        />
        <CarouselCard
          text="Splash panels"
          img="/residencial/residencial11.jpg"
        />
        <CarouselCard
          text="Shower Doors Hinges"
          img="/residencial/residencial12.jpg"
        />
        <CarouselCard
          text="Windows Glass Repair & Replacement"
          img="/residencial/residelcia5.jpeg"
        />
        <CarouselCard text="Custom Windows" img="/residencial/window1.jpg" />
        <CarouselCard
          text="Frame & Frameless Mirrors"
          img="/comercial/conercial5.jpg"
        />
      </Carousel>
    </div>
  </div>
);

export default Proyects;
