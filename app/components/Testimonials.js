import Image from "next/image"
const Testimonials = () => (
  <div className="pb-[40px]">
    <div className="h-[355px] w-12/12 relative">
      <Image
        src="/testimonials.png"
        alt="Portada"
        layout="fill"
      />
    </div>
    <div className="border-l-4 border-dk-main mt-[41px] h-[52px] ml-[54px] flex items-center pl-[21px]">
      <span className="text-[21px]">Testimonios de clientes satisfechos</span>
    </div>
  </div>
)

export default Testimonials