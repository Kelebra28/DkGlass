'use client'
import { useEffect, useState } from "react"
import Header from "../components/common/header"
import ZoomableImage from "../components/common/ZoomImg";
import Footer from "../components/Footer"
import EmailPopUp from "../components/EmailPopUp"
import RandomImages from '../components/RandomBack'
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import CarouselSimpleCard from "../components/common/CarouselSimpleCard"

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1.5
  }
};


const AboutUs = () => {
  const [contactPopActive, setContactPopActive] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const handleContactPopUp = () => {
    setContactPopActive(!contactPopActive)
  }

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <>
      {
        contactPopActive && <EmailPopUp handleContactPopUp={handleContactPopUp} />
      }
      <RandomImages zIndex={-1} />
      <div className="logoRepeat">
        <Header handleContactPopUp={handleContactPopUp} />
        <div className="relative mt-[120px]">
          <div className="flex flex-col lg:flex-row items-center justify-center">
            {isClient && (
              <>
                <video width="400" controls>
                  <source src="/videos/video1.mp4" type="video/mp4" />
                </video>
                <video width="400" controls>
                  <source src="/videos/video2.mp4" type="video/mp4" />
                </video>
                <video width="400" controls>
                  <source src="/videos/video3.mp4" type="video/mp4" />
                </video>
              </>
            )}
          </div>
          <div className="flex justify-end mt-[100px]">
          </div>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default AboutUs