import { Marker } from '@react-google-maps/api';

import GenericMap from './GenericMap';

const PlaceInputMap = ({ position, onPositionChange }) => {
  const handlePlaceLocationSetting = (event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    onPositionChange({
      type: 'Point',
      coordinates: [lng, lat]
    });
    //there should be something to fix the position of the map around the place.
  };

  return (
    <GenericMap onClick={handlePlaceLocationSetting}>
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
