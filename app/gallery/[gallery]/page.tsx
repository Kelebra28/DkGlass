'use client'
import { useState, useEffect } from "react"
import { useRouter, useParams } from "next/navigation";
import Button from "../../components/common/Button";
import Header from "../../components/common/header";
import SocialMedia from "../../components/common/SocialMedia";
import EmailPopUp from "../../components/EmailPopUp";
import CarouselGallery from "./components/CarouselGallery";
import {
    Storefront,
    ImpactStorefront,
    OfficePartion,
} from "../../data/ComercialData";
import {
    PatioDoor,
    PatioEnclosure,
    SlidingGlass,
    ShowerGlass,
    Mirrors,
    RailingStair,
} from "../../data/RecidentialData";

export default function GalleryPage() {
    const [contactPopActive, setContactPopActive] = useState(false)
    const [galleryData, setGalleryData] = useState({ galleryTitle: '', galleryDescription: '' })
    const handleContactPopUp = () => {
        setContactPopActive(!contactPopActive)
    }

    const router = useRouter();
    const { gallery } = useParams();

    useEffect(() => {

        switch (gallery) {
            case 'store-front': {
                setGalleryData(Storefront);
                break;
            }
            case 'impact-store-front': {
                setGalleryData(ImpactStorefront);
                break;
            }
            case 'office-partition': {
                setGalleryData(OfficePartion);
                break;
            }
            case 'patio-door': {
                setGalleryData(PatioDoor);
                break;
            }
            case 'patio-enclosure': {
                setGalleryData(PatioEnclosure);
                break;
            }
            case 'sliding-glass': {
                setGalleryData(SlidingGlass);
                break;
            }
            case 'shower-glass': {
                setGalleryData(ShowerGlass);
                break;
            }
            case 'mirrors': {
                setGalleryData(Mirrors);
                break;
            }
            case 'railing-stair': {
                setGalleryData(RailingStair);
                break;
            }
            default: {
                router.push('/')
                break;
            }
        }


    }, [gallery]);
    return (
        <>
            <Header handleContactPopUp={handleContactPopUp} />
            {
                contactPopActive && <EmailPopUp handleContactPopUp={handleContactPopUp} />
            }
            <SocialMedia />
            <div className=" mt-[90px] max-h-max">
                <div className="flex flex-col-reverse lg:flex-row">
                    <div className="w-[100%] lg:w-[60%] flex justify-center items-center border-t-dk-main border-t-[20px] pt-[14px] lg:pt-0 lg:border-none">
                        <div className="w-[90%]  h-[630px]  relative">

                            <CarouselGallery gallery={gallery} />

                        </div>
                    </div>
                    <div className="w-[100%] lg:w-[40%]  h-[100%] mb-[60px] lg:mb-0">
                        <div className="block h-[29px] bg-dk-main" />
                        <div className="px-[30px] lg:px-[80px] mt-[20px] flex flex-col">
                            <span className="text-[25px] font-medium">{galleryData.galleryTitle}</span>
                            <p className="mt-[20px] mb-[30px] text-[18px] font-medium">{galleryData.galleryDescription}</p>
                            <div className="lg:ml-[40px] lg:mb-[50px] xs:mb-[10px] flex justify-center lg:block" >
                                <Button text="Contact us" onClick={handleContactPopUp} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
