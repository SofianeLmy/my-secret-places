import { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import AuthenticationContext from '../context/authentication';
import { signOutUser } from './../services/authentication';

const Navbar = () => {
  const { user, setUser } = useContext(AuthenticationContext);

  const handleSignOut = () => {
    signOutUser().then(() => {
      setUser(null);
    });
  };
  console.log(user);
  return (
    <nav>
      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="/profile/search">
        Search for Profile
      </Link>
      <Link className="link" to="/place/add">
        Add Place
      </Link>
      {(user && (
        <>
          <Link className="link" to={`/profile/${user._id}`}>
            Welcome {user.name}
          </Link>
          <Link className="link" onClick={handleSignOut} to="">
            Sign Out
          </Link>
        </>
      )) || (
        <>
          <Link className="link" to="/log-in">
            Log In
          </Link>
          <Link className="link" to="/register">
            Register
          </Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
