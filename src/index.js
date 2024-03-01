import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import './assets/styles/index.scss';
import App from './App';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './components/PrivateRoute';
import ProfilePage from './pages/ProfilePage';
import ContactsPage from './pages/aboutPages/ContactsPage';
import CartPage from './pages/CartPage';
import FavouritePage from './pages/FavouritePage';
import CatologePage from './pages/CatologePage';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/home' element={<HomePage />} />
      <Route path='/contacts' element={<ContactsPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/cart' element={<CartPage />} />
      <Route path='/favourite' element={<FavouritePage />} />
      <Route path='/cataloge' element={<CatologePage />} />
      {/* <Route path='/search/:keyword' element={<HomePage />} />
      <Route path='/page/:pageNumber' element={<HomePage />} />
      <Route
        path='/search/:keyword/page/:pageNumber'
        element={<HomePage />}
      />
      <Route path='/product/:id' element={<ProductDetailsPage />} />
      
      <Route path='/register' element={<RegisterPage />} /> */}
      {/* Registered users */}
      <Route path='' element={<PrivateRoute />}>
        {/* <Route path='/shipping' element={<ShippingPage />} /> */}
        {/* <Route path='/payment' element={<PaymentPage />} /> */}
        {/* <Route path='/placeorder' element={<PlaceOrderPage />} /> */}
        {/* <Route path='/order/:id' element={<OrderPage />} /> */}
        <Route path='/profile' element={<ProfilePage />} />
      </Route>
      {/* Admin users
      <Route path='' element={<AdminRoute />}>
        <Route path='/admin/orderlist' element={<OrderListScreen />} />
        <Route path='/admin/productlist' element={<ProductListScreen />} />
        <Route
          path='/admin/productlist/:pageNumber'
          element={<ProductListScreen />}
        />
        <Route path='/admin/userlist' element={<UserListScreen />} />
        <Route path='/admin/product/:id/edit' element={<ProductEditScreen />} />
        <Route path='/admin/user/:id/edit' element={<UserEditScreen />} />
      </Route> */}
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);