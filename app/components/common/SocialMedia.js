import Image from "next/image"

const SocialMedia = () => (
  <div className="w-[68px] box-border bg-dk-secondary z-20 h-[890px] absolute top-0 right-0 hidden lg:flex flex-col justify-between">
    <div className="pt-[100px] pl-[15px]">
      <div className="w-[26px] h-[26px] my-[20px] relative cursor-pointer">
        <Image
          src="/icons/facebook-white.svg"
          alt="Portada"
          layout="fill"
        />
      </div>
      {/* <div className="w-[26px] h-[26px] my-[20px] relative cursor-pointer">
        <Image
          src="/icons/LinkedIn-white.svg"
          alt="Portada"
          layout="fill"
        />
      </div> */}
      {/* <div className="w-[26px] h-[26px] my-[20px] relative cursor-pointer">
        <Image
          src="/icons/twiter-white.svg"
          alt="Portada"
          layout="fill"
        />
      </div> */}
      <div className="w-[26px] h-[26px] my-[20px] relative cursor-pointer">
        <Image
          src="/icons/instagram-white.svg"
          alt="Portada"
          layout="fill"
        />
      </div>
      <div className="w-[26px] h-[26px] my-[20px] relative cursor-pointer">
        <Image
          src="/icons/youtube-white.svg"
          alt="Portada"
          layout="fill"
        />
      </div>
    </div>
    {/* <div className="bg-[#255429] mb-[250px] w-[67px] h-[67px] rounded-lg relative flex justify-center items-center cursor-pointer">
      <div className="w-[40px] h-[40px] relative">
        <Image
          src="/icons/message-white.svg"
          alt="Portada"
          layout="fill"
        />
      </div>
    </div> */}
  </div>
)

export default SocialMedia