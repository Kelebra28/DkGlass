import LazyImage from "./common/LazyImages";
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import CarouselCard from "../components/common/CarouselCard"

const responsive = {
  superLargeDesktop: {
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
  <div className="pb-[40px] flex flex-col lg:flex-row-reverse testimonial">
    <div className="h-[395px] hidden lg:block relative lg:w-4/12 w-12/12 zoom">
      <LazyImage src="/residencial/residelcia4.jpg" alt="dk glass testimonial"/>
    </div>
    <div className="w-12/12 lg:w-8/12 mb-[100px]">
      <div className="border-l-4 border-dk-main mt-[41px] h-[52px] ml-[54px] flex items-center pl-[21px]">
        <span className="text-[21px] text-center textBig">Testimonials from satisfied customers</span>
      </div>
      <div>
        <Carousel 
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={4000}
          infinite={true} 
          className="mt-[50px]">
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
            <a href="https://www.google.com/maps/contrib/117090844837125871366/reviews/@29.8743038,-95.5909727,17z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=en-US&entry=ttu" target="_blank" className="">
              <span className="text-[15px] font-semibold">Dianet Barea Rodríguez</span>
              <p className="mt-[20px] text-[14px] text-[#6B6B6B]">
                I love it, excellent service !!
              </p>
            </a>
          </div>
          <div className="w-[220px] relative mx-[40px]">
            <a href="https://www.google.com/maps/contrib/105093483314072535346/place/ChIJh3KOJubRQIYRo57X7YKaOks/@30.0492184,-95.3403768,10z/data=!4m6!1m5!8m4!1e1!2s105093483314072535346!3m1!1e1?hl=en-US&entry=ttu" target="_blank" className="">
              <span className="text-[15px] font-semibold">Daikel Barea Utria</span>
              <p className="mt-[20px] text-[14px] text-[#6B6B6B]">
                N⁰ 1 in the quality of services offered (design, manufacture and installation of glass doors, store front, stairs and mirrors) sales of hardware.
              </p>
            </a>
          </div>
          <div className="w-[220px] relative mx-[40px]">
            <a href="https://www.google.com/maps/contrib/114365325992272813259/place/ChIJh3KOJubRQIYRo57X7YKaOks/@32.8811684,-105.2276418,6z/data=!4m6!1m5!8m4!1e1!2s114365325992272813259!3m1!1e1?hl=en-US&entry=ttu" target="_blank" className="">
              <span className="text-[15px] font-semibold">Matias Molins</span>
              <p className="mt-[20px] text-[14px] text-[#6B6B6B]">
                They treated me exceptionally the girls are divine, they have cheap prices and quality in their glasses
              </p>
            </a>
          </div>
          <div className="w-[220px] relative mx-[40px]">
            <a href="https://www.google.com/maps/contrib/113555642976183916406/reviews/@29.8743117,-95.5911664,17z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=en-US&entry=ttu" target="_blank" className="">
              <span className="text-[15px] font-semibold">Laura E Ibañez</span>
              <p className="mt-[20px] text-[14px] text-[#6B6B6B]">
                Very pleased with the attention and the work done, it was spectacular….
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
        </Carousel>
      </div>
    </div>
  </div>
)

export default Testimonials