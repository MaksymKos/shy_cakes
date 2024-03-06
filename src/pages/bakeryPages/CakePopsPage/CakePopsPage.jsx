import React from 'react';
import { Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Home from '../../../assets/icons/home';
import styles from './CakePopsPage.module.scss';

const CakePopsPage = () => {
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

        <p className="bread-crumbs__text-gray">Кейк-попси</p>
      </div>
      <Container>
        <h1 className='page__header'>Кейк-попси</h1>

        <div className="mb-5">
          <div className='page__item'>
            <div className={`${styles.image_1} ${styles.image}`} />
            <div className={`${styles.image_2} ${styles.image}`} />
            <div className="page__text-block">
              <h6 className='page__text-block-name'>Кейк-попси</h6>
              <ul className='page__text-block-desc'>
                <li>Ванільний або шоколадний біскіт, згущене молоко, крем-чіз.</li> <br />
                <li>Покриття: чорний, молочний, білий шоколад.</li>
              </ul>
              <p className='page__price'><span>1 шт</span> / 40 грн</p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CakePopsPage;