import Image from "next/image"
const CarouselCard = () => (
  <div className="flex flex-col shadow-inner bg-dk-bg-darkgray">
    <div className="h-[237px] relative">
      <Image
        src="/resized.png"
        alt=""
        layout="fill"
      />
    </div>
    <p className="text-[11px] mt-[13px] px-[30px]">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet </p>
    <div className="w-[136px] h-[36px] bg-dk-main self-end mt-[18px]" />
  </div>
)

export default CarouselCard