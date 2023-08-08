import Image from "next/image"
import Link from "next/link"
const Footer = () => (
  <div className=" bg-dk-bg-gray pt-[64px] pb-[48px] footer">
    <p className="text-center mb-[50px]">©2023 DK & Velasco Glass All Rights Reserved.</p>
    <div className="pl-[70px] ">
      <div className="w-[213px] h-[54px] relative mb-[54px] lg:mx-auto">
        <Image
          src="/logoBlanco.svg"
          alt="Portada"
          layout="fill"
        />
      </div>
      <div className="flex lg:flex flex-col pb-[25px] lg:flex-row  lg:justify-between lg:px-[300px]">
        <Link className='hover_footer' href="/">
          <span className="my-[11px] text-[17px] font-semibold">Home</span>
        </Link>
        <Link className='hover_footer' href="/nosotros">
          <span className="my-[11px] text-[17px] font-semibold">About Us</span>
        </Link>
        <Link className='hover_footer' href="#services">
          <span className="my-[11px] text-[17px] font-semibold"> Services</span>
        </Link>
        <Link className='hover_footer' href="#products">
          <span className="my-[11px] text-[17px] font-semibold">Products</span>
        </Link>
        <Link className='hover_footer' href="#contact">
          <span className="my-[11px] text-[17px] font-semibold">Contact us</span>
        </Link>
      </div>
    </div>
    <div className="mx-[5px] border border-dk-secondary lg:mx-[60px]" />
    {/* <div className="flex justify-center mt-[17px]">
      <span className="text-center opacity-[50%]">Live the live your <br /> want</span>
    </div> */}
    <div className="flex justify-center mt-[40px]">
      <a href="https://www.facebook.com/profile.php?id=100087137256154" target="_blank" className="w-[26px] h-[26px] relative">
        <Image
          src="/icons/facebook-white.svg"
          alt="facebook"
          layout="fill"
        />
      </a>
      <a href="https://www.instagram.com/_dkglassshop/" className="w-[26px] h-[26px] relative ml-[33px]">
        <Image
          src="/icons/instagram-white.svg"
          alt="instagram"
          layout="fill"
        />
      </a>
      <a href="https://www.tiktok.com/@dkglass_velasco" className="w-[26px] h-[26px] relative ml-[33px]">
        <Image
          src="/icons/tik-tok-white.svg"
          alt="instagram"
          layout="fill"
        />
      </a>
    </div>
  </div>
)

export default Footer