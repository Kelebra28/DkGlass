"use client";
import Carousel from "react-multi-carousel";
import PhoneInTalkRoundedIcon from "@mui/icons-material/PhoneInTalkRounded";
import ForwardToInboxSharpIcon from "@mui/icons-material/ForwardToInboxSharp";
import "react-multi-carousel/lib/styles.css";
import LazyImage from "./common/LazyImages";
import Button from "./common/Button";
// import CarouselCard from "./common/CarouselCard";
import WhatsAppLink from "./common/whatsApp";
import Link from "next/link";
// import { CustomNextButton, CustomPrevButton } from '../components/common/CustomButtonCarrusel'

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
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
const customButtonStyles = {
  zIndex: 1, // Ajusta el valor de z-index según tus necesidades
};
const Hero = ({ handleContactPopUp }) => (
  <div>
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
                <span className="text-[30px] text-center font-semibold text-[white]">
                  Custom Glass
                </span>
                <Link href="/principal/custom">
                  <Button
                    className="button_hover"
                    text="See more information"
                    color="white"
                  />
                </Link>
              </div>
              <LazyImage src="/carousel4.jpg" alt="Dk glass Custom Glass" />
            </div>
            <div className="w-[736px] h-[450px] relative">
              <div className="absolute z-30 top-[50%] w-screen flex justify-center flex-col items-center lg:w-6/12 lg:pl-[80px]">
                <span className="text-[30px] font-semibold text-center text-[white]">
                  Commercial Service
                </span>
                <Link href="/principal/comercial">
                  <Button
                    className="button_hover"
                    text="See more information"
                    color="white"
                  />
                </Link>
              </div>
              <LazyImage
                src="/comercial/comercial6.jpg"
                alt="Dk glass Commercial Service"
              />
            </div>
            <div className="w-[736px] h-[450px] relative">
              <div className="absolute z-30 top-[50%] w-screen flex justify-center flex-col items-center lg:w-6/12 lg:pl-[80px]">
                <span className="text-[30px] text-center font-semibold text-[white]">
                  Mirrors
                </span>
                <Link href="/principal/mirror">
                  <Button
                    className="button_hover"
                    text="See more information"
                    color="white"
                  />
                </Link>
              </div>

              <LazyImage src="/carousel3.jpg" alt="Dk glass Mirrors" />
            </div>
            <div className="w-[736px] h-[450px] relative">
              <div className="absolute z-30 top-[50%] w-screen flex justify-center flex-col items-center lg:w-6/12 lg:pl-[80px]">
                <span className="text-[30px] text-center font-semibold text-[white]">
                  Hardware & Supplies
                </span>
                <Link href="/principal/hardware">
                  <Button
                    className="button_hover"
                    text="See more information"
                    color="white"
                  />
                </Link>
              </div>
              <LazyImage
                src="/showerdoor-hardware.jpg"
                alt="Dk glass Hardware & Supplies"
              />
            </div>
            <div className="w-[736px] h-[450px] relative">
              <div className="absolute z-30 top-[50%] w-screen flex justify-center flex-col items-center lg:w-6/12 lg:pl-[80px]">
                <span className="text-[30px] text-center font-semibold text-[white]">
                  Shower/Sliding Glass Doors
                </span>
                <Link href="/principal/showerglassdoor">
                  <Button
                    className="button_hover"
                    text="See more information"
                    color="white"
                  />
                </Link>
              </div>
              <LazyImage
                src="/carousel6.jpg"
                alt="Dk glass Shower/Sliding Glass Doors"
              />
            </div>
            <div className="w-[736px] h-[450px] relative">
              <div className="absolute z-30 top-[50%] w-screen flex justify-center flex-col items-center lg:w-6/12 lg:pl-[80px]">
                <span className="text-[30px] text-center font-semibold text-[white]">
                  Glass Railing
                </span>
                <Link href="/principal/stairs">
                  <Button
                    className="button_hover"
                    text="See more information"
                    color="white"
                  />
                </Link>
              </div>
              <LazyImage src="/carousel1.jpg" alt="Dk glass Glass Railing" />
            </div>
          </Carousel>
        </div>
        <div className="px-[49px] lg:px-[82px] lg:mt-[20px]">
          <p className="mt-[19px] text-lg font-semibold lg:text-[28px]">
            Dream it , Crystallize it!
          </p>
        </div>
        <div className="hidden lg:flex justify-center">
          <div className="w-4/12 flex  justify-center items-center relative flex-col">
            <Button
              className="hover_contat"
              onClick={handleContactPopUp}
              text="Contact us"
              background="blue"
              border="2px border-[#243c5a]"
              color="white"
            />
            <div className="flex mt-[50px]">
              <Link href="tel: (832) 740-4977">
                <div className="flex items-center  cursor-pointer animation-contact">
                  <div className="w-[16px] h-[16px] relative b">
                    <span className="text-[#60DBC5]">
                      <PhoneInTalkRoundedIcon />
                    </span>
                  </div>
                  <span className="text-[12px] font-semibold ml-[10px]">
                    (832) 740-4977
                  </span>
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
            <span className="relative left-2.5 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75">
                <span className="bg-[#fffffF] rounded-full h-[5px] w-[5px]"></span>
              </span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
            <a
              href="https://www.facebook.com/profile.php?id=100087137256154"
              target="_blank"
            >
              <LazyImage
                src="/icons/facebook-white.svg"
                alt="Dk glass Icon Facebook"
              />
            </a>
          </div>
          <div className="w-[30px] h-[30px] my-[20px] relative cursor-pointer">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75">
                <span className="bg-[#fffffF] rounded-full h-[5px] w-[5px]"></span>
              </span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
            <a target="_blank" href="https://www.instagram.com/_dkglassshop/">
              <LazyImage
                src="/icons/instagram-white.svg"
                alt="Dk glass Icon instagram"
              />
            </a>
          </div>
          <div className="w-[30px] h-[30px] my-[20px] relative cursor-pointer">
            <span className="relative left-4 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75">
                <span className="bg-[#fffffF] rounded-full h-[5px] w-[5px]"></span>
              </span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
            <a target="_blank" href="https://www.tiktok.com/@dkglass_velasco">
              <LazyImage
                src="/icons/tik-tok-white.svg"
                alt="Dk glass Icon tik-tok"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
