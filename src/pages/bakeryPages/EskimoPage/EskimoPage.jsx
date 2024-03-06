import React from 'react';
import { Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Home from '../../../assets/icons/home';
import './EskimoPage.scss';

const EskimoPage = () => {
  return (
    <>
      <div className="bread-crumbs">
        <Link to="/">
          <Home />
        </Link>

        <span className="bread-crumbs__arrow" />

        <Link to="/cataloge">
          <p className="">Каталог</p>
        </Link>

        <span className="bread-crumbs__arrow" />

        <p className="bread-crumbs__text-gray">Ескімо</p>
      </div>
      <Container>
        <h1 className='page__header'>Ескімо</h1>

        <div className="mb-5">
          <div className="biscuit-item">
            <div className="eskimo-image eskimo-image-1" />
            <div className="biscuit-text">
              <h6 className='biscuit-name'>Ескімо</h6>
              <ul className='biscuit-desc'>
                <li>Ванільний або шоколадний бісквіт зі згущеним молоком та крем-чізом.</li><br />
                <li>Покриття білий або молочний шоколад.</li> <br />
                <li>Дизайн на вибір.</li>
              </ul>
              <p className='biscuit-price'><span>1 шт</span> / 80 грн</p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default EskimoPage;