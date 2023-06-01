import AboutUs from "./AboutUs"
import AnualSales from "./AnualSales"
import Hero from "./Hero"
import Products from "./Products"
import Proyects from "./Proyects"
import Register from "./Register"
import Testimonials from "./Testimonials"
import Footer from "./Footer"
import Header from "./common/header"

const Home = () => (
  <>
    <Header />
    <Hero />
    {/* <Register /> */}
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
      <AnualSales />
    </div>
    <div className="lg:hidden">
      <Testimonials />
    </div>
    <Footer />
  </>
)

export default Home