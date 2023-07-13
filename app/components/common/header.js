'use client'
import { useState } from 'react'
import Image from "next/image"
import { useContext } from 'react'
import Link from 'next/link'

import { LanguageContext } from '../../context/languageContext';

import SideBar from "./SideBar"

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const { language, toggleLanguage, translations } = useContext(LanguageContext);
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
          <span className="text-[13px] px-[10px] font-semibold  mx-[25px] cursor-pointer">{translations.navBar.home}</span>
        </Link>
        <Link href='/About Us'>
          <span className="text-[13px] px-[10px] font-semibold mx-[25px] cursor-pointer">{translations.navBar.about}</span>
        </Link>
        <Link href='#services'>
          <span className="text-[13px] px-[10px] font-semibold mx-[25px] cursor-pointer">{translations.navBar.service}</span>
        </Link>
        <Link href='#products' scroll>
          <span className="text-[13px] px-[10px] font-semibold mx-[25px] cursor-pointer">{translations.navBar.products}</span>
        </Link>
        <Link href='#contact'>
          <span className="text-[13px] px-[10px] font-semibold mx-[25px] cursor-pointer">{translations.navBar.contact}</span>
        </Link>
        <span onClick={() => toggleLanguage()} className="text-[13px] px-[10px] font-semibold mx-[25px] cursor-pointer">{translations.navBar.language}</span>
      </div>
    </div>
  )
}

export default Header