import React from 'react';
import { Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Home from '../../assets/icons/home';
import styles from './Reviews.module.scss'

const ReviewsPage = () => {
  return (
    <>
      <div className="bread-crumbs">
        <Link to="/">
          <Home />
        </Link>

        <span className="bread-crumbs__arrow" />

        <p className="bread-crumbs__text-gray">Відгуки</p>
      </div>
      <Container>
        <h1 className='page__header'>Відгуки</h1>

        <div className="mb-5">

          <div className='page__item'>
            <div className={`${styles.image} ${styles.image_1}`} />
            <div className="biscuit-text">
              <h6 className='biscuit-name'>NAME</h6>
              <p className='biscuit-desc'>Some description.</p>
              <p className='biscuit-price'><span>Price	₴</span> / Weight кг</p>
            </div>
          </div>

          <div className='page__item'>
            <div className={`${styles.image} ${styles.image_2}`} />
            <div className={`${styles.image} ${styles.image_2_1}`} />
            <div className="biscuit-text">
              <h6 className='biscuit-name'>NAME</h6>
              <p className='biscuit-desc'>Some description.</p>
              <p className='biscuit-price'><span>Price	₴</span> / Weight кг</p>
            </div>
          </div>

          <div className='page__item'>
            <div className={`${styles.image} ${styles.image_4}`} />
            <div className="biscuit-text">
              <h6 className='biscuit-name'>NAME</h6>
              <p className='biscuit-desc'>Some description.</p>
              <p className='biscuit-price'><span>Price	₴</span> / Weight кг</p>
            </div>
          </div>

          <div className='page__item'>
            <div className={`${styles.image} ${styles.image_3}`} />
            <div className={`${styles.image} ${styles.image_3_1}`} />
            <div className="biscuit-text">
              <h6 className='biscuit-name'>NAME</h6>
              <p className='biscuit-desc'>Some description.</p>
              <p className='biscuit-price'><span>Price	₴</span> / Weight кг</p>
            </div>
          </div>

          <div className='page__item'>
            <div className={`${styles.image} ${styles.image_5}`} />
            <div className="biscuit-text">
              <h6 className='biscuit-name'>NAME</h6>
              <p className='biscuit-desc'>Some description.</p>
              <p className='biscuit-price'><span>Price	₴</span> / Weight кг</p>
            </div>
          </div>

        </div>
      </Container>
    </>
  )
}

export default ReviewsPage