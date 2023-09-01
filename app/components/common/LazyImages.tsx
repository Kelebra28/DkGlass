import Image from 'next/image';

interface LazyImageProps {
    src: string,
    alt: string,
    style?: object
}

const LazyImage = ({ src, alt, style } : LazyImageProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      loading="lazy"
      style={style}
      fill
    />
  );
};

export default LazyImage;