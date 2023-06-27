import Image from "next/image"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import CarouselCard from "../components/common/CarouselCard"

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3
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

const Testimonials = () => (
  <div className="pb-[40px] flex flex-col lg:flex-row-reverse relative">
    <div className="h-[395px] hidden lg:block relative lg:w-4/12 w-12/12">
      <Image
        src="/testimonials.png"
        alt="Portada"
        layout="fill"
      />
    </div>
    <div className="w-12/12 lg:w-8/12 mb-[100px]">
      <div className="border-l-4 border-dk-main mt-[41px] h-[52px] ml-[54px] flex items-center pl-[21px]">
        <span className="text-[21px]">Testimonios de clientes satisfechos</span>
      </div>
      <div>
        <Carousel responsive={responsive} className="mt-[50px]">
          <div className="w-[220px] relative mx-[40px]">
            <div className="">
              <span className="text-[15px] font-semibold">Title</span>
              <p className="mt-[20px] text-[14px] text-[#6B6B6B]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptates repudiandae esse veritatis eligendi, a earum assumenda sunt dolorem nihil animi, quae reprehenderit harum. Iure cupiditate ratione necessitatibus culpa labore.
              </p>
            </div>
          </div>
         
          <div className="w-[220px] relative mx-[40px]">
            <div className="">
              <span className="text-[15px] font-semibold">Title</span>
              <p className="mt-[20px] text-[14px] text-[#6B6B6B]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptates repudiandae esse veritatis eligendi, a earum assumenda sunt dolorem nihil animi, quae reprehenderit harum. Iure cupiditate ratione necessitatibus culpa labore.
              </p>
            </div>
          </div>
          <div className="w-[220px] relative mx-[40px]">
            <div className="">
              <span className="text-[15px] font-semibold">Title</span>
              <p className="mt-[20px] text-[14px] text-[#6B6B6B]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptates repudiandae esse veritatis eligendi, a earum assumenda sunt dolorem nihil animi, quae reprehenderit harum. Iure cupiditate ratione necessitatibus culpa labore.
              </p>
            </div>
          </div>
          <div className="w-[220px] relative mx-[40px]">
            <div className="">
              <span className="text-[15px] font-semibold">Title</span>
              <p className="mt-[20px] text-[14px] text-[#6B6B6B]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptates repudiandae esse veritatis eligendi, a earum assumenda sunt dolorem nihil animi, quae reprehenderit harum. Iure cupiditate ratione necessitatibus culpa labore.
              </p>
            </div>
          </div><div className="w-[220px] relative mx-[40px]">
            <div className="">
              <span className="text-[15px] font-semibold">Title</span>
              <p className="mt-[20px] text-[14px] text-[#6B6B6B]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptates repudiandae esse veritatis eligendi, a earum assumenda sunt dolorem nihil animi, quae reprehenderit harum. Iure cupiditate ratione necessitatibus culpa labore.
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  </div>
)

export default Testimonials