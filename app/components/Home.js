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
    <Products />
    <Proyects />
    <AnualSales />
    <Testimonials />
    <Footer />
  </>
)

export default Home