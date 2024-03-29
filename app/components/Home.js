'use client'
import { useState } from "react"
import AboutUs from "./AboutUs"
import Hero from "./Hero"
import Products from "./Products"
import Proyects from "./Proyects"
import Register from "./Register"
import Testimonials from "./Testimonials"
import Footer from "./Footer"
import Header from "./common/header"
import Services from "./Services"
import EmailPopUp from "./EmailPopUp"
import Map from "./Map"
import WhyUs from "./WhyChoose"

const Home = () => {
  const [contactPopActive, setContactPopActive] = useState(false)
  const handleContactPopUp = () => {
    setContactPopActive(!contactPopActive)
  }
  return (
    <>
    {
      contactPopActive && <EmailPopUp handleContactPopUp={handleContactPopUp}/>
    }
      <Header handleContactPopUp={handleContactPopUp} />
      <Hero handleContactPopUp={handleContactPopUp}/>
      <div className="lg:hidden">
        <Register handleContactPopUp={handleContactPopUp} />
      </div>
      <AboutUs />
      <div className="hidden lg:block">
        <Proyects />
        <Products />
      </div>
      <div className="lg:hidden">
        <Products />
        <Proyects />
      </div>
      <div className="">
        <Services handleContactPopUp={handleContactPopUp}/>
      </div>
      <div className="">
        <WhyUs />
        <Map />
      </div>
      <div className="">
        <Testimonials />
      </div>
      <Footer />
    </>
  )
}

export default Home