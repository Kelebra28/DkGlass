"use client";
import { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import Image from "next/image";
import ZoomableImg from "../../../components/common/ZoomImg";

import {
    Storefront,
    ImpactStorefront,
    OfficePartion,
} from "../../../data/galleryDataComercial";
import {
    PatioDoor,
    PatioEnclosure,
    SlidingGlass,
    ShowerGlass,
    Mirrors,
    RailingStair,
} from "../../../data/galleryDataRecidencial";

function CarouselGallery(props: { gallery: string }) {
    const [galleryData, setGalleryData] = useState(Storefront);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        switch (props.gallery) {
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

                break;
            }
        }
        setLoading(false);
    }, [props.gallery]);
    return (
        <>{loading ? (
            <div className="text-center text-blue-400">Loading...</div>
        ) : (
            <Carousel
                axis="horizontal"
                showStatus={false}
                className="relative"
                renderArrowPrev={(clickHandler, hasPrev) => {
                    return (
                        <div
                            className={`${hasPrev ? "absolute" : "hidden"
                                } top-0 bottom-0 left-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
                            onClick={clickHandler}
                        >
                            <FaArrowLeft className="w-9 h-9 text-white " />
                        </div>
                    );
                }}
                renderArrowNext={(clickHandler, hasNext) => {
                    return (
                        <div
                            className={`${hasNext ? "absolute" : "hidden"
                                } top-0 bottom-0 right-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
                            onClick={clickHandler}
                        >
                            <FaArrowRight className="w-9 h-9 text-white" />
                        </div>
                    );
                }}
                renderThumbs={() => (
                    galleryData.map((image, index) => (
                        <Image
                            key={index}
                            src={image.url}
                            alt={image.alt}
                            width={150}
                            height={100}
                        />
                    )))}
            >

                {galleryData.map((img, indx) => (
                    <div key={indx} >
                        <ZoomableImg
                            src={img.url}
                            alt={img.alt}
                            zoom={180}
                        />
                        {/* <img src={img.url} alt={img.alt} /> */}
                    </div>))}

            </Carousel>
        )}
        </>
    );
};

export default CarouselGallery;