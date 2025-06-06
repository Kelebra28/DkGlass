import React, { useRef, useEffect } from "react";
import GoogleMapReact from "google-map-react";

const Marker = () => {
  return (
    <>
      <div
        style={{
          position: "relative",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            position: "relative",
            backgroundColor: "red",
            borderRadius: "50%",
            width: "24px",
            height: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
          }}
        >
          <div
            style={{
              position: "relative",
              backgroundColor: "#fff",
              borderRadius: "50%",
              width: "12px",
              height: "12px",
            }}
            className="marketmap"
          />
          <a
            href="https://www.google.com/maps/place/DK+Glass+%26+Velasco/@29.874316,-95.5957923,17z/data=!3m1!4b1!4m6!3m5!1s0x8640d1e6268e7287:0x4b3a9a82edd79ea3!8m2!3d29.8743117!4d-95.5911664!16s%2Fg%2F11tp9zjn41?entry=ttu"
            target="_blank"
            style={{ fontWeight: "bold", textAlign: "center" }}
          >
            DK Glass
          </a>
        </div>
      </div>
      <div className="map-direction-container">
        <a
          href="https://www.google.com/maps/place/DK+Glass+%26+Velasco/@29.874316,-95.5957923,17z/data=!3m1!4b1!4m6!3m5!1s0x8640d1e6268e7287:0x4b3a9a82edd79ea3!8m2!3d29.8743117!4d-95.5911664!16s%2Fg%2F11tp9zjn41?entry=ttu"
          className="relative z-10 right-0 map-direction"
          target="_blank"
        >
          11955-A Farm to Market Rd 529, Houston, TX 77041
        </a>
      </div>
    </>
  );
};

const Map = () => {
  const mapRef = useRef(null);

  const handleMapLoad = (map) => {
    // Get access to the map container element
    if (map) {
      const mapContainer = map.getDiv();
      // Attach your passive event listeners to mapContainer here
      mapContainer.addEventListener("scroll", handleScroll, { passive: true });
    }
  };

  const defaultProps = {
    center: {
      lat: 29.874477412065097,
      lng: -95.5908004576726,
    },
    zoom: 15,
  };

  useEffect(() => {
    return () => {
      // Clean up event listener when the component unmounts
      if (mapRef.current) {
        const mapContainer = mapRef.current.getDiv();
        // mapContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);
  return (
    <div>
      <div
        style={{ height: "500px", width: "100%" }}
        className="lg:px-[80px] m-auto pb-[20px]"
      >
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyA9rvmQ7UpxvMAKVfst7Exzj5-h7QDV8UM" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          onLoad={handleMapLoad}
          ref={mapRef}
        >
          <Marker
            lat={29.874477412065097}
            lng={-95.59080045767269}
            text="Velazco Glass"
          />
        </GoogleMapReact>
      </div>
      <div className="bg-dk-secondary h-[40px]" />
    </div>
  );
};

export default Map;
