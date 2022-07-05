import { listAllPlaceData } from "../services/place";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Marker } from "@react-google-maps/api";
import GenericMap from "../components/GenericMap";

const PlaceMap = ({ places }) => {
  const [center, setCenter] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    if (places.length) {
      const positions = places.map((place) => {
        return {
          lat: place.position.coordinates[1],
          lng: place.position.coordinates[0],
        };
      });

      const longitudes = positions
        .map((position) => position.lng)
        .filter((value) => typeof value === "number");
      const latitudes = positions
        .map((position) => position.lat)
        .filter((value) => typeof value === "number");

      const maximumLongitude = Math.max(...longitudes);
      const minimumLongitude = Math.min(...longitudes);

      const maximumLatitude = Math.max(...latitudes);
      const minimumLatitude = Math.min(...latitudes);

      const calculatedCenter = {
        lat: (maximumLatitude + minimumLatitude) / 2,
        lng: (maximumLongitude + minimumLongitude) / 2,
      };

      setCenter(calculatedCenter);
    }
  }, [places]);

  return (
    <GenericMap center={center}>
      {places.map((place) => {
        return (
          <>
            <Marker
              position={{
                lat: place.position.coordinates[1],
                lng: place.position.coordinates[0],
              }}
            />
          </>
        );
      })}
    </GenericMap>
  );
};

const HomePage = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    listAllPlaceData().then((data) => {
      console.log(data);
      setPlaces(data.places);
    });
  }, []);

  const navigate = useNavigate();

  const handleMarkerClick = (id) => {
    navigate(`/place/${id}`);
  };

  return (
    <div>
      <h1>My secret places</h1>

      <h2>Some of the latest places added</h2>

      <GenericMap>
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
                  lng: place.position.coordinates[0],
                }}
              />
            </>
          );
        })}
      </GenericMap>
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
