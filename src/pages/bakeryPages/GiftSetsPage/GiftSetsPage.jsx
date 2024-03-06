import React from 'react';
import { Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Home from '../../../assets/icons/home';
import styles from './GiftSetsPage.module.scss';

const GiftSetsPage = () => {
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

        <p className="bread-crumbs__text-gray">Подарункові набори</p>
      </div>
      <Container>
        <h1 className='page__header'>Подарункові набори</h1>
        <div className="mb-5">

          <div className='page__item'>
            <div className={`${styles.image} ${styles.image_1}`} />
            <div className="page__text-block">
              <h6 className='page__text-block-name'>Сет №1</h6>
              <ul className='page__text-block-desc'>
                <li>Мармурове печиво ×5</li> <br />
                <li>Печиво Мадлен ×5</li> <br />
                <li>Міні кейк-попси ×5</li> <br />
                <li>Брауні ×5</li> <br />
              </ul>
              <p className='page__price'>400 грн</p>
            </div>
          </div>

          <div className='page__item'>
            <div className={`${styles.image} ${styles.image_2}`} />
            <div className="page__text-block">
              <h6 className='page__text-block-name'>Сет №2</h6>
              <ul className='page__text-block-desc'>
                <li>Мармурове печиво ×4</li> <br />
                <li>Печиво Мадлен ×4</li> <br />
                <li>Міні кейк-попси ×4</li> <br />
                <li>Брауні ×4</li> <br />
              </ul>
              <p className='page__price'>320 грн</p>
            </div>
          </div>

          <div className='page__item'>
            <div className={`${styles.image} ${styles.image_3}`} />
            <div className="page__text-block">
              <h6 className='page__text-block-name'>Сет №3</h6>
              <ul className='page__text-block-desc'>
                <li>Печиво Мадлен ×8</li> <br />
                <li>Брауні ×8</li> <br />
              </ul>
              <p className='page__price'>400 грн</p>
            </div>
          </div>

          <div className='page__item'>
            <div className={`${styles.image} ${styles.image_4}`} />
            <div className="page__text-block">
              <h6 className='page__text-block-name'>Сет №4</h6>
              <ul className='page__text-block-desc'>
                <li>Мармурове печиво ×10</li> <br />
                <li>Міні кейк-попси ×10</li> <br />
              </ul>
              <p className='page__price'>300 грн</p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default GiftSetsPage;