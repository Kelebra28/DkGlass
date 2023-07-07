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
       src="/residencial/residelcia4.jpg"
        alt="Portada"
        layout="fill"
      />
    </div>
    <div className="w-12/12 lg:w-8/12 mb-[100px]">
      <div className="border-l-4 border-dk-main mt-[41px] h-[52px] ml-[54px] flex items-center pl-[21px]">
        <span className="text-[21px]">Testimonials from satisfied customers</span>
      </div>
      <div>
        <Carousel responsive={responsive} className="mt-[50px]">
          <div className="w-[220px] relative mx-[40px]">
            <a href="https://www.google.com/maps/contrib/103080209440644939912/reviews?hl=en-US" target="_blank" className="">
              <span className="text-[15px] font-semibold">Daikel Barea Utria</span>
              <p className="mt-[20px] text-[14px] text-[#6B6B6B]">
              Very professional staff. Excellent experience in the process of remodeling my bathroom. They also have all the accessories for glass doors..."Very professional person. Excellent experience in the process of remodeling my bathroom. They also have all the accessories for glass doors".
              </p>
            </a>
          </div>
         
          <div className="w-[220px] relative mx-[40px]">
            <a href="https://www.facebook.com/edmund.rodriguez.14/posts/pfbid024vSot3sjB6AJ7pXmBn66v535n1FNBszq63txzi3hP8wpuTVghVUCwZiyXc9gAg9Zl" target="_blank" className="">
              <span className="text-[15px] font-semibold">Edmund Rodriguez</span>
              <p className="mt-[20px] text-[14px] text-[#6B6B6B]">
              DK Glass did a great job on our shower glass.   They were very nice and we enjoyed talking to them.   Communication was outstanding, they called me when they were running late and called when they were on the way.
              </p>
            </a>
          </div>
          <div className="w-[220px] relative mx-[40px]">
            <a href="https://www.google.com/maps/contrib/110711627387905173999/reviews?hl=en-US" target="_blank" className="">
              <span className="text-[15px] font-semibold">Arley Villanueva Garcia</span>
              <p className="mt-[20px] text-[14px] text-[#6B6B6B]">
              Excellent company ,super recommended by me .Speed and efficiency at work.
              </p>
            </a>
          </div>
          <div className="w-[220px] relative mx-[40px]">
            <a href="https://www.facebook.com/permalink.php?story_fbid=pfbid0Vt2WRdna9PDxofWSAn4jcGTXPAuLkSpFrj4pFv2P9BzXNA7MCGqgBWF4c3XpCGHHl&id=100073638592526" target="_blank" className="">
              <span className="text-[15px] font-semibold">Alejandro Batista</span>
              <p className="mt-[20px] text-[14px] text-[#6B6B6B]">
              Those guys make very good job.
              </p>
            </a>
          </div>
          {/* <div className="w-[220px] relative mx-[40px]">
            <div className="">
              <span className="text-[15px] font-semibold">Title</span>
              <p className="mt-[20px] text-[14px] text-[#6B6B6B]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptates repudiandae esse veritatis eligendi, a earum assumenda sunt dolorem nihil animi, quae reprehenderit harum. Iure cupiditate ratione necessitatibus culpa labore.
              </p>
            </div>
          </div> */}
        </Carousel>
      </div>
    </div>
  </div>
)

export default Testimonials