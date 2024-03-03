import React from 'react';
import {
  HashRouter as Router,
  Route,
  Navigate,
  Routes,
} from 'react-router-dom';
import App from './App';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './components/PrivateRoute';
import ProfilePage from './pages/ProfilePage';
import ContactsPage from './pages/aboutPages/ContactsPage';
import CartPage from './pages/CartPage';
import FavouritePage from './pages/FavouritePage';
import CatologePage from './pages/CatologePage';


export const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<HomePage />} />
          <Route path='home' element={<Navigate to="/" replace />} />
          <Route path='contacts' element={<ContactsPage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='cart' element={<CartPage />} />
          <Route path='favourite' element={<FavouritePage />} />
          <Route path='cataloge' element={<CatologePage />} />
          <Route path='' element={<PrivateRoute />}>
            <Route path='profile' element={<ProfilePage />} />
          </Route>
        </Route>
      </Routes >
    </Router>
  );
};

