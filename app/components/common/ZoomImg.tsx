import ImageZoom from 'react-image-zooom';
interface ZoomableImgProps {
  src: string;
  alt: string;
  zoom?: number;
  className?: string;
}
function ZoomableImg({ src, alt, zoom = 100, className }: ZoomableImgProps) {
  return (
    <ImageZoom className={className} src={src} alt={alt} zoom={zoom} />
  );
}

export default ZoomableImg;