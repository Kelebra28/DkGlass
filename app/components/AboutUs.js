import Image from "next/image"

const AboutUs = () => (
  <div className="relative flex pr-[39px]">
    <div className="w-[63px] h-[800px] bg-dk-secondary" />
    <div className="absolute top-[55px] left-0 flex flex-col lg:flex-row">
      <div className="w-[354px] h-[298px] lg:w-[50%] lg:h-[655px] relative">
        <Image
          src="/bac.png"
          alt="Portada"
          layout="fill"
        />
      </div>
      <div className=" relative lg:w-[50%] mt-[60px] ml-[84px] lg:ml-[42px] lg:flex lg:flex-col lg:justify-between">
        <div className="border-l-4 border-dk-main h-[52px] flex items-center pl-[21px]">
          <span className="text-dk-main text-[26px]">Sobre nosotros</span>
        </div>
        <p className="mt-[40px] text-[14px] text-dk-darkgray">Empresa creada en el 2017 bajo el nombre de Velasco Glass and Mirrors como mayorista de accesorios para vidrio (glass fitting). En el año 2019 se fusiona con DK GLASS ofreciendo soluciones integrales de diseño e instalación. A finales del 2021 se incrementa otra línea de negocios en el área de importación para lograr la expansión hacia otros territorios. Actualmente contamos con locaciones en Texas (Houston, oficina principal, - Odessa) y Kentucky.</p>
        <div className="w-[100%] h-[300px] relative hidden lg:flex">
          <Image
            src="/register.png"
            alt="Portada"
            layout="fill"
          />
        </div>
      </div>
    </div>
  </div>
)

export default AboutUs