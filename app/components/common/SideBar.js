import LazyImage from "./LazyImages";
import Link from "next/link"

const SideBar = ({ handleClickMenu }) => (
  <div className="fixed top-0 left-0 right-0 bottom-0 z-50">
    <div className="bg-[white] absolute top-0 bottom-0 left-0 lg:right-[70%] right-[20%]">
      <header className="bg-dk-main relative flex flex-col items-end pb-[54px] border-b-dk-secondary border-b-[10px] pt-[12px] pr-[10px]">
        <div onClick={handleClickMenu} className="w-[22px] h-[22px] relative cursor-pointer">
          <LazyImage
            src="/icons/close-white.svg"
            alt="Dk glass Icon Close"
          />
        </div>
        <div className="w-[100%] flex justify-center mt-[18px]">
          <div className="w-[263px] h-[54px] relative ">
            <LazyImage
              src="/logo-white.svg"
              alt="Dk glass Icon Logo"
            />
          </div>
        </div>
      </header>
      <div className="absolute top-[160px] bottom-0 left-0 right-0 pl-[40px] pr-[30px] overflow-scroll pb-[50px]">
        <section className="border-b-[2px] border-b-dk-secondary pt-[20px] pb-[20px] flex flex-col">
          <Link href="/">
            <h2 className="text-[18px] font-medium hover:bg-dk-secondary pl-[12px] hover:text-[white]">Home</h2>
          </Link>
          <Link href="/about-us">
            <span className="mt-[15px] text-[12px] hover:bg-dk-secondary pl-[12px] hover:text-[white]">About Us</span>
          </Link>
          <span className="mt-[15px] hidden text-[12px] hover:bg-dk-secondary pl-[12px] hover:text-[white]">{`¿Porque elegir DK Glass & velasco?`}</span>
        </section>
        <section className="border-b-[2px] border-b-dk-secondary pt-[20px] pb-[20px] flex flex-col">
          <Link href="/#services" scroll className="flex flex-col">
            <h2 className="text-[18px] font-medium hover:bg-dk-secondary pl-[12px] hover:text-[white]">Products</h2>
          </Link>
          <Link href="/#residencial">
            <span className="mt-[15px] text-[12px] hover:bg-dk-secondary pl-[12px] hover:text-[white]">Residencial</span>
          </Link>
          <Link href="/#industrial">
            <span className="mt-[15px] text-[12px] hover:bg-dk-secondary pl-[12px] hover:text-[white]">Commercial</span>
          </Link>
          <Link href="/#services">
            <span className="mt-[15px] text-[12px] hover:bg-dk-secondary pl-[12px] hover:text-[white]">Services</span>
          </Link>
        </section>
        {/* <section className="border-b-[2px] border-b-dk-secondary pt-[20px] pb-[20px] flex flex-col">
          <h2 className="text-[18px] font-medium  hover:bg-dk-secondary pl-[12px] hover:text-[white]">Tienda</h2>
        </section>
        <section className="border-b-[2px] border-b-dk-secondary pt-[20px] pb-[20px] flex flex-col">
          <h2 className="text-[18px] font-medium hover:bg-dk-secondary pl-[12px] hover:text-[white]">Blog</h2>
        </section>
        <section className="border-b-[2px] border-b-dk-secondary pt-[20px] pb-[20px] flex flex-col">
          <h2 className="text-[18px] font-medium  hover:bg-dk-secondary pl-[12px] hover:text-[white]">Información</h2>
          <span className="mt-[15px] text-[12px] hover:bg-dk-secondary pl-[12px] hover:text-[white]">Titulo</span>
          <span className="mt-[15px] text-[12px] hover:bg-dk-secondary pl-[12px] hover:text-[white]">Titulo</span>
        </section> */}
        <div className="flex flex-col mt-[87px]">
          <Link href="tel:(832) 740-4977">
            <div className="flex items-center">
              <div className="w-[16px] h-[16px] relative">
                <LazyImage
                  src="/icons/phone.svg"
                  alt="Dk glass Icon phone"
                />
              </div>
              <span className="text-[12px] font-semibold ml-[10px]">(832) 740-4977</span>
            </div>
          </Link>
          <Link href={`mailto:info@velascoglassmirrors.com`}>
            <div className="flex items-center mt-[12px]">
              <div className="w-[23px] h-[23px] relative">
                <LazyImage
                  src="/icons/email.svg"
                  alt="Dk glass Icon Email"
                />
              </div>
              <span className="text-[12px] font-semibold ml-[10px]">info@velascoglassmirrors.com</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
    <div onClick={handleClickMenu} className="bg-[black] opacity-30 absolute top-0 bottom-0 left-[80%] lg:left-[30%] right-0" />


  </div>
)

export default SideBar