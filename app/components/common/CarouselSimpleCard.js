import Image from "next/image"
const CarouselSimpleCard = ({title, img, text}) => (
  <div className="flex flex-col shadow-inner carrusel mx-[10px]">
    <div className="h-[260px] relative">
      <Image
        src={img}
        alt=""
        layout="fill"
      />
    </div>
    <div className="px-[30px] pb-[100px] pt-[20px] border-b-2 border-dk-secondary">
      <span>{title}</span>
      <p className="text-[11px] mt-[13px]">{text}</p>
    </div>
    
  </div>
)

export default CarouselSimpleCard