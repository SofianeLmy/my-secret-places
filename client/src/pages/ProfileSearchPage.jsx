import { useState } from 'react';
import ProfileCard from '../components/ProfileCard';
import { profileSearch } from '../services/profile.js';
import './ProfileSearchPage.scss';

const ProfileSearchPage = () => {
  const [term, setTerm] = useState('');
  const [profiles, setProfiles] = useState([]);

  const handleSearch = (event) => {
    event.preventDefault();
    profileSearch(term).then((data) => {
      setProfiles(data.profiles);
    });
  };

  return (
    <div>
      <form className="profile-search-form" onSubmit={handleSearch}>
        <label htmlFor="input-search-term">Search by name</label>
        <input
          id="input-search-term"
          type="text"
          placeholder="Search for profile..."
          value={term}
          onChange={(event) => setTerm(event.target.value)}
        />

        <button>Search</button>
      </form>
      <div className="profile-card-list">
        {profiles.map((profile) => (
          <ProfileCard key={profile._id} profile={profile} />
        ))}
      </div>
    </div>
  );
};

export default ProfileSearchPage;
