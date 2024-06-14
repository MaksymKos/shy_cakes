import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from "react-bootstrap";

import Home from '../../../assets/icons/home';
import Mac1 from '../../../assets/images/cataloge/macarons/mac-1.jpg'
import Mac2 from '../../../assets/images/cataloge/macarons/mac-2.jpg'
import Mac3 from '../../../assets/images/cataloge/macarons/mac-3.jpg'
import Mac4 from '../../../assets/images/cataloge/macarons/mac-4.jpg'

import styles from './MacaronsPage.module.scss';


const Macarons = () => {
  return (
    <>
      <div >
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
          <Container>
          <h1 className='page__header'>Macarons</h1>

          <div className="mb-5">
            <div className='page__item'>
              <img className={styles.image} src={Mac1} alt="макарончик" />
              <h6 className='page__text-block-name'>Шоколад-вишня</h6>
              <p className='page__price'><span>1 шт</span> / 65 грн</p>
            </div>

            <div className='page__item'>
              <img className={styles.image} src={Mac2} alt="макарончик" />
              <h6 className='page__text-block-name'>Шоколад-вишня</h6>
              <p className='page__price'><span>1 шт</span> / 65 грн</p>
            </div>

            <div className='page__item'>
              <img className={styles.image} src={Mac3} alt="макарончик" />
              <h6 className='page__text-block-name'>Шоколад-вишня</h6>
              <p className='page__price'><span>1 шт</span> / 65 грн</p>
            </div>

            <div className='page__item'>
              <img className={styles.image} src={Mac4} alt="макарончик" />
              <h6 className='page__text-block-name'>Шоколад-вишня</h6>
              <p className='page__price'><span>1 шт</span> / 65 грн</p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Macarons;