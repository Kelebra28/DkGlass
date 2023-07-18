'use client'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image"
import Button from "./common/Button"
import CarouselCard from "./common/CarouselCard";
import WhatsAppLink from "./common/whatsApp";
import Link from "next/link";

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
    items: 1
  }
};

const Hero = ({ handleContactPopUp }) => (
  <div>
    {/* <div className="flex flex-col items-end relative">
      <div className="w-40 bg-dk-bluelight h-22 lg:hidden" />
      <div className="w-40 bg-dk-secondary h-120 lg:hidden" />
      <div className="absolute left-10 right-0 h-20 top-[7.625rem] h-[26.75rem] rounded-ss-[60px] overflow-hidden lg:hidden">
        <Image
          src="/hero.png"
          alt="Portada"
          layout="fill"
        />
      </div>
    </div> */}

    <div className="flex mt-[100px]">
      <div className="">
        <div className=" relative w-screen  lg:block lg:pr-[20px]">
          <Carousel responsive={responsive}>

            <div className="w-[736px] h-[450px] relative">
              <div className="absolute z-30 top-[50%] w-screen  flex justify-center flex-col items-center lg:w-6/12 lg:pl-[80px]  ">
                <span className="text-[30px] font-semibold text-[white]">Custom Glass</span>
                <Link href="/principal/custom">
                  <Button text="See more" color="white" />
                </Link>
              </div>
              <Image
                src="/carousel4.jpg"
                alt="carousel4"
                layout="fill"
              />
            </div>
            <div className="w-[736px] h-[450px] relative">
              <div className="absolute z-30 top-[50%] w-screen flex justify-center flex-col items-center lg:w-6/12 lg:pl-[80px]">
                <span className="text-[30px] font-semibold text-center text-[white]">Commercial Service</span>
                <Link href="/principal/comercial">
                  <Button text="See more" color="white" />
                </Link>
              </div>
              <Image
                src="/residencial/residelcia1.jpg"
                alt="carousel2"
                layout="fill"
              />
            </div>
            <div className="w-[736px] h-[450px] relative">
              <div className="absolute z-30 top-[50%] w-screen flex justify-center flex-col items-center lg:w-6/12 lg:pl-[80px]">
                <span className="text-[30px] font-semibold text-[white]">Mirror</span>
                <Link href="/principal/mirror">
                  <Button text="See more" color="white" />
                </Link>
              </div>
              <Image
                src="/carousel3.jpg"
                alt="carousel3"
                layout="fill"
              />
            </div>
            <div className="w-[736px] h-[450px] relative">
              <div className="absolute z-30 top-[50%] w-screen flex justify-center flex-col items-center lg:w-6/12 lg:pl-[80px]">
                <span className="text-[30px] font-semibold text-[white]">Bathrooms</span>
                <Link href="/principal/bathrooms">
                  <Button text="See more" color="white" />
                </Link>
              </div>
              <Image
                src="/carousel5.jpeg"
                alt="carousel5"
                layout="fill"
              />
            </div>
            <div className="w-[736px] h-[450px] relative">
              <div className="absolute z-30 top-[50%] w-screen flex justify-center flex-col items-center lg:w-6/12 lg:pl-[80px]">
                <span className="text-[30px] text-center font-semibold text-[white]">Shower Glass Doors & Supplies</span>
                <Link href="/principal/showerglassdoor">
                  <Button text="See more" color="white" />
                </Link>
              </div>
              <Image
                src="/carousel6.jpg"
                alt="carousel6"
                layout="fill"
              />
            </div>
            <div className="w-[736px] h-[450px] relative">
              <div className="absolute z-30 top-[50%] w-screen flex justify-center flex-col items-center lg:w-6/12 lg:pl-[80px]">
                <span className="text-[30px] text-center font-semibold text-[white]">Sliding Glass Shower Doors</span>
                <Link href="/principal/slidingglassshowerdoors">
                  <Button text="See more" color="white" />
                </Link>
              </div>
              <Image
                src="/carousel7.jpeg"
                alt="carousel7"
                layout="fill"
              />
            </div>
            <div className="w-[736px] h-[450px] relative">
              <div className="absolute z-30 top-[50%] w-screen flex justify-center flex-col items-center lg:w-6/12 lg:pl-[80px]">
                <span className="text-[30px] text-center font-semibold text-[white]">Stairs</span>
                <Link href="/principal/stairs">
                  <Button text="See more" color="white" />
                </Link>
              </div>
              <Image
                src="/carousel1.jpg"
                alt="carousel1"
                layout="fill"
              />
            </div>

          </Carousel>
        </div>
        <div className="px-[49px] lg:px-[82px] lg:mt-[20px]">
          <p className="mt-[19px] text-lg font-semibold lg:text-[28px]">Dream it , Crystallize it!</p>
          {/* <p className="text-dk-darkgray mt-3 mb-[77px] lg:mb-[80px] text-[11px] lg:text-[15px] lg:mt-[12px]">Te acompañamos en cada módulo te garantizamos una opción a tu medida</p> */}
          {/* <span id="contact" className="hidden lg:inline-block border-b-dk-secondary text-[23px] font-semibold border-b-2 mb-[67px]">Explora Nuestra variedad de ideas</span> */}
        </div>
        <div className="hidden lg:flex justify-center">
          {/* <div className="w-4/12 bg-dk-bg-gray flex justify-end py-[46px]">
            <div className="flex flex-col mr-[35px] items-center">
              <p className="text-[15px] w-[280px] pb-[10px]">Desarrollamos Products únicos basado en tendencias actuales a las que en el futuro no pasaran ese atractivo visual que imponen de inicio.</p>
            </div>
          </div>
          <div className="w-4/12 flex justify-center items-center relative" >
            <Image
              src="/hero.png"
              alt="Portada"
              layout="fill"
            />
          </div> */}
          <div className="w-4/12 flex  justify-center items-center relative flex-col">
            <Button onClick={handleContactPopUp} text="Contact us" background="blue" border="none" color="white" />
            <div className="flex mt-[50px]">
              <Link href="tel:+52 55 1204 0419">
                <div className="flex items-center  cursor-pointer">
                  <div className="w-[16px] h-[16px] relative">
                    <Image
                      src="/icons/phone.svg"
                      alt="Portada"
                      layout="fill"
                    />
                  </div>
                  <span className="text-[12px] font-semibold ml-[10px]">(832) 740-4977</span>
                </div>
              </Link>
              <Link href={`mailto:dkglassvelasco@gmail.com`}>
                <div className="flex items-center ml-[55px] cursor-pointer">
                  <div className="w-[23px] h-[23px] relative">
                    <Image
                      src="/icons/email.svg"
                      alt="Portada"
                      layout="fill"
                    />
                  </div>
                  <span className="text-[12px] font-semibold ml-[10px]">{`dkglassvelasco@gmail.com`}</span>
                </div>
              </Link>
              <div className="flex items-center ml-[55px] cursor-pointer">
                <div className="w-[23px] h-[23px] relative">
                  <WhatsAppLink />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[68px] box-border bg-[#1081A9] z-20 h-[100vh] absolute top-0 right-0 hidden lg:flex flex-col justify-between">
        <div className="pt-[100px] pl-[15px]">
          <div className="w-[26px] h-[26px] my-[20px] relative cursor-pointer">
            <a href="https://www.facebook.com/profile.php?id=100087137256154" target="_blank">
              <Image
                src="/icons/facebook-white.svg"
                alt="Portada"
                layout="fill"
              />
            </a>
          </div>
          {/* <div className="w-[26px] h-[26px] my-[20px] relative cursor-pointer">
            <Image
              src="/icons/LinkedIn-white.svg"
              alt="Portada"
              layout="fill"
            />
          </div> */}
          {/* <div className="w-[26px] h-[26px] my-[20px] relative cursor-pointer">
            <Image
              src="/icons/twiter-white.svg"
              alt="Portada"
              layout="fill"
            />
          </div> */}
          <div className="w-[26px] h-[26px] my-[20px] relative cursor-pointer">
            <a target="_blank" href="https://www.instagram.com/_dkglassshop/">
              <Image
                src="/icons/instagram-white.svg"
                alt="Portada"
                layout="fill"
              />
            </a>
          </div>
          {/* <div className="w-[26px] h-[26px] my-[20px] relative cursor-pointer">
            <Image
              src="/icons/youtube-white.svg"
              alt="Portada"
              layout="fill"
            />
          </div> */}
        </div>
        {/* <div className="bg-dk-secondary mb-[250px] w-[67px] h-[67px] rounded-lg relative flex justify-center items-center cursor-pointer">
          <div className="w-[40px] h-[40px] relative">
            <Image
              src="/icons/message-white.svg"
              alt="Portada"
              layout="fill"
            />
          </div>
        </div> */}
      </div>
    </div>
  </div>
)

export default Hero