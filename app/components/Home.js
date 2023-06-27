'use client'
import { useState } from "react"
import AboutUs from "./AboutUs"
import AnualSales from "./AnualSales"
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
      <Header />
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
        {/* <AnualSales /> */}
        <Map />
      </div>
      <div className="lg:hidden">
        <Testimonials />
      </div>
      <Footer />
    </>
  )
}

export default Home