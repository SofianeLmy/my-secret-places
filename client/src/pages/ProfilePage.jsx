import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { profileLoad, profilePlacesLoad } from '../services/profile';

const ProfilePage = () => {
  const [profile, setProfile] = useState(null);
  const [places, setPlaces] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    profileLoad(id).then((data) => setProfile(data.profile));
    // profilePlacesLoad(id).then((data) => setPlaces(data.places));
  }, [id]);

  return (
    <div>
      {profile && (
        <>
          <img src={profile.picture} alt={profile.name} />
          <h1>{profile.name}</h1>
        </>
      )}
    </div>
  );
};

export default ProfilePage;
