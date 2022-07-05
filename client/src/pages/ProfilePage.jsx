import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { profileLoad } from '../services/profile';
import GenericMap from '../components/GenericMap';
import { Marker } from '@react-google-maps/api';
import './ProfilePage.scss';

const ProfilePage = () => {
  const [profile, setProfile] = useState(null);
  const [places, setPlaces] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    profileLoad(id).then((data) => {
      setProfile(data.profile);
      setPlaces(data.places);
    });
    //profilePlacesLoad(id).then((places) => setPlaces(places));
  }, [id]);

  return (
    <div className="profile">
      {profile && (
        <>
          <h1>{profile.name}</h1>
          <img
            className="profilePic"
            src={profile.picture}
            alt={profile.name}
            width="200px"
          />
        </>
      )}
      <GenericMap>
        {places.map((place) => {
          return (
            <>
              <Marker
                position={{
                  lat: place.position.coordinates[1],
                  lng: place.position.coordinates[0]
                }}
              />
            </>
          );
        })}
      </GenericMap>
      {places &&
        places.map((place) => {
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

export default ProfilePage;
