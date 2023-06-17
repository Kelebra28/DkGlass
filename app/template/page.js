import Image from "next/image"
import Button from "../components/common/Button"
import Header from "../components/common/header"
import SocialMedia from "../components/common/SocialMedia"

export default function Home() {
  return (
    <div>
      <Header />
      <SocialMedia />
      <div className="h-[100vh] mt-[90px]">
        <div className="flex ">
          <div className="w-[50%]">
            <div className="h-[29px] bg-dk-main" />
            <div className="px-[80px] mt-[20px] flex flex-col">
              <span className="text-[25px] font-medium">NOMBRE</span>
              <p className="mt-[20px] mb-[30px] text-[18px] font-medium">"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."</p>
              <span className="text-[15px]">Modelo</span>
              <span className="mt-[20px] bg-dk-secondary w-[330px] text-[]15px pl-[18px] text-[white] italic font-semibold">Especificaciones</span>
            </div>
          </div>
          <div className="w-[50%]">
            <div className="h-[630px] relative">
              <Image
                src="/product.png"
                alt=""
                layout="fill"
              />
            </div>
          </div>
        </div>
        <div className="flex  mt-[-80px]">
          <div className="w-[33%] bg-dk-bg-gray flex justify-end p-[45px] box-border">
            <p className="text-[15px] w-[70%] ">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorp</p>
          </div>
          <div className="w-[33%] relative border-[8px] border-[white]">
            <Image
              src="/register.png"
              alt=""
              layout="fill"
            />
          </div>
          <div className="w-[33%] flex items-end">
            <div className="ml-[40px] mb-[50px]">
              <Button text="Contactanos" />
            </div>
          </div>
        </div>
        <div className="h-[76px] bg-dk-gray flex justify-end pt-[15px] pr-[80px]">
        <span className="text-[15px]">Términos y condiciones</span>
      </div>
      </div>
    </div>
  )
}
