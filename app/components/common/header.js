'use client'
import { useState } from 'react'
import Image from "next/image"
import SideBar from "./SideBar"

const Header = () => {
  const [showMenu, setShowMenu] = useState(true)
  const handleClickMenu = () => {
    setShowMenu(!showMenu)
  }
  return (
    <div className=" border-dk-secondary bg-[white]  lg:bg-[rgba(255,255,255,.8)] flex pt-[20px] pl-[20px] fixed z-10 left-0 right-0 top-0 justify-center lg:justify-start lg:pb-[17px]">
      {
        showMenu && <SideBar handleClickMenu={handleClickMenu}/>
      }
      <div className="flex justify-center lg:w-4/12 w-12/12  lg:justify-start">
        <div onClick={handleClickMenu} className="w-[29px] h-[54px] absolute left-[20px] lg:relative lg:left-0 lg:mr-[30px]">
          <Image
            src="/icons/menu.svg"
            alt="Logo"
            layout="fill"
          />
        </div>
        <div className="w-[132px] h-[54px] relative ">
          <Image
            src="/logo-full.svg"
            alt="menu icon"
            layout="fill"
          />
        </div>
      </div>
      <div className="hidden lg:flex  w-8/12 pt-[20px]">
        <span className="text-[13px] px-[10px] font-semibold  mx-[25px] cursor-pointer">Home</span>
        <span className="text-[13px] px-[10px] font-semibold mx-[25px] cursor-pointer">Nosotros</span>
        <span className="text-[13px] px-[10px] font-semibold mx-[25px] cursor-pointer">Servicios</span>
        <span className="text-[13px] px-[10px] font-semibold mx-[25px] cursor-pointer">Productos</span>
        <span className="text-[13px] px-[10px] font-semibold mx-[25px] cursor-pointer">Contacto</span>
      </div>
    </div>
  )
}

export default Header