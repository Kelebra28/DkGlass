import Image from 'next/image';

interface LazyImageProps {
    src: string,
    alt: string,
    style?: object,
    className?:string
}

const LazyImage = ({ src, alt, style, className } : LazyImageProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      style={style}
      fill
    />
  );
};

export default LazyImage;