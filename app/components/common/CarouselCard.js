import LazyImage from "./LazyImages";

const CarouselCard = ({ text, img }) => (
  <div className="flex flex-col shadow-inner bg-dk-bg-darkgray">
    <div className="h-[237px] relative">
      <LazyImage src={img} alt={text} />
    </div>
    <p className="text-[15px] mt-[13px] px-[30px]">{text}</p>
    <div className="w-[136px] h-[36px] bg-dk-main self-end mt-[18px]" />
  </div>
);

export default CarouselCard;
