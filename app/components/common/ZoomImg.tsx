import ImageZoom from 'react-image-zooom';

function ZoomableImg({src, alt, zoom = 100 , className}) {
  return (
      <ImageZoom className={className} src={src} alt={alt} zoom={zoom} />
  );
}

export default ZoomableImg;