import { Marker } from '@react-google-maps/api';

import GenericMap from './GenericMap';

const PlaceInputMap = ({ position, center, onPositionChange }) => {
  const handlePlaceLocationSetting = (event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    onPositionChange({
      type: 'Point',
      coordinates: [lng, lat]
    });
  };

  return (
    <GenericMap center={center} onClick={handlePlaceLocationSetting}>
      {position && (
        <Marker
          position={{
            lat: position.coordinates[1],
            lng: position.coordinates[0]
          }}
        />
      )}
    </GenericMap>
  );
};

export default PlaceInputMap;
