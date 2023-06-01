import Image from "next/image"
const CarouselSimpleCard = () => (
  <div className="flex flex-col shadow-inner mx-[10px]">
    <div className="h-[237px] relative">
      <Image
        src="/resized.png"
        alt=""
        layout="fill"
      />
    </div>
    <div className="px-[30px] pb-[100px] pt-[20px] border-b-2 border-dk-secondary">
      <span>Escaleras</span>
      <p className="text-[11px] mt-[13px]">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet </p>
    </div>
    
  </div>
)

export default CarouselSimpleCard