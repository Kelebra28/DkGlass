import LazyImage from "./LazyImages";

const SocialMedia = () => (
  <div className="w-[68px] box-border bg-dk-secondary z-20 h-[890px] absolute top-0 right-0 hidden lg:flex flex-col justify-between">
    <div className="pt-[100px] pl-[15px]">
      <div className="w-[30px] h-[30px] my-[20px] relative cursor-pointer">
        <span className="relative left-2.5 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75">
            <span className="bg-[#fffffF] rounded-full h-[5px] w-[5px]"></span>
          </span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
        </span>
        <a
          href="https://www.facebook.com/profile.php?id=100087137256154"
          target="_blank"
        >
          <LazyImage
            src="/icons/facebook-white.svg"
            alt="Dk glass Icon Facebook"
          />
        </a>
      </div>
      {/* <div className="w-[26px] h-[26px] my-[20px] relative cursor-pointer">
        <LazyImage
          src="/icons/LinkedIn-white.svg"
          alt="Dk glass Icon LinkedIn"
        />
      </div> */}
      {/* <div className="w-[26px] h-[26px] my-[20px] relative cursor-pointer">
        <LazyImage
          src="/icons/twiter-white.svg"
          alt="Dk glass Icon twiter"
        />
      </div> */}
      <div className="w-[30px] h-[30px] my-[20px] relative cursor-pointer">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75">
            <span className="bg-[#fffffF] rounded-full h-[5px] w-[5px]"></span>
          </span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
        </span>
        <a href="https://www.instagram.com/_dkglassshop/" target="_blank">
          <LazyImage
            src="/icons/instagram-white.svg"
            alt="Dk glass Icon instagram"
          />
        </a>
      </div>
      <div className="w-[30px] h-[30px] my-[20px] relative cursor-pointer">
        <span className="relative left-4 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75">
            <span className="bg-[#fffffF] rounded-full h-[5px] w-[5px]"></span>
          </span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
        </span>
        <a target="_blank" href="https://www.tiktok.com/@dkglass_velasco">
          <LazyImage
            src="/icons/tik-tok-white.svg"
            alt="Dk glass Icon tik-tok"
          />
        </a>
      </div>
      {/* <div className="w-[26px] h-[26px] my-[20px] relative cursor-pointer">
        <LazyImage
          src="/icons/youtube-white.svg"
          alt="Dk glass Icon youtube"
        />
      </div> */}
    </div>
    {/* <div className="bg-[#255429] mb-[250px] w-[67px] h-[67px] rounded-lg relative flex justify-center items-center cursor-pointer">
      <div className="w-[40px] h-[40px] relative">
        <LazyImage
          src="/icons/message-white.svg"
          alt="Dk glass Icon message"
        />
      </div>
    </div> */}
  </div>
);

export default SocialMedia;
