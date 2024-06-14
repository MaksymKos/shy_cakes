import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from '../../components/Button/Button'

import { rev1, rev2, rev3, rev4, rev5, rev6, rev7, rev8, rev9 } from "./imagesData";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Home from "../../assets/icons/home";
import styles from "./Reviews.module.scss";

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
        <h1 className="page__header">Відгуки</h1>

        <div className="mb-5">
          <div className="page__item">
            <Swiper
              className={styles.swiper}
              modules={[Pagination]}
              spaceBetween={10}
              slidesPerView={1}
              grabCursor={true}
              loop={true}
              pagination={{ clickable: true }}
            >
              {rev1.map((r) => {
                return (
                  <SwiperSlide className={styles.swiper_slide}>
                    <img src={r} alt="відгук" className={styles.image} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div className="biscuit-text">
              <h6 className="biscuit-name">Орео</h6>
              <p className="biscuit-desc">
                Повітряні шоколадні бісквіти, крем-чіз з орео, ніжний чізкейк
                орео Покриття ганаш на білому шоколаді
              </p>
              <p className="biscuit-price">
                <span>1850 ₴</span> / 2,5 кг
              </p>
              <Button text="Замовити такий"/>
            </div>
          </div>

          <div className="page__item">
            <Swiper
              className={styles.swiper}
              modules={[Pagination]}
              spaceBetween={10}
              slidesPerView={1}
              grabCursor={true}
              loop={true}
              pagination={{ clickable: true }}
            >
              {rev2.map((r) => {
                return (
                  <SwiperSlide className={styles.swiper_slide}>
                    <img src={r} alt="відгук" className={styles.image} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div className="biscuit-text">
              <h6 className="biscuit-name">Вишня-шоколад</h6>
              <p className="biscuit-desc">
                Шоколадні бісквіти, крем-чіз з вершками, вишневе компоте з
                пелюстками мигдалю
              </p>
              <p className="biscuit-price">
                <span>1500 ₴</span> / 2,5 кг
              </p>
              <Button text="Замовити такий"/>
            </div>
          </div>

          <div className="page__item">
            <Swiper
                className={styles.swiper}
                modules={[Pagination]}
                spaceBetween={10}
                slidesPerView={1}
                grabCursor={true}
                loop={true}
                pagination={{ clickable: true }}
              >
                {rev3.map((r) => {
                  return (
                    <SwiperSlide className={styles.swiper_slide}>
                      <img src={r} alt="відгук" className={styles.image} />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            <div className="biscuit-text">
              <h6 className="biscuit-name">ШОКО</h6>
              <p className="biscuit-desc">
                Шоколадно-кавові бісквіти, крем-чіз з вершками, шматочки банану,
                солодка карамель
              </p>
              <p className="biscuit-price">
                <span>800 ₴</span> / 1,2 кг
              </p>
              <Button text="Замовити такий"/>

            </div>
          </div>

          <div className="page__item">
            <Swiper
                className={styles.swiper}
                modules={[Pagination]}
                spaceBetween={10}
                slidesPerView={1}
                grabCursor={true}
                loop={true}
                pagination={{ clickable: true }}
              >
                {rev4.map((r) => {
                  return (
                    <SwiperSlide className={styles.swiper_slide}>
                      <img src={r} alt="відгук" className={styles.image} />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            <div className="biscuit-text">
              <h6 className="biscuit-name">Повітряні класичні бісквіти</h6>
              <p className="biscuit-desc">
                Крем-чіз на вершках Вишневе компоте Шоколадно-масляний крем{" "}
              </p>
              <p className="biscuit-price">
                <span>1500 ₴</span> / 2,5 кг
              </p>
              <Button text="Замовити такий"/>
            </div>
          </div>

          <div className="page__item">
            <Swiper
                className={styles.swiper}
                modules={[Pagination]}
                spaceBetween={10}
                slidesPerView={1}
                grabCursor={true}
                loop={true}
                pagination={{ clickable: true }}
              >
                {rev5.map((r) => {
                  return (
                    <SwiperSlide className={styles.swiper_slide}>
                      <img src={r} alt="відгук" className={styles.image} />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            <div className="biscuit-text">
              <h6 className="biscuit-name">Апельсин-шоколад</h6>
              <p className="biscuit-desc">
                Фундучні бісквіти,- ганаш на білому шоколаді, апельсинове конфі
                Покриття ганаш на білому шоколаді + велюр
              </p>
              <p className="biscuit-price">
                <span>3000 ₴</span> / 3 кг
              </p>
              <Button text="Замовити такий"/>
            </div>
          </div>

          <div className="page__item">
            <Swiper
                className={styles.swiper}
                modules={[Pagination]}
                spaceBetween={10}
                slidesPerView={1}
                grabCursor={true}
                loop={true}
                pagination={{ clickable: true }}
              >
                {rev6.map((r) => {
                  return (
                    <SwiperSlide className={styles.swiper_slide}>
                      <img src={r} alt="відгук" className={styles.image} />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            <div className="biscuit-text">
              <h6 className="biscuit-name">Апельсин-шоколад</h6>
              <p className="biscuit-desc">
                Фундучні бісквіти,- ганаш на білому шоколаді, апельсинове конфі
                Покриття ганаш на білому шоколаді + велюр
              </p>
              <p className="biscuit-price">
                <span>850 ₴</span> / 1 кг
              </p>
              <Button text="Замовити такий"/>
            </div>
          </div>

          <div className="page__item">
            <Swiper
                className={styles.swiper}
                modules={[Pagination]}
                spaceBetween={10}
                slidesPerView={1}
                grabCursor={true}
                loop={true}
                pagination={{ clickable: true }}
              >
                {rev7.map((r) => {
                  return (
                    <SwiperSlide className={styles.swiper_slide}>
                      <img src={r} alt="відгук" className={styles.image} />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            <div className="biscuit-text">
              <h6 className="biscuit-name">Фісташка-малина</h6>
              <p className="biscuit-desc">
                Класичні ванільні бісквіти, крем-чіз з вершками, малинове конфі, фісташковий ганаш
              </p>
              <p className="biscuit-price">
                <span>2250 ₴</span> / 2 кг
              </p>
              <Button text="Замовити такий"/>
            </div>
          </div>

          <div className="page__item">
            <Swiper
                className={styles.swiper}
                modules={[Pagination]}
                spaceBetween={10}
                slidesPerView={1}
                grabCursor={true}
                loop={true}
                pagination={{ clickable: true }}
              >
                {rev8.map((r) => {
                  return (
                    <SwiperSlide className={styles.swiper_slide}>
                      <img src={r} alt="відгук" className={styles.image} />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            <div className="biscuit-text">
              <h6 className="biscuit-name">Подарунковий набір де кожний знайде смак який йому до вподоби🤤</h6>
              <p className="biscuit-desc">
                📍макарони з бананом <br />
                📍макарони з фісташкою та малиною <br />
                📍МАХ кейк попс <br />
                📍мусові напівяйця в асортименті 
              </p>
              <p className="biscuit-price">
                <span>1000 ₴</span> / набір
              </p>
              <Button text="Замовити такий"/>
            </div>
          </div>

          <div className="page__item">
            <Swiper
                className={styles.swiper}
                modules={[Pagination]}
                spaceBetween={10}
                slidesPerView={1}
                grabCursor={true}
                loop={true}
                pagination={{ clickable: true }}
              >
                {rev9.map((r) => {
                  return (
                    <SwiperSlide className={styles.swiper_slide}>
                      <img src={r} alt="відгук" className={styles.image} />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            <div className="biscuit-text">
              <h6 className="biscuit-name">3 шоколади  </h6>
              <p className="biscuit-desc">
                Шоколадний бісквіт у поєднаннч з 3 шоколадними мусами з чорного, молочного та білого шоколаду
              </p>
              <p className="biscuit-price">
                <span>1150 ₴</span> / 1.5 кг
              </p>
              <Button text="Замовити такий"/>
            </div>
          </div>

        </div>
      </Container>
    </>
  );
};

export default ReviewsPage;
