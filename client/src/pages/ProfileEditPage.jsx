import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthenticationForm from '../components/AuthenticationForm';
import AuthenticationContext from '../context/authentication';
import { profileLoad, profileEdit } from '../services/profile';

const ProfileEditPage = () => {
  const [profile, setProfile] = useState(null);

  const navigate = useNavigate();

  const { user, setUser } = useContext(AuthenticationContext);

  useEffect(() => {
    if (user) {
      profileLoad(user._id).then((data) => setProfile(data.profile));
    }
  }, [user]);

  const handleProfileEdit = () => {
    profileEdit(profile).then((data) => {
      setUser(data.profile);
      navigate(`/profile/${user._id}`);
    });
  };

  return (
    <div>
      <h3>Edit your profile in a glance ⚡️</h3>
      {profile && (
        <AuthenticationForm
          user={profile}
          buttonLabel="Save your new profile"
          displayInputs={['name', 'email', 'picture', 'description']}
          onUserChange={setProfile}
          onAuthenticationSubmit={handleProfileEdit}
        />
      )}
    </div>
  );
};

export default ProfileEditPage;
