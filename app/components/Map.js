import GoogleMapReact from 'google-map-react'

const  Marker = () => {
  return (
    <div
      style={{
        color: 'white',
        background: 'red',
        padding: '5px 5px',
        display: 'inline-flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        transform: 'translate(-50%, -50%)'
      }}
    >
      DK Glass
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

