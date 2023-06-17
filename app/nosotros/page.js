import Header from "../components/common/header"
import Image from "next/image"
const AboutUs = () => (
  <div>
    <Header />
    <div className=" mt-[100px]">
      <div className="flex">
        <div className="w-[40%] h-[325px] flex relative">
          <Image
            src="/about.png"
            alt="Portada"
            layout="fill"
          />
        </div>
        <div className="w-[50%] ml-[50px]">
          <div className="border-l-4 border-dk-secondary h-[62px] flex items-center mt-[60px] pl-[21px]">
            <span className="text-dk-main text-[36px] leading-[28px]">Sobre <br /> nosotros</span>
          </div>
          <p className="w-[700px] mt-[55px] text-[14px] text-[#6B6B6B]">Empresa creada en el 2017 bajo el nombre de Velasco Glass and Mirrors como mayorista de accesorios para vidrio (glass fitting). En el año 2019 se fusiona con DK GLASS ofreciendo soluciones integrales de diseño e instalación. A finales del 2021 se incrementa otra línea de negocios en el área de importación para lograr la expansión hacia otros territorios. Actualmente contamos con locaciones en Texas (Houston, oficina principal, - Odessa) y Kentucky.</p>
        </div>
      </div>
      <div className="flex justify-end pr-[180px] mt-[48px]">
        <div className="w-[40%] h-[325px] flex relative">
          <Image
            src="/about1.png"
            alt="Portada"
            layout="fill"
          />
        </div>
      </div>
      <div className="h-[76px] bg-dk-gray flex justify-end pt-[15px] pr-[80px] mt-[90px]">
        <span className="text-[15px]">Términos y condiciones</span>
      </div>
    </div>
  </div>
)

export default AboutUs