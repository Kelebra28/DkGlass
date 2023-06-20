import Image from "next/image"
import Button from "./common/Button"

const EmailPopUp = ({handleContactPopUp}) => (
  <div className="fixed top-0 left-0 bottom-0 right-0 z-40 flex justify-center items-center">
    <div onClick={handleContactPopUp} className="absolute top-0 left-0 bottom-0 right-0 opacity-50 bg-[black]" />
    <div className="lg:w-[665px] w-[80%] h-[80vh] lg:h-[auto]  pt-[30px] pr-[30px] bg-[white] z-40 rounded-3xl lg:border-l-[35px] lg:border-l-dk-main shadow-xl pb-[48px]">
      <div className="flex justify-end">
        <div className="w-[22px] h-[22px] relative cursor-pointer " onClick={handleContactPopUp}>
          <Image
            src="/icons/close.svg"
            alt="Logo"
            layout="fill"
          />
        </div>
      </div>
      <div className="h-[100%] overflow-auto">
        <div className="flex justify-center">
          <div className="w-[70%] lg:w-[213px] h-[54px] relative mb-[20px] lg:mb-[54px] lg:mx-auto">
            <Image
              src="/logo.svg"
              alt="Portada"
              layout="fill"
            />
          </div>
        </div>
        <div className="maincontent  ml-[26px]">
          <div>
            <span className="text-[26px] font-semibold">Contactanos</span>
            <p className="text-[14px] text-[#707070]">Te aseguro que encontraremos la mejor opción para tus proyectos agregando elegancia y funcionalidad a tus espacios con nuestros accesorios</p>
          </div>
          <div className="flex lg:justify-between flex-col lg:flex-row">
            <div className="my-[10px] lg:my-[23px] flex flex-col lg:w-[47%]">
              <label htmlFor="" className="text-[14px]">Tu Nombre</label>
              <input placeholder="Nombre" className="pl-[12px] border border-dk-gray shadow h-[51px] rounded-lg" type="text" />
            </div>
            <div className="my-[10px] lg:my-[23px] flex flex-col lg:w-[47%]">
              <label htmlFor="" className="text-[14px]">Email</label>
              <input placeholder="correo@email.com" className="border border-dk-gray pl-[12px] shadow h-[51px] rounded-lg" type="text" />
            </div>
          </div>
          <div>
            <div className="my-[10px] lg:my-[23px] flex flex-col h-100px">
              <label htmlFor="" className="text-[14px]">Mensaje</label>
              <textarea placeholder="Tu mensaje" className="pt-[10px] pl-[12px] shadow h-[150px] border border-dk-gray rounded-lg" type="text" />
            </div>
          </div>
          <div className="flex justify-center mt-[40px]">
            <Button text='Enviar mensaje' />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default EmailPopUp