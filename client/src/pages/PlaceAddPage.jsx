import React from 'react';
import { placeAdd } from '../services/place';
import { useNavigate } from 'react-router-dom';
import PlaceForm from '../components/PlaceForm';

import { useState } from 'react';

const PlaceAddPage = () => {
  const [place, setPlace] = useState({
    description: '',
    pictures: []
  });

  const navigate = useNavigate();

  const handlePlaceCreation = () => {
    placeAdd(place).then((data) => {
      const id = data.place._id;
      navigate(`/place/${id}`);
    });
  };

  return (
    <div>
      <h3>Add a new Place to your profile 😎</h3>
      <br />
      <PlaceForm
        place={place}
        onPlaceChange={setPlace}
        onPlaceSubmit={handlePlaceCreation}
        buttonLabel="Add New Place"
      />
      <br />
    </div>
    
  );
};

export default PlaceAddPage;
