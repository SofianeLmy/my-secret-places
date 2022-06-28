import React, { useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

/*const center = {
    lat: 40.00,
    lng: -9.25
  };*/

const MapInput = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDxPQqy7ovGbO0l2YjeGmKaI8jIvEK3Qfo",
  });

  const [marker, setMarker] = useState(null);

  const handleMapClick = (event) => {
    // console.log(event);
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    console.log(lat, lng);
    setMarker({ lat, lng });
  };

  return (
    (isLoaded && (
      <GoogleMap
        mapContainerStyle={{ width: "800px", height: "500px" }}
        center={{ lat: 30, lng: 12 }}
        zoom={1.8}
        onClick={handleMapClick}
      >
        {marker && <Marker position={marker} />}
      </GoogleMap>
    )) || <></>
  );
};

export default MapInput;
