import { listAllPlaceData } from '../services/place';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PlaceMap from '../components/PlaceMap';

const HomePage = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    listAllPlaceData().then((data) => {
      console.log(data);
      setPlaces(data.places);
    });
  }, []);

  return (
    <div>
      <h1>My secret places</h1>

      <h2>Some of the latest places added</h2>

      <PlaceMap places={places} />

      {/* <GenericMap>
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
      </GenericMap> */}
      {places.map((place) => {
        return (
          place.pictures &&
          place.pictures.map((image, index) => (
            <div key={image} className="multiple-image-item">
              <Link to={`/place/${place._id}`}>
                <img src={image} alt={`#${index}`} width="200px" />
              </Link>
            </div>
          ))
        );
      })}
    </div>
  );
};

export default HomePage;
