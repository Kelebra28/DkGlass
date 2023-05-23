import Image from "next/image"
const Footer = () => (
  <div className=" bg-dk-bg-gray pt-[64px] pb-[48px]">
    <div className="pl-[70px]">
      <div className="w-[213px] h-[54px] relative mb-[54px]">
        <Image
          src="/logo.svg"
          alt="Portada"
          layout="fill"
        />
      </div>
      <div className="flex flex-col pb-[25px]">
        <span className="my-[11px] text-[13px] font-semibold">Home</span>
        <span className="my-[11px] text-[13px] font-semibold">Nosotros</span>
        <span className="my-[11px] text-[13px] font-semibold">Servicios</span>
        <span className="my-[11px] text-[13px] font-semibold">Productos</span>
        <span className="my-[11px] text-[13px] font-semibold">Contacto</span>
      </div>
    </div>
    <div className="mx-[5px] border border-dk-secondary" />
    <div className="flex justify-center mt-[17px]">
      <span className="text-center opacity-[50%]">Live the live your <br /> want</span>
    </div>
    <div className="flex justify-center mt-[40px]">
      <div className="w-[12px] h-[12px] relative">
        <Image
          src="/icons/facebook.svg"
          alt="Portada"
          layout="fill"
        />
      </div>
      <div className="w-[12px] h-[12px] relative ml-[33px]">
        <Image
          src="/icons/instagram.svg"
          alt="Portada"
          layout="fill"
        />
      </div>
    </div>
  </div>
)

export default Footer