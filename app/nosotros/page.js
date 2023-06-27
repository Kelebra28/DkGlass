import Header from "../components/common/header"
import Image from "next/image"
import Footer from "../components/Footer"
const AboutUs = () => {
  return (
    <div>
      <Header />
      <div className="relative mt-[120px]">
        <div className="w-[52px] h-[100%] bg-dk-secondary absolute top-0 left-0 z-[-1] lg:w-[80px]" />
        <div className="flex flex-col lg:flex-col-reverse lg:items-end items-center">
          <div className="w-[90%] lg:w-[65%] h-[325px] flex relative right-0 lg:mt-[100px] lg:mr-[17px] lg:mb-[25px]">
            <Image
              src="/about.png"
              alt="Portada"
              layout="fill"
            />
          </div>
          <div className="lg:w-[100%] lg:pl-[120px] flex flex-col pl-[20%] mb-[31px] lg:mb-[0]">
            <div className="border-l-4 border-dk-secondary h-[62px] flex items-center mt-[60px] pl-[21px]">
              <span className="text-dk-main text-[36px] leading-[28px]">Sobre  nosotros</span>
            </div>
            <p className="w-[80%] lg:w-[800px] mt-[55px] text-[14px] text-[#6B6B6B]">Empresa creada en el 2017 bajo el nombre de Velasco Glass and Mirrors como mayorista de accesorios para vidrio (glass fitting). En el año 2019 se fusiona con DK GLASS ofreciendo soluciones integrales de diseño e instalación. A finales del 2021 se incrementa otra línea de negocios en el área de importación para lograr la expansión hacia otros territorios. Actualmente contamos con locaciones en Texas (Houston, oficina principal, - Odessa) y Kentucky.</p>

            <div className="w-[110px] h-[36px] mt-[150px] relative ">
              <Image
                src="/media.png"
                alt="media"
                layout="fill"
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default AboutUs