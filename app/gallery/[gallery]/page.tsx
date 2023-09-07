'use client'
import { useState } from "react"
import LazyImage from "../../components/common/LazyImages";
import Button from "../../components/common/Button";
import Header from "../../components/common/header";
import SocialMedia from "../../components/common/SocialMedia";
import Footer from "../../components/Footer";
import EmailPopUp from "../../components/EmailPopUp";
import RandomImages from "../../components/RandomBack";
import CarouselImagesZoom from "./components/CarouselImagesZoom";

export default function GalleryPage({ galleryTitle, galleryDescription }) {
    const [contactPopActive, setContactPopActive] = useState(false)
    const handleContactPopUp = () => {
        setContactPopActive(!contactPopActive)
    }
    return (
        <div className="max-h-fit">
            <RandomImages />
            <Header handleContactPopUp={handleContactPopUp} />
            {
                contactPopActive && <EmailPopUp handleContactPopUp={handleContactPopUp} />
            }
            <SocialMedia />
            <div className=" mt-[90px] max-h-max">
                <div className="flex flex-col-reverse lg:flex-row">
                    <div className="w-[100%] lg:w-[60%] flex justify-center border-t-dk-main border-t-[20px] pt-[14px] lg:pt-0 lg:border-none">
                        <div className="w-[90%]  h-[630px] lg:h-[100%] relative">
                            {/* <LazyImage
                                src="/mirror/mirror3.jpg"
                                alt="Dk glass mirror3"
                            /> */}
                            <CarouselImagesZoom />

                        </div>
                    </div>
                    <div className="w-[100%] lg:w-[40%]  h-[100%] mb-[60px] lg:mb-0">
                        <div className="block h-[29px] bg-dk-main" />
                        <div className="px-[30px] lg:px-[80px] mt-[20px] flex flex-col">
                            <span className="text-[25px] font-medium">{galleryTitle}</span>
                            <p className="mt-[20px] mb-[30px] text-[18px] font-medium">{galleryDescription}</p>
                            <div className="ml-[40px] mb-[50px]">
                                <Button text="Contact us" onClick={handleContactPopUp} />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}
