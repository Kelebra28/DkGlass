
'use client'

import LazyImage from "./LazyImages";

export const Gallery = () => {

    return (
        <div className="w-[60vw] h-[75vh] flex justify-around items-center flex-col galleryContainer">
            <p className=" w-[80%] text-[30px]">PRODUCT GALLERY</p>
            <div className="w-[80%] h-[80%] overflow-auto">
                <div className="h-[1000px] w-full flex flex-wrap content-around justify-around scroll-smooth">
                    <div className="galletItem" >
                        <LazyImage
                            className="galleryPhoto"
                            src="/hardware/hardware0.png"
                            alt="Dk glass Hardware"
                        />
                    </div>
                    <div className="galletItem" >
                        <LazyImage
                            className="galleryPhoto"
                            src="/hardware/hardware1.png"
                            alt="Dk glass Hardware"
                        />
                    </div>
                    <div className="galletItem" >
                        <LazyImage
                            className="galleryPhoto"
                            src="/hardware/hardware2.png"
                            alt="Dk glass Hardware"
                        />
                    </div>
                    <div className="galletItem" >
                        <LazyImage
                            className="galleryPhoto"
                            src="/hardware/hardware3.png"
                            alt="Dk glass Hardware"
                        />
                    </div>
                    <div className="galletItem" >
                        <LazyImage
                            className="galleryPhoto"
                            src="/hardware/hardware4.png"
                            alt="Dk glass Hardware"
                        />
                    </div>
                    <div className="galletItem" >
                        <LazyImage
                            className="galleryPhoto"
                            src="/hardware/hardware5.png"
                            alt="Dk glass Hardware"
                        />
                    </div>
                    <div className="galletItem" >
                        <LazyImage
                            className="galleryPhoto"
                            src="/hardware/hardware6.png"
                            alt="Dk glass Hardware"
                        />
                    </div>
                    <div className="galletItem" >
                        <LazyImage
                            className="galleryPhoto"
                            src="/hardware/hardware7.png"
                            alt="Dk glass Hardware"
                        />
                    </div>
                    <div className="galletItem" >
                        <LazyImage
                            className="galleryPhoto"
                            src="/hardware/hardware8.png"
                            alt="Dk glass Hardware"
                        />
                    </div>
                    <div className="galletItem" >
                        <LazyImage
                            className="galleryPhoto"
                            src="/hardware/hardware9.png"
                            alt="Dk glass Hardware"
                        />
                    </div>
                    <div className="galletItem" >
                        <LazyImage
                            className="galleryPhoto"
                            src="/hardware/hardware10.png"
                            alt="Dk glass Hardware"
                        />
                    </div>
                    <div className="galletItem" >
                        <LazyImage
                            className="galleryPhoto"
                            src="/hardware/hardware11.png"
                            alt="Dk glass Hardware"
                        />
                    </div>
                </div>
            </div>
        </div>
    )

}