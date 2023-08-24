import Button from "./common/Button"

const Register = ({handleContactPopUp}) => (
  <div className="bg-dk-bg-gray px-[55px] pt-[28px] pb-[42px] flex flex-col">
    <p className="text-[15px]">We develop unique Products based on current trends that in the future will not pass that visual appeal that they impose at the beginning.</p>
    <div className="flex justify-center mt-[25px]">
      <Button text="Contact us" onClick={handleContactPopUp}/>
    </div>
  </div>
)

export default Register