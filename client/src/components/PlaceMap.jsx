import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Marker } from '@react-google-maps/api';
import GenericMap from '../components/GenericMap';

const PlaceMap = ({ places }) => {
  const [center, setCenter] = useState({ lat: 0, lng: 0 });
  const [zoom, setZoom] = useState(3);

  useEffect(() => {
    if (places.length) {
      const positions = places.map((place) => {
        return {
          lat: place.position.coordinates[1],
          lng: place.position.coordinates[0]
        };
      });

      const longitudes = positions
        .map((position) => position.lng)
        .filter((value) => typeof value === 'number');
      const latitudes = positions
        .map((position) => position.lat)
        .filter((value) => typeof value === 'number');

      const maximumLongitude = Math.max(...longitudes);
      const minimumLongitude = Math.min(...longitudes);

      const maximumLatitude = Math.max(...latitudes);
      const minimumLatitude = Math.min(...latitudes);

      const calculatedCenter = {
        lat: (maximumLatitude + minimumLatitude) / 2,
        lng: (maximumLongitude + minimumLongitude) / 2
      };

      setCenter(calculatedCenter);

      const longitudeDelta = maximumLongitude - minimumLongitude;
      const latitudeDelta = maximumLatitude - minimumLatitude;

      const largestDelta = Math.max(longitudeDelta, latitudeDelta);

      if (largestDelta < 1) {
        setZoom(9);
      } else if (largestDelta < 10) {
        setZoom(6);
      } else if (largestDelta < 50) {
        setZoom(4);
      } else {
        setZoom(3);
      }
    }
  }, [places]);

  const navigate = useNavigate();

  const handleMarkerClick = (id) => {
    navigate(`/place/${id}`);
  };

  return (
    <GenericMap center={center} zoom={zoom}>
      {places.map((place) => {
        return (
          <>
            <Marker
              label={place.name}
              onClick={() => {
                handleMarkerClick(place._id);
              }}
              position={{
                lat: place.position.coordinates[1],
                lng: place.position.coordinates[0]
              }}
            />
          </>
        );
      })}
    </GenericMap>
  );
};

export default PlaceMap;
