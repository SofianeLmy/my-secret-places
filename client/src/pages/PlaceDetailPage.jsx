import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { placeLoad } from '../services/place';
import AuthenticationContext from '../context/authentication';
import PlaceInputMap from '../components/PlaceInputMap';

const PlaceDetailPage = () => {
  const { id } = useParams();

  const [place, setPlace] = useState(null);

  useEffect(() => {
    placeLoad(id).then((data) => setPlace(data.place));
  }, [id]);

  const { user } = useContext(AuthenticationContext);
  // there might be something wrong with this because
  // if I check if user is created & creator is the user, it doesn't render the Link.

  return (
    <div>
      {console.log(place)}
      {place && (
        <>
          <h2> {place.description} </h2>
          <img
            src={place.creator.picture}
            alt={place.creator.name}
            width="80px"
          />
          <span>{place.creator.name}</span>
          <br />
          {user && place.creator._id === user._id && (
            <Link to={`/place/${id}/edit`}>Edit Place</Link>
          )}
          {user && <button>I like it !</button>}
          <PlaceInputMap position={place.position} />
          {place.pictures &&
            place.pictures.map((image, index) => (
              <div key={image} className="multiple-image-item">
                <img src={image} alt={`#${index}`} width="200px" />
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PlaceDetailPage;
