import Image from "next/image"
import Button from "./common/Button"

const Hero = () => (
  <div>
    <div className="flex flex-col items-end relative">
      <div className="w-40 bg-dk-bluelight h-22 lg:hidden" />
      <div className="w-40 bg-dk-secondary h-120 lg:hidden" />
      <div className="absolute left-10 right-0 h-20 top-[7.625rem] h-[26.75rem] rounded-ss-[60px] overflow-hidden lg:hidden">
        <Image
          src="/hero.png"
          alt="Portada"
          layout="fill"
        />
      </div>
    </div>

    <div className="flex">
      <div className="">
        <div className="relative w-screen h-[360px] hidden lg:flex">
          <Image
            src="/hero-desktop.png"
            alt="Portada"
            layout="fill"
          />
        </div>
        <div className="px-[49px] lg:px-[82px] lg:mt-[20px]">
          <p className="mt-[19px] text-lg font-semibold lg:text-[28px]">"Encuentra soluciones creativas y atractivas para tus necesidades de decoración con nuestros accesorios de vidrio para interiores".</p>
          <p className="text-dk-darkgray mt-3 mb-[77px] lg:mb-[49px] text-[11px] lg:text-[15px] lg:mt-[12px]">Te acompañamos en cada módulo te garantizamos una opción a tu medida</p>
          <span className="hidden lg:inline-block border-b-dk-secondary text-[23px] font-semibold border-b-2 mb-[67px]">Explora Nuestra variedad de ideas</span>
        </div>
        <div className="hidden lg:flex">
          <div className="w-4/12 bg-dk-bg-gray flex justify-end py-[46px]">
            <div className="flex flex-col mr-[35px] items-center">
              <p className="text-[15px] w-[280px] pb-[10px]">Desarrollamos productos únicos basado en tendencias actuales a las que en el futuro no pasaran ese atractivo visual que imponen de inicio.</p>
              <Button text="Regístrate" />
            </div>
          </div>
          <div className="w-4/12 border flex justify-center items-center">Video</div>
          <div className="w-4/12 flex justify-center items-center relative flex-col">
            <Button text="Contactanos" background="blue" border="none" color="white" />
            <div className="flex mt-[50px]">
              <div className="flex items-center">
                <div className="w-[16px] h-[16px] relative">
                  <Image
                    src="/icons/phone.svg"
                    alt="Portada"
                    layout="fill"
                  />
                </div>
                <span className="text-[12px] font-semibold ml-[10px]">+52 55 1204 0419</span>

              </div>
              <div className="flex items-center ml-[55px]">
                <div className="w-[23px] h-[23px] relative">
                  <Image
                    src="/icons/email.svg"
                    alt="Portada"
                    layout="fill"
                  />
                </div>
                <span className="text-[12px] font-semibold ml-[10px]">+52 55 1204 0419</span>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[68px] box-border bg-[#1081A9] z-20 h-[1024px] absolute top-0 right-0 hidden lg:flex flex-col justify-between">
        <div className="pt-[100px] pl-[15px]">
          <div className="w-[26px] h-[26px] my-[10px] relative">
            <Image
              src="/icons/facebook-white.svg"
              alt="Portada"
              layout="fill"
            />
          </div>
          <div className="w-[26px] h-[26px] my-[10px] relative">
            <Image
              src="/icons/facebook-white.svg"
              alt="Portada"
              layout="fill"
            />
          </div>
          <div className="w-[26px] h-[26px] my-[10px] relative">
            <Image
              src="/icons/facebook-white.svg"
              alt="Portada"
              layout="fill"
            />
          </div>
          <div className="w-[26px] h-[26px] my-[10px] relative">
            <Image
              src="/icons/facebook-white.svg"
              alt="Portada"
              layout="fill"
            />
          </div>
          <div className="w-[26px] h-[26px] my-[10px] relative">
            <Image
              src="/icons/facebook-white.svg"
              alt="Portada"
              layout="fill"
            />
          </div>
          <div className="w-[26px] h-[26px] my-[10px] relative">
            <Image
              src="/icons/facebook-white.svg"
              alt="Portada"
              layout="fill"
            />
          </div>
        </div>
        <div className="bg-dk-secondary mb-[250px] w-[67px] h-[67px] rounded-lg">

        </div>
      </div>
    </div>
  </div>
)

export default Hero