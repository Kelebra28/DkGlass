import GoogleMapReact from 'google-map-react'
import Image from 'next/image';

const  Marker = () => {
  return (
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
      />
      <span style={{ fontWeight: 'bold', textAlign: 'center' }}>DK Glass</span>
    </div>
  </div>
  
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
        <div className='bg-dk-secondary h-[40px]' />
    </div>
  )
}

export default Map

