import React from 'react';
import {
  HashRouter as Router,
  Route,
  Navigate,
  Routes,
} from 'react-router-dom';
import App from './App';
import HomePage from './pages/HomePage/HomePage';
import ContactsPage from './pages/aboutPages/ContactsPage/ContactsPage';
import CatologePage from './pages/CatalogePage/CatologePage';
import MousseCakes from './pages/bakeryPages/MousseCakesPage/MousseCakes';
import BiscuitCakes from './pages/bakeryPages/BiscuitCakesPage/BiscuitCakes';
import AboutUsPage from './pages/aboutPages/AboutUsPage/AboutUsPage';
import PaymentPage from './pages/aboutPages/PaymentPage/PaymentPage';
import Macarons from './pages/bakeryPages/MacaronsPage/MacaronsPage';
import EskimoPage from './pages/bakeryPages/EskimoPage/EskimoPage';
import CakePopsPage from './pages/bakeryPages/CakePopsPage/CakePopsPage';
import GiftSetsPage from './pages/bakeryPages/GiftSetsPage/GiftSetsPage';
import Packaging from './pages/PackagingPage/PackagingPage';
import ReviewsPage from './pages/ReviewsPage/ReviewsPage';
import ScrollToTop from "./utils/scrollToTop";


export const Root = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<HomePage />} />
          {/* <Route path='home' element={<Navigate to="/" replace />} /> */}
          <Route path='packaging' element={<Packaging />} />
          <Route path='reviews' element={<ReviewsPage />} />


          <Route path='contacts' element={<ContactsPage />} />
          <Route path='payment' element={<PaymentPage />} />
          <Route path='info' element={<AboutUsPage />} />

          <Route path='cataloge' element={<CatologePage />} />
          <Route path='mousse-cakes' element={<MousseCakes />} />
          <Route path='biscuit-cakes' element={<BiscuitCakes />} />
          <Route path='macarons' element={<Macarons />} />
          <Route path='eskimo' element={<EskimoPage />} />
          <Route path='cake-pops' element={<CakePopsPage />} />
          <Route path='gift-sets' element={<GiftSetsPage />} />
        </Route>
      </Routes >
    </Router>
  );
};

