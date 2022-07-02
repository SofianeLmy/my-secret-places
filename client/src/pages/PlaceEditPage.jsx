import PlaceForm from '../components/PlaceForm';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { placeLoad, placeEdit } from '../services/place';

const PlaceEditPage = () => {
  const { id } = useParams();

  const [place, setPlace] = useState(null);

  const navigate = useNavigate();

  const handlePlaceEdit = () => {
    placeEdit(id, place).then((data) => {
      navigate(`/place/${id}`);
    });
  };

  useEffect(() => {
    placeLoad(id).then((data) => setPlace(data.place));
  }, [id]);

  return (
    <div>
      <h1>Edit secret place</h1>
      {place && (
        <PlaceForm
          place={place}
          onPlaceChange={setPlace}
          onPlaceSubmit={handlePlaceEdit}
          buttonLabel="Edit secret place"
        />
      )}
    </div>
  );
};

export default PlaceEditPage;
