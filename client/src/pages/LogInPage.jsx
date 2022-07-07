import { useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthenticationContext from '../context/authentication';
import { logInUser } from '../services/authentication';

const LogInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const { setUser } = useContext(AuthenticationContext);

  const handleLogIn = (event) => {
    event.preventDefault();
    logInUser({ email, password }).then((data) => {
      setUser(data.user);
      navigate(`/profile/${data.user._id}`);
    });
  };

  return (
    <div>
      
      <form onSubmit={handleLogIn}>
      <h3>Happy to see you back 😍 Log in ! </h3>
        <label htmlFor="input-email">Email</label>
        <input
          id="input-email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <label htmlFor="input-password">Password</label>
        <input
          id="input-password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <button>Let's explore</button>
      </form>
      <p>
        If you don't have an account, register <Link to="/register">here</Link>
      </p>
    </div>
  );
};

export default LogInPage;
