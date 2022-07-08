import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { profileLoad } from "../services/profile";
import "./ProfilePage.scss";
import PlaceMap from "../components/PlaceMap";

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
          <div>
            <img
              className="profilePic"
              src={profile.picture}
              alt={profile.name}
              width="200px"
            />
            <p>{profile.myDescription}</p>
          </div>
          <button>
            <Link to="/profile/{profile._id}/edit">Edit Profile</Link>
          </button>
        </>
      )}
      <div className="HP-container">
        <PlaceMap places={places} />
        <div className="multiple-image-list">
          {places &&
            places.map((place) => {
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
  );
};

export default ProfilePage;
