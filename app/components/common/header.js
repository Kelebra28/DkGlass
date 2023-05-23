import Image from "next/image"

const Header = () => (
  <div className="flex justify-center pt-[20px] pl-[20px] absolute left-0 right-0 top-0">
    <div className="w-[29px] h-[54px] absolute left-[20px]">
      <Image
        src="/icons/menu.svg"
        alt="Logo"
        layout="fill"
      />
    </div>
    <div className="w-[132px] h-[54px] relative">
      <Image
        src="/logo-full.svg"
        alt="menu icon"
        layout="fill"
      />
    </div>
  </div>
)

export default Header