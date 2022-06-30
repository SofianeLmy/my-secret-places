import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { placeLoad } from '../services/place';
import AuthenticationContext from '../context/authentication';
import ProfileCard from '../components/ProfileCard';

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
      {place && (
        <>
          <h2> {place.description} </h2>
          <ProfileCard profile={place.creator} />
          <br />
          {user && place.creator._id === user._id && (
            <Link to={`/place/${id}/edit`}>Edit Place</Link>
          )}
          {user && <button>I like it !</button>}
        </>
      )}
    </div>
  );
};

export default PlaceDetailPage;
