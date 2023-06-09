'use client'
import { useState } from 'react'
import Image from "next/image"
import SideBar from "./SideBar"
import Link from 'next/link'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const handleClickMenu = () => {
    setShowMenu(!showMenu)
  }
  return (
    <div className=" border-dk-secondary bg-[white]  lg:bg-[rgba(255,255,255,.8)] flex pt-[20px] pl-[20px] fixed z-10 left-0 right-0 top-0 justify-center lg:justify-start lg:pb-[17px]">
      {
        showMenu && <SideBar handleClickMenu={handleClickMenu}/>
      }
      <div className="flex justify-center lg:w-4/12 w-12/12  lg:justify-start">
        <div onClick={handleClickMenu} className="w-[29px] h-[54px] absolute left-[20px] lg:relative lg:left-0 lg:mr-[30px] cursor-pointer">
          <Image
            src="/icons/menu.svg"
            alt="Logo"
            layout="fill"
          />
        </div>
        <Link href="/">
          <div className="w-[132px] h-[54px] relative ">
            <Image
              src="/logo-full.svg"
              alt="menu icon"
              layout="fill"
            />
          </div>
        </Link>
      </div>
      <div className="hidden lg:flex  w-8/12 pt-[20px]">
        <Link href='/'>
          <span className="text-[13px] px-[10px] font-semibold  mx-[25px] cursor-pointer">Home</span>
        </Link>
        <Link href="/nosotros">
          <span className="text-[13px] px-[10px] font-semibold mx-[25px] cursor-pointer">About Us</span>
        </Link>
        <Link href='#services'>
          <span className="text-[13px] px-[10px] font-semibold mx-[25px] cursor-pointer"> Services</span>
        </Link>
        <Link href='#products' scroll>
          <span className="text-[13px] px-[10px] font-semibold mx-[25px] cursor-pointer">Products</span>
        </Link>
        <Link href='#contact'>
          <span className="text-[13px] px-[10px] font-semibold mx-[25px] cursor-pointer">Contact us</span>
        </Link>
      </div>
    </div>
  )
}

export default Header