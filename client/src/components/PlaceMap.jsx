import { Marker } from '@react-google-maps/api';
import { useNavigate } from 'react-router-dom';
import GenericMap from './GenericMap';

const PlaceMap = ({ places, onMove }) => {
  const navigate = useNavigate();

  return (
    <GenericMap onMove={onMove}>
      {places.map((place) => (
        <Marker
          key={place._id}
          position={{
            lat: place.position.coordinates[1],
            lng: place.position.coordinates[0]
          }}
          onClick={() => navigate(`/place/${place._id}`)}
        />
      ))}
    </GenericMap>
  );
};

export default PlaceMap;
