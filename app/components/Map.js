import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({ text }) => <div>{text}</div>

const Map = () => {
  const defaultProps = {
    center: {
      lat: 19.4270206,
      lng: -99.1701743
    },
    zoom: 11
  }

  return (
    // Important! Always set the container height explicitly
    <div>
      <div style={{ height: '500px', width: '100%' }} className="px-[80px] m-auto pb-[20px]">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCuKlZMUGrpHZf90Jx04v7EyzrJp1ybUeI" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
        <div className='bg-dk-secondary h-[40px]' />
    </div>
  )
}

export default Map