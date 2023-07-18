import Button from "./common/Button"
import Link from "next/link"
const Services = ({handleContactPopUp}) => (
  <div id="services" className="lg:ml-[100px]">
    <div className="border-l-4 border-dk-secondary h-[52px] flex items-center mt-[40px] ml-[57px] pl-[21px] lg:ml-[17px]">
      <span className=" text-[36px]">Services</span>
    </div>
    <div className="pt-[90px] pl-[70px] flex flex-col">
      <Link href="/services/wholesaler" className="mb-[25px] hover-list">
        <span className="cursor-pointer font-medium text-dk-main text-[20px] mb-[25px] hover-item">{`> Wholesaler`}</span>
      </Link>
      <Link href="/services/floatglass" className="mb-[25px] hover-list">
        <span className="cursor-pointer font-medium text-dk-main text-[20px] mb-[25px] hover-item">{`> Float Glass`}</span>
      </Link>
      <Link href="/services/tempereglass" className="mb-[25px] hover-list">
        <span className="cursor-pointer font-medium text-dk-main text-[20px] mb-[25px] hover-item">{`> Tempered Glass`}</span>
      </Link>
      <Link href="/services/hardware" className="mb-[25px] hover-list">
        <span className="cursor-pointer font-medium text-dk-main text-[20px] mb-[25px] hover-item">{`> Hardware Supplies `}</span>
      </Link>
      {/* <Link href="/template" className="mb-[25px] hover-list">
        <span className="cursor-pointer font-medium text-dk-main text-[20px] mb-[25px]">{`>Temperados de vidrio`}</span>
      </Link>
      <Link href="/template" className="mb-[25px] hover-list">
        <span className="cursor-pointer font-medium text-dk-main text-[20px] mb-[25px]">{`>Temperados de vidrio`}</span>
      </Link>
      <Link href="/template" className="mb-[25px] hover-list">
        <span className="cursor-pointer font-medium text-dk-main text-[20px] mb-[25px]">{`>Temperados de vidrio`}</span>
      </Link>
      <Link href="/template" className="mb-[25px] hover-list">
        <span className="cursor-pointer font-medium text-dk-main text-[20px] mb-[25px]">{`>Temperados de vidrio`}</span>
      </Link>
      <Link href="/template" className="mb-[25px] hover-list">
        <span className="cursor-pointer font-medium text-dk-main text-[20px] mb-[25px]">{`>Temperados de vidrio`}</span>
      </Link> */}
    </div>
    <div className=" flex justify-center mb-[50px]">
      <Button text="Contact us" onClick={handleContactPopUp} />
    </div>
  </div>
)

export default Services