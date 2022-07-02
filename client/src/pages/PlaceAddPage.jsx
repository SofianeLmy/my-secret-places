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
      <h1>Add a new Place</h1>
      <PlaceForm
        place={place}
        onPlaceChange={setPlace}
        onPlaceSubmit={handlePlaceCreation}
        buttonLabel="Add a new Place to your Profile"
      />
    </div>
  );
};

export default PlaceAddPage;
