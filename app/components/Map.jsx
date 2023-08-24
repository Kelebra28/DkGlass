import GoogleMapReact from 'google-map-react'
import Image from 'next/image';

const  Marker = () => {
  return (
    <>
    <div
    style={{
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
      borderRadius: '50%',
      width: '40px',
      height: '40px',
      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
      cursor: 'pointer',
    }}
  >
    <div
      style={{
        position: 'relative',
        backgroundColor: 'red',
        borderRadius: '50%',
        width: '24px',
        height: '24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
      }}
    >
      <div
        style={{
          position: 'relative',
          backgroundColor: '#fff',
          borderRadius: '50%',
          width: '12px',
          height: '12px',
        }}
        className='marketmap'
        />
      <a  href='https://www.google.com/maps/place/11955+FM+529,+Houston,+TX+77084,+USA/@29.8791644,-95.63306,17z/data=!3m1!4b1!4m5!3m4!1s0x8640d0c7bae408c9:0x8b57ad4d8988c30c!8m2!3d29.8791644!4d-95.63306?entry=ttu' target='_blank' style={{ fontWeight: 'bold', textAlign: 'center' }}>DK Glass</a>
    </div>
  </div>
  <div className='map-direction-container'>

  <a href='https://www.google.com/maps/place/11955+FM+529,+Houston,+TX+77084,+USA/@29.8791644,-95.63306,17z/data=!3m1!4b1!4m5!3m4!1s0x8640d0c7bae408c9:0x8b57ad4d8988c30c!8m2!3d29.8791644!4d-95.63306?entry=ttu' className='relative z-10 right-0 map-direction' target='_blank'>11955 A Farm to Market 529 Rd Houston Tx 77041</a>
  </div>
  </>
  
  );
    }

const Map = () => {
  const defaultProps = {
    center: {
      lat: 29.874477412065097,
      lng: -95.5908004576726
    },
    zoom: 15
  }

  return (
    <div>
      <div style={{ height: '500px', width: '100%' }} className="lg:px-[80px] m-auto pb-[20px]">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyA9rvmQ7UpxvMAKVfst7Exzj5-h7QDV8UM" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <Marker
            lat={29.874477412065097}
            lng={-95.59080045767269}
            text="Velazco Glass"
          />
        </GoogleMapReact>
      </div>
        <a className='hidden md:block' href="https://www.google.com/maps/place/11955+FM+529,+Houston,+TX+77084,+USA/@29.8791644,-95.63306,17z/data=!3m1!4b1!4m5!3m4!1s0x8640d0c7bae408c9:0x8b57ad4d8988c30c!8m2!3d29.8791644!4d-95.63306?entry=ttu">11955 A Farm to Market 529 Rd Houston Tx 77041</a>
        <div className='bg-dk-secondary h-[40px]' />
    </div>
  )
}

export default Map

