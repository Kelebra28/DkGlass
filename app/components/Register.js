import Button from "./common/Button"

const Register = ({handleContactPopUp}) => (
  <div className="bg-dk-bg-gray px-[55px] pt-[28px] pb-[42px] flex flex-col">
    <p className="text-[15px]">Desarrollamos Products únicos basado en tendencias actuales a las que en el futuro no pasaran ese atractivo visual que imponen de inicio.</p>
    <div className="flex justify-center mt-[25px]">
      <Button text="Contact us" onClick={handleContactPopUp}/>
    </div>
  </div>
)

export default Register