import Image from "next/image"

const Hero = () => (
  <div>
    <div className="flex flex-col items-end">
      <div className="w-40 bg-dk-bluelight h-22" />
      <div className="w-40 bg-dk-secondary h-120" />
      <div className="absolute left-10 right-0 h-20 top-[7.625rem] h-[26.75rem] rounded-ss-[60px] overflow-hidden">
        <Image 
          src="/hero.png"
          alt="Portada"
          layout="fill"
        />
      </div>
    </div>
    <div className="px-12">
      <p className="mt-[19px] text-lg font-semibold">"Encuentra soluciones creativas y atractivas para tus necesidades de decoración con nuestros accesorios de vidrio para interiores".</p>
      <p className="text-dk-darkgray mt-3 mb-[77px] text-[11px]">Te acompañamos en cada módulo te garantizamos una opción a tu medida</p>
    </div>
  </div>
)

export default Hero