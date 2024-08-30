import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Home from "../../../assets/icons/home";

import me1 from "../../../assets/images/alinka.jpg";
import me2 from "../../../assets/images/alinka2.jpg";
import certificate from "../../../assets/images/certificate1.jpg";
import certificate2 from "../../../assets/images/certificate2.jpg";

import styles from "./AboutUsPage.module.scss";

const AboutUsPage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="bread-crumbs">
        <Link to="/home/">
          <Home />
        </Link>
        <p className="bread-crumbs__arrow" />
        <Link to="/cataloge">
          <p className="bread-crumbs__text-gray">Про мене</p>
        </Link>
      </div>
      <Container fluid>
        <h1 className="page__header">Про мене</h1>
        <div className={styles.image_wrapper}>
          <img src={me1} alt="Alina" className={styles.image} />
          {windowWidth > 650 && (
            <img src={me2} alt="Alina" className={styles.image} />
          )}
        </div>
        <div className={styles.features}>
          <div className="home__about__list">
              <div className="">
                <p className="home__about__list-featch">100+</p>
                <p>Клієнтів</p>
              </div>
              <div className="">
                <p className="home__about__list-featch">2023</p>
                <p>Рік заснування</p>
              </div>
          </div>
          <p>
            Ласка запрошую до світу вишуканих десертів та тортів, що
            народжуються з любов'ю!
            <br />
            Я - Аліна, майстер, який протягом декількох років вдосконалює свої
            навички у кондитерському мистецтві. Постійно покращую як теоретичну,
            так і практичну базу своїх вмінь.
            <br />
            Від елегантних тортів на пам'ятні дати до казкових маленьких
            десертів які прикрасять кожен Ваш день.
            <br />
            Приєднуйтесь до цієї захоплюючої подорожі світом смаків та ароматів,
            де кожен торт розповідає свою історію, а кожен шматочок - це радість
            та задоволення.
          </p>
        </div>

        {windowWidth < 650 && (
          <div className={styles.image_wrapper}>
            <img src={me2} alt="Alina" className={styles.image} />
          </div>
        )}
        <h2 className="page__header">Мої сертифікати</h2>
        <div className={styles.image_flex}>
          <img
            src={certificate}
            alt="Alina"
            className={styles.image_certificate}
          />
          <img
            src={certificate2}
            alt="Alina"
            className={styles.image_certificate}
          />
        </div>
      </Container>
    </>
  );
};

export default AboutUsPage;
