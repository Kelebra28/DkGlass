import Image from "next/image"

const AboutUs = () => (
  <div className="relative flex pr-[39px]">
    <div className="w-[63px] h-[800px] bg-dk-secondary" />
    <div className="w-[354px] h-[298px] absolute top-[55px] left-0">
      <Image
        src="/register.png"
        alt="Portada"
        layout="fill"
      />
    </div>
    <div className="w-fit mt-[413px] ml-[21px]">
      <div className="border-l-4 border-dk-main h-[52px] flex items-center pl-[21px]">
        <span className="text-dk-main text-[26px]">Sobre nosotros</span>
      </div>
      <p className="mt-[40px] text-[14px] text-dk-darkgray">Empresa creada en el 2017 bajo el nombre de Velasco Glass and Mirrors como mayorista de accesorios para vidrio (glass fitting). En el año 2019 se fusiona con DK GLASS ofreciendo soluciones integrales de diseño e instalación. A finales del 2021 se incrementa otra línea de negocios en el área de importación para lograr la expansión hacia otros territorios. Actualmente contamos con locaciones en Texas (Houston, oficina principal, - Odessa) y Kentucky.</p>
    </div>
  </div>
)

export default AboutUs