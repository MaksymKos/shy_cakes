import React from 'react';
import { Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Home from '../../../assets/icons/home';
import './BiscuitCakes.scss';

const BiscuitCakes = () => {
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

        <p className="bread-crumbs__text-gray">Бісквітні торти</p>
      </div>
      <Container>
        <h1 className='page__header'>Бісквітні торти</h1>

        <div className="mb-5">
          <div className="biscuit-item">
            <div className="biscuit-image biscuit-image-1" />
            <div className="biscuit-text">
              <h6 className='biscuit-name'>ШОКО</h6>
              <p className='biscuit-desc'>Шоколадно-кавові бісквіти, крем-чіз з вершками, шматочки банану, солодка карамель.</p>
              <p className='biscuit-price'><span>730	₴</span> / кг</p>
            </div>
          </div>

          <div className="biscuit-item">
            <div className="biscuit-image biscuit-image-2" />
            <div className="biscuit-text">
              <h6 className='biscuit-name'>Київський</h6>
              <p className='biscuit-desc'>Білкові коржі з додаванням фундуку, крем Шарлотт.</p>
              <p className='biscuit-price'><span>750	₴</span> / кг</p>
            </div>
          </div>

          <div className="biscuit-item">
            <div className="biscuit-image biscuit-image-3" />
            <div className="biscuit-text">
              <h6 className='biscuit-name'>Празький</h6>
              <p className='biscuit-desc'>Шоколадні бісквіти з абрикосовим просоченням, шоколадно-масляний крем.</p>
              <p className='biscuit-price'><span>730	₴</span> / кг</p>
            </div>
          </div>

          <div className="biscuit-item">
            <div className="biscuit-image biscuit-image-4" />
            <div className="biscuit-text">
              <h6 className='biscuit-name'>Вишня-шоколад</h6>
              <p className='biscuit-desc'>Шоколадні бісквіти, крем-чіз з вершками, вишневе компоте з пелюстками мигдалю.</p>
              <p className='biscuit-price'><span>730	₴</span> / кг</p>
            </div>
          </div>

          <div className="biscuit-item">
            <div className="biscuit-image biscuit-image-5" />
            <div className="biscuit-text">
              <h6 className='biscuit-name'>Орео</h6>
              <p className='biscuit-desc'>Шоколадні бісквіти, крем-чіз з орео, чізкейк орео.</p>
              <p className='biscuit-price'><span>750	₴</span> / кг</p>
            </div>
          </div>
          <div className="biscuit-item">
            <div className="biscuit-image biscuit-image-6" />
            <div className="biscuit-text">
              <h6 className='biscuit-name'>Лимонний</h6>
              <p className='biscuit-desc'>Класичні бісквіти, крем-чіз з вершками, лимонний курд.</p>
              <p className='biscuit-price'><span>730	₴</span> / кг</p>
            </div>
          </div>
          <div className="biscuit-item">
            <div className="biscuit-image biscuit-image-7" />
            <div className="biscuit-text">
              <h6 className='biscuit-name'>Манго-персик</h6>
              <p className='biscuit-desc'>Класичні бісквіти, крем-чіз з вершками, мангове конфі, шматочки персика.</p>
              <p className='biscuit-price'><span>750	₴</span> / кг</p>
            </div>
          </div>
          <div className="biscuit-item">
            <div className="biscuit-image biscuit-image-8" />
            <div className="biscuit-text">
              <h6 className='biscuit-name'>Фісташка-малина</h6>
              <p className='biscuit-desc'>Класичні бісквіти, крем-чіз з вершками, малинове конфі, фісташковий ганаш.</p>
              <p className='biscuit-price'><span>770	₴</span> / кг</p>
            </div>
          </div>
          <div className="biscuit-item">
            <div className="biscuit-image biscuit-image-9" />
            <div className="biscuit-text">
              <h6 className='biscuit-name'>Апельсин-шоколад</h6>
              <p className='biscuit-desc'>Фундучні бісквіти, ганаш на білому шоколаді, апельсинове конфі.</p>
              <p className='biscuit-price'><span>770	₴</span> / кг</p>
            </div>
          </div>

        </div>
      </Container>
    </>
  );
};

export default BiscuitCakes;