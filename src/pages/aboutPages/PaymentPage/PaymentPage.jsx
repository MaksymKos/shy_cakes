import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../../../assets/icons/home';

const PaymentPage = () => {
  return (
    <>
      <div className="bread-crumbs">
        <Link to="/">
          <Home />
        </Link>
        <p className="bread-crumbs__arrow" />
        <Link to="/cataloge">
          <p className="bread-crumbs__text-gray">Оплата</p>
        </Link>
      </div>
      <div className='vh-100'>
        <h1 className='page__header p-4'>Оплата</h1>
      </div>
    </>
  );
};

export default PaymentPage;