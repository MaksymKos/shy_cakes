import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../../../assets/icons/home';

const Macarons = () => {
  return (
    <>
      <div className="vh-100">
        <div className="bread-crumbs">
          <Link to="/">
            <Home />
          </Link>

          <span className="bread-crumbs__arrow" />

          <Link to="/cataloge">
            <p className="">Каталог</p>
          </Link>

          <span className="bread-crumbs__arrow" />

          <p className="bread-crumbs__text-gray">Macarons</p>
        </div>
        <div className='page__header mt-5'>Out of Stock</div>
      </div>
    </>
  );
};

export default Macarons;