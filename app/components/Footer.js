import Image from "next/image"
import Link from "next/link"
const Footer = () => (
  <div className=" bg-dk-bg-gray pt-[64px] pb-[48px]">
    <div className="pl-[70px] ">
      <div className="w-[213px] h-[54px] relative mb-[54px] lg:mx-auto">
        <Image
          src="/logo.svg"
          alt="Portada"
          layout="fill"
        />
      </div>
      <div className="hidden lg:flex flex-col pb-[25px] lg:flex-row  lg:justify-between lg:px-[300px]">
        <Link href="/">
          <span className="my-[11px] text-[13px] font-semibold">Home</span>
        </Link>
        <Link href="/nosotros">
          <span className="my-[11px] text-[13px] font-semibold">Nosotros</span>
        </Link>
        <Link href="#services">
          <span className="my-[11px] text-[13px] font-semibold">Servicios</span>
        </Link>
        <Link href="#products">
          <span className="my-[11px] text-[13px] font-semibold">Productos</span>
        </Link>
        <Link href="#contact">
          <span className="my-[11px] text-[13px] font-semibold">Contacto</span>
        </Link>
      </div>
    </div>
    <div className="mx-[5px] border border-dk-secondary lg:mx-[60px]" />
    {/* <div className="flex justify-center mt-[17px]">
      <span className="text-center opacity-[50%]">Live the live your <br /> want</span>
    </div> */}
    <div className="flex justify-center mt-[40px]">
      <div className="w-[16px] h-[16px] relative">
        <Image
          src="/icons/facebook-black.svg"
          alt="facebook"
          layout="fill"
        />
      </div>
      <div className="w-[16px] h-[16px] relative ml-[33px]">
        <Image
          src="/icons/instagram-black.svg"
          alt="instagram"
          layout="fill"
        />
      </div>
    </div>
  </div>
)

export default Footer