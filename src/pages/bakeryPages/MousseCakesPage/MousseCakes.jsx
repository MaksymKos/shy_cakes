import React from 'react';
import { Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Home from '../../../assets/icons/home';
import './Mousse-Cakes.scss';

const MousseCakes = () => {
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

        <p className="bread-crumbs__text-gray">Мусові торти</p>
      </div>
      <Container>
        <h1 className='page__header'>Мусові торти</h1>
        <div className="mb-5">
          <div className="mousse-item">
            <div className="mousse-image mousse-image-1" />
            <div className="mousse-text">
              <h6 className='mousse-name'>Три шоколади</h6>
              <p className='mousse-desc'>Шоколадний бісквіт. Три шоколадних мусса з чорного, молочного та білого шоколаду</p>
              <p className='mousse-price'><span>850	₴</span> / кг</p>
            </div>
          </div>
          <div className="mousse-item">
            <div className="mousse-image mousse-image-2" />
            <div className="mousse-text">
              <h6 className='mousse-name'>Полунична насолода</h6>
              <p className='mousse-desc'>Класичний бісквіт, полуничне компоте, полуничний мусс</p>
              <p className='mousse-price'><span>730	₴</span> / кг</p>
            </div>
          </div>
          <div className="mousse-item">
            <div className="mousse-image mousse-image-3" />
            <div className="mousse-text">
              <h6 className='mousse-name'>Мусові половинки</h6>
              <p className='mousse-desc'>Ніжний шоколадний мус з ягідним центром покритий бельгійським шоколадом.</p>
              <p className="block-desc">
                📍Вишня <br />
                📍Малина <br />
                📍Манго
              </p>
              <p className='mousse-price'><span>85	₴</span> / шт</p>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default MousseCakes