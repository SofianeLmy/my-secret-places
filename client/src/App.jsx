import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LogInPage from './pages/LogInPage';
import ProfileSearchPage from './pages/ProfileSearchPage';
import ProfilePage from './pages/ProfilePage';

import PlaceAddPage from './pages/PlaceAddPage';
import PlaceDetailPage from './pages/PlaceDetailPage';
import PlaceEditPage from './pages/PlaceEditPage';

import Navbar from './components/Navbar';
import AuthenticationContext from './context/authentication';
import { loadUserInformation } from './services/authentication';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    loadUserInformation().then((data) => {
      setUser(data.user);
    });
  }, []);

  return (
    <AuthenticationContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/log-in" element={<LogInPage />} />
          <Route path="/profile/search" element={<ProfileSearchPage />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
          <Route path="/place/add" element={<PlaceAddPage />} />
          <Route path="/place/:id" element={<PlaceDetailPage />} />
          <Route path="/place/:id/edit" element={<PlaceEditPage />} />
        </Routes>
      </BrowserRouter>
    </AuthenticationContext.Provider>
  );
};

export default App;
