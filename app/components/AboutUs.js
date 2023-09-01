import LazyImage from "./common/LazyImages"

const AboutUs = () => (
  <div className="relative flex pr-[39px]">
    <div className="w-[63px] h-[800px] bg-dk-secondary" />
    <div className="absolute top-[55px] left-0 flex flex-col lg:flex-row">
      <div className="w-[354px] h-[298px] lg:w-[50%] lg:h-[655px] relative zoom">
      <LazyImage src="/residencial/residelcia3.jpg" alt="dk glass residencial glass" />
        {/* <Image
          src="/residencial/residelcia3.jpg"
          alt="Portada"
         
        /> */}
      </div>
      <div className=" relative lg:w-[50%] mt-[60px] ml-[84px] lg:ml-[42px] lg:flex lg:flex-col lg:justify-between abus">
        <div className="border-l-4 border-dk-main h-[52px] flex items-center pl-[21px]">
          <span className="text-dk-main text-[26px]">About Us</span>
        </div>
        <p className="mt-[40px] text-[14px] text-dk-darkgray">Our company offers comprehensive design and installation solutions for custom work for commercial and residential clients. We design, create and install all kinds of products with safety and sustainability top of mind. We offer wholesale sales with competitive prices. As strategic expansion planning, our company has a presence in other territories such as Houston, Odessa and Kentucky. trust your next new construction or renovation project to Dk glass & Velasco and let us crystallize your dreams</p>
        <div className="w-[90%] h-[370px] relative hidden lg:flex zoom">
        <LazyImage src="/team.jpg" alt="dk glass company" />
          {/* <Image
            src="/team.jpg"
            alt="Portada"
           
            className="img_team"
          /> */}
        </div>
      </div>
    </div>
  </div>
)

export default AboutUs
