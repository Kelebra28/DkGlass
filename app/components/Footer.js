import LazyImage from "./common/LazyImages";
import Link from "next/link";

const Footer = () => (
  <div className=" bg-dk-bg-gray pt-[64px] pb-[48px] footer">
    <div className="flex justify-around items-center flex-col ">
      <p className="text-center mb-[10px] textBig">
        ©2023 DK & Velasco Glass All Rights Reserved.
      </p>
      <a href="https://www.bbb.org/us/tx/jersey-village/profile/glass-company/dk-glass-velasco-0915-90070189#sealclick" target="_blank" className="mb-[20px]">
         <img src="https://seal-houston.bbb.org/gen-seals/img.png?bid=90070189&w=280&h=80&color=blue&v=2&chk=49C2E82AAF"/>
      </a>
    </div>
    <div className="">
      <div className="w-[213px] h-[54px] relative mb-[54px] lg:mx-auto">
        <LazyImage src="/logoBlanco.svg" alt="Dk glass Logo Blanco" />
      </div>
      <div className="flex lg:flex flex-col pb-[25px] lg:flex-row  lg:justify-between lg:px-[300px]">
        <Link className="hover_footer" href="/">
          <span className="my-[11px] text-[17px] font-semibold">Home</span>
        </Link>
        <Link className="hover_footer" href="/about-us">
          <span className="my-[11px] text-[17px] font-semibold">About Us</span>
        </Link>
        <Link className="hover_footer" href="#residencial">
          <span className="my-[11px] text-[17px] font-semibold"> Services</span>
        </Link>
        <Link className="hover_footer" href="/#services">
          <span className="my-[11px] text-[17px] font-semibold">Products</span>
        </Link>
        <Link className="hover_footer" href="/#contact">
          <span className="my-[11px] text-[17px] font-semibold">
            Contact us
          </span>
        </Link>
      </div>
    </div>
    <div className="mx-[5px] border border-dk-secondary lg:mx-[60px]" />
    <div className="flex justify-center mt-[40px]">
      <a
        href="https://www.facebook.com/profile.php?id=100087137256154"
        target="_blank"
        className="w-[26px] h-[26px] relative"
      >
        <LazyImage
          src="/icons/facebook-white.svg"
          alt="dk glass icon facebook"
        />
      </a>
      <a
        href="https://www.instagram.com/_dkglassshop/"
        className="w-[26px] h-[26px] relative ml-[33px]"
      >
        <LazyImage
          src="/icons/instagram-white.svg"
          alt="dk glass icon instagram"
        />
      </a>
      <a
        href="https://www.tiktok.com/@dkglass_velasco"
        className="w-[26px] h-[26px] relative ml-[33px]"
      >
        <LazyImage src="/icons/tik-tok-white.svg" alt="dk glass icon tik-tok" />
      </a>
    </div> 
  </div>
);

export default Footer;
// src="https://seal-houston.bbb.org/gen-seals/img.png?bid=90070189&w=280&h=80&color=blue&v=2&chk=49C2E82AAF"