import ZoomableImg from "./common/ZoomImg";

const WhyUs = () => (
  <div className="flex mb-[100px] whyChose hidden md:flex">
    <div className="w-[100%] lg:w-[50%]  flex justify-between">
      <div className="w-[70%] h-[520px] relative">
        <ZoomableImg src="/bath.png" alt="dk glass bath" zoom={150}  />
      </div>
    </div>
    <div className="w-[50%] border-l-[60px] border-l-dk-secondary p-[26px] pr-[76px] hidden lg:block chosse">
      <span className="text-[22px] font-medium">Why choose us?</span>
      <p className=" text-[14px] text-center mt-[54px]">
        In our company, our main objective is to achieve continuous and
        sustainable growth. We strive to provide quality Services that not only
        meet the needs of our clients, but also have a positive impact on our
        natural environment. We strongly believe in the importance of preserving
        and protecting the environment for future generations. That's why we
        work hard to reduce our environmental impact and encourage sustainable
        practices at all of our operations. Our dream is to offer our Services
        throughout the national territory, taking our vision of a greener and
        bluer future to every corner of the country. We strive to build a
        company that is not only profitable, but also has a bigger purpose: to
        create a more sustainable and livable world for all. We are committed to
        our mission and we work tirelessly to achieve our goals. We take pride
        in knowing that with every step we take, we are making a positive
        difference in the world and creating a better future for all.
      </p>
    </div>
  </div>
);

export default WhyUs;
