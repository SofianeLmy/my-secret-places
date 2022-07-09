import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { placeLoad } from '../services/place';
import AuthenticationContext from '../context/authentication';
import PlaceInputMap from '../components/PlaceInputMap';
import './PlaceDetailPage.scss';

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
    <div className="creator">
      {console.log(place)}
      {place && (
        <>
          <h2> {place.description} </h2>
          <Link className="profile-card" to={`/profile/${place.creator._id}`}>
            <img
              id="profilePic"
              src={place.creator.picture}
              alt={place.creator.name}
            />
            <p>{place.creator.name}</p>
          </Link>
          {user && place.creator._id === user._id && (
            <button>
              <Link to={`/place/${id}/edit`}>Edit Place</Link>
            </button>
          )}
          <br />
          <br />
          <div className="multiple-image-list">
            {place.pictures &&
              place.pictures.map((image, index) => (
                <div key={image} className="multiple-image-item">
                  <img src={image} alt={`#${index}`} />
                </div>
              ))}
          </div>
          <br />
          <PlaceInputMap
            position={place.position}
            center={{
              lat: place.position.coordinates[1],
              lng: place.position.coordinates[0]
            }}
          />
        </>
      )}
    </div>
  );
};

export default PlaceDetailPage;
