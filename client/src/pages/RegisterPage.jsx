import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthenticationForm from '../components/AuthenticationForm';
import AuthenticationContext from '../context/authentication';
import { registerUser } from '../services/authentication';
import './RegisterPage.scss';

const RegisterPage = () => {
  const navigate = useNavigate();

  const [user, setUserState] = useState({
    name: '',
    email: '',
    password: '',
    picture: ''
  });

  const { setUser } = useContext(AuthenticationContext);

  const handleRegistration = () => {
    registerUser(user).then((data) => {
      setUser(data.user);
      navigate('/');
    });
  };

  return (
    <div className="register-container">
      <h3>Register before the travel begins ✈️</h3>
      <AuthenticationForm
        user={user}
        buttonLabel="Start your journey"
        displayInputs={[
          'name',
          'email',
          'password',
          'picture',
          'myDescription'
        ]}
        onUserChange={setUserState}
        onAuthenticationSubmit={handleRegistration}
      />
    </div>
  );
};

export default RegisterPage;
