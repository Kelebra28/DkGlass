"use client";
import { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import Image from "next/image";

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

const CarouselGallery: React.FC = () => {
    const [galleryData, setGalleryData] = useState(Storefront);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        // setGalleryData(formattedData);
        setLoading(false);
    }, []);
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
                renderThumbs = {() => (
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
                        <Image
                            src={img.url}
                            alt={img.alt}
                            width={500}
                            height={500}

                        />
                        {/* <img src={img.url} alt={img.alt} /> */}
                    </div>))}

            </Carousel>
        )}
        </>
    );
};

export default CarouselGallery;