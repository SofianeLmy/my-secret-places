import { Link } from 'react-router-dom';
import './ProfileCard.scss';

const ProfileCard = ({ profile }) => (
  <Link className="profile-card" to={`/profile/${profile._id}`}>
    <h3>{profile.name}</h3>
    <img src={profile.picture} alt={profile.name} />
  </Link>
);

export default ProfileCard;
