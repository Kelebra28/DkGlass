import Image from "next/image"

const CarouselCard2 = ({ text, img }) => (
  <div className=" mx-[38px] mt-[67px]">
    <div className="h-[240px] relative">
      <Image
        src={img}
        alt="escalera"
        layout="fill"
      />
    </div>
    <div className="pt-8 px-[22px] pb-[28px] border-b-4 border-b-dk-secondary">
      <span className="text-[24px]">Escaleras</span>
      <p className="mt-3 text-[14px] text-dk-darkgray">{text}</p>

      <div className="mt-[30px] text-[14px]">
        <span>TITULO</span> <span className="text-dk-darkgray">/   August 21 2023</span>
      </div>
    </div>
  </div>
)

export default CarouselCard2