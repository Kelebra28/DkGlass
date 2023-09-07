type ButtonType = {
  text: string;
  background?: string;
  border?: any;
  color?: string;
  className?: string;
  onClick?: () => void;

}

const Button = ({ text, background, border, color, onClick, className }: ButtonType) => (
  <div
    onClick={onClick}
    className={`cursor-pointer ${border !== "none" ? "border-2" : ""} ${background === "blue" && "bg-[#065BE7]"
      } ${color === "white" && "text-[white]"
      } border-dk-secondary w-fit rounded-xl px-7 py-3 ${className}`}
  >
    <span className="text-2 font-bold">{text}</span>
  </div>
);

export default Button;
