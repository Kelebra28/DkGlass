"use client";
import { useState } from "react";
import LazyImage from "./LazyImages";
import SideBar from "./SideBar";
import Link from "next/link";

const Header = ({ handleContactPopUp }) => {
  const [showMenu, setShowMenu] = useState(false);
  const handleClickMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className=" border-dk-secondary bg-[white]  lg:bg-[rgba(255,255,255,.8)] flex pt-[20px] pl-[20px] fixed z-10 left-0 right-0 top-0 justify-center lg:justify-start lg:pb-[17px]">
      {showMenu && <SideBar handleClickMenu={handleClickMenu} />}
      <div className="flex justify-center lg:w-4/12 w-12/12  lg:justify-start">
        <div
          onClick={handleClickMenu}
          className="w-[29px] h-[54px] absolute left-[20px] lg:relative lg:left-0 lg:mr-[30px] cursor-pointer"
        >
          <LazyImage
            className="loggo"
            src="/icons/menu.svg"
            alt="Dk glass Menu Icon"
          />
        </div>
        <Link href="/">
          <div className="w-[200px] h-[54px] relative ">
            <LazyImage
              className="logo"
              src="/logo-full.svg"
              alt="Dk glass Logo Icon"
            />
          </div>
        </Link>
        <div className="iframeLogo">
          <a href="https://www.bbb.org/us/tx/jersey-village/profile/glass-company/dk-glass-velasco-0915-90070189#sealclick" target="_blank">
             <img src="https://seal-houston.bbb.org/gen-seals/img.png?bid=90070189&w=280&h=80&color=blue&v=2&chk=49C2E82AAF" />
          </a>
        </div>
      </div>
      <div className="hidden lg:flex  w-8/12 pt-[20px]">
        <Link className="hover_header" href="/">
          <span className="text-[17px] px-[10px] font-semibold  mx-[25px] cursor-pointer">
            Home
          </span>
        </Link>
        <Link className="hover_header" href="/about-us">
          <span className="text-[17px] px-[10px] font-semibold mx-[25px] cursor-pointer">
            About Us
          </span>
        </Link>
        <Link
          className="hover_header smooth-scroll"
          href="#residencial"
          scroll={false}
        >
          <span className="text-[17px] px-[10px] font-semibold mx-[25px] cursor-pointer">
            Services
          </span>
        </Link>
        <Link
          className="hover_header smooth-scroll"
          href="#services"
          scroll={false}
        >
          <span className="text-[17px] px-[10px] font-semibold mx-[25px] cursor-pointer">
            Products
          </span>
        </Link>
        <div className="animate-bounce">
          <div className="hover_header" onClick={handleContactPopUp}>
            <span className="text-[17px] px-[10px] font-semibold mx-[25px] cursor-pointer">
              Contact us
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
