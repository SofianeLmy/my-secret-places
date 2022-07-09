import { listAllPlaceData } from '../services/place';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PlaceMap from '../components/PlaceMap';
import './HomePage.scss';
import React from 'react';

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
      <div>
        <h1> . . . My secret places </h1>
        <div className="HP-container">
          <PlaceMap places={places} />

          <div className="multiple-image-list">
            {places.slice(0, 10).map((place) => {
              return (
                place.pictures &&
                place.pictures.map((image, index) => (
                  <div key={image} className="multiple-image-item">
                    <Link to={`/place/${place._id}`}>
                      <img src={image} alt={`#${index}`} />
                    </Link>
                  </div>
                ))
              );
            })}
          </div>
        </div>
      </div>
      <div className="footer">
        <p>
          © Brought to you by Inger, Sina and Sofiane | Web-Dev Bootcamp |
          Ironhack Jan-22
          <br />
          <br />
          With the helpful collaboration of Stefano, Ana and José.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
