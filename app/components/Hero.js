'use client'
import Carousel from "react-multi-carousel";
import PhoneInTalkRoundedIcon from '@mui/icons-material/PhoneInTalkRounded';
import ForwardToInboxSharpIcon from '@mui/icons-material/ForwardToInboxSharp';
import "react-multi-carousel/lib/styles.css";
import Image from "next/image"
import Button from "./common/Button"
import CarouselCard from "./common/CarouselCard";
import WhatsAppLink from "./common/whatsApp";
import Link from "next/link";
import { CustomNextButton, CustomPrevButton } from '../components/common/CustomButtonCarrusel'

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
const customButtonStyles = {
  zIndex: 1, // Ajusta el valor de z-index según tus necesidades
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

    <div id="home" className="flex mt-[100px]">
      <div className="">
        <div className=" relative w-screen  lg:block lg:pr-[20px]">
          <Carousel
            responsive={responsive}
            autoPlay={true}
            autoPlaySpeed={4000}
            infinite={true}
            showDots={true}
          >
            <div className="w-[736px] h-[450px] relative carrusel_hover">
              <div className="absolute z-30 top-[50%] w-screen  flex justify-center flex-col items-center lg:w-6/12 lg:pl-[80px]  ">
                <span className="text-[30px] text-center font-semibold text-[white]">Custom Glass</span>
                <Link href="/principal/custom">
                  <Button className="button_hover" text="More" color="white" />
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
                  <Button className="button_hover" text="More" color="white" />
                </Link>
              </div>
              <Image
                src="/comercial/comercial6.jpg"
                alt="carousel2"
                layout="fill"
              />
            </div>
            <div className="w-[736px] h-[450px] relative">
              <div className="absolute z-30 top-[50%] w-screen flex justify-center flex-col items-center lg:w-6/12 lg:pl-[80px]">
                <span className="text-[30px] text-center font-semibold text-[white]">Mirrors</span>
                <Link href="/principal/mirror">
                  <Button className="button_hover" text="More" color="white" />
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
                <span className="text-[30px] text-center font-semibold text-[white]">Hardware & Supplies</span>
                <Link href="/principal/hardware">
                  <Button className="button_hover" text="More" color="white" />
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
                <span className="text-[30px] text-center font-semibold text-[white]">Shower/Sliding Glass Doors</span>
                <Link href="/principal/showerglassdoor">
                  <Button className="button_hover" text="More" color="white" />
                </Link>
              </div>
              <Image
                src="/carousel6.jpg"
                alt="carousel6"
                layout="fill"
              />
            </div>
            {/* <div className="w-[736px] h-[450px] relative">
              <div className="absolute z-30 top-[50%] w-screen flex justify-center flex-col items-center lg:w-6/12 lg:pl-[80px]">
                <span className="text-[30px] text-center font-semibold text-[white]">Sliding Glass Shower Doors</span>
                <Link href="/principal/slidingglassshowerdoors">
                  <Button  className="button_hover" text="More" color="white" />
                </Link>
              </div>
              <Image
                src="/carousel7.jpeg"
                alt="carousel7"
                layout="fill"
              />
            </div> */}
            <div className="w-[736px] h-[450px] relative">
              <div className="absolute z-30 top-[50%] w-screen flex justify-center flex-col items-center lg:w-6/12 lg:pl-[80px]">
                <span className="text-[30px] text-center font-semibold text-[white]">Glass Railing</span>
                <Link href="/principal/stairs">
                  <Button className="button_hover" text="More" color="white" />
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
            <Button className="hover_contat" onClick={handleContactPopUp} text="Contact us" background="blue" border="2px border-[#243c5a]" color="white" />
            <div className="flex mt-[50px]">
              <Link href="tel: (832) 740-4977">
                <div className="flex items-center  cursor-pointer animation-contact">
                  <div className="w-[16px] h-[16px] relative b">
                    <span className="text-[#60DBC5]">
                      <PhoneInTalkRoundedIcon />
                    </span>
                  </div>
                  <span className="text-[12px] font-semibold ml-[10px]">(832) 740-4977</span>
                </div>
              </Link>
              <Link href={`mailto:info@velascoglassmirrors.com`}>
                <div className="flex items-center ml-[55px] cursor-pointer animation-contact">
                  <div className="w-[23px] h-[23px] relative">
                    <span className="text-[#1081A9]">
                      <ForwardToInboxSharpIcon />
                    </span>
                  </div>
                  <span className="text-[12px] font-semibold ml-[10px]">{`info@velascoglassmirrors.com`}</span>
                </div>
              </Link>
              <div className="flex items-center ml-[55px] cursor-pointer animation-contact">
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
          <div className="w-[30px] h-[30px] my-[20px] relative cursor-pointer">
            <span class="relative left-2.5 flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75">
                <span className="bg-[#fffffF] rounded-full h-[5px] w-[5px]"></span>
              </span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
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
          <div className="w-[30px] h-[30px] my-[20px] relative cursor-pointer">
          <span class="relative flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75">
                <span className="bg-[#fffffF] rounded-full h-[5px] w-[5px]"></span>
              </span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
            <a target="_blank" href="https://www.instagram.com/_dkglassshop/">
              <Image
                src="/icons/instagram-white.svg"
                alt="Portada"
                layout="fill"
              />
            </a>
          </div>
          <div className="w-[30px] h-[30px] my-[20px] relative cursor-pointer">
          <span class="relative left-4 flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75">
                <span className="bg-[#fffffF] rounded-full h-[5px] w-[5px]"></span>
              </span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
            <a target="_blank" href="https://www.tiktok.com/@dkglass_velasco">
              <Image
                src="/icons/tik-tok-white.svg"
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