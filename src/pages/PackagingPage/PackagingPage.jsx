import React from 'react';
import { Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Home from '../../assets/icons/home';
import styles from './Packeging.module.scss'

const Packaging = () => {
  return (
    <>
      <div className="bread-crumbs">
        <Link to="/">
          <Home />
        </Link>

        <span className="bread-crumbs__arrow" />

        <p className="bread-crumbs__text-gray">Пакування</p>
      </div>
      <Container>
        <h1 className='page__header'>Пакування</h1>

        <div className="mb-5">
          <div className='page__item'>
            <div className={`${styles.image} ${styles.image_1}`} />
            <div className={`${styles.image} ${styles.image_2}`} />
            <div className={`${styles.image} ${styles.image_3}`} />
          </div>
          <h6 className='page__text-block-desc mb-5'>Стандартне пакування входить у вартість торту. <br /> За Вашим бажанням можна додати листівку.</h6>
          <div className='page__item'>
            <div className={`${styles.image} ${styles.image_4}`} />
          </div>
          <h6 className='page__text-block-desc'>За додаткову плату 120-150 грн ( залежить від розмірів торту) можна   упакувати у тубус.</h6>
        </div>
      </Container>
    </>
  )
}

export default Packaging