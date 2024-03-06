import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo/logo-noback.png';
import Instagram from '../../assets/icons/instagram';
import Telegram from '../../assets/icons/telegram';
import Phone from '../../assets/icons/phone';

import './Footer.scss';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer border-top'>
      <section className='footer__container p-4'>

        <Link to='/home' className='text-center'>
          <img
            width={150}
            alt="Logo"
            src={logo}
          />
        </Link>

        <div className="">
          <div className='mb-5 text-center'>
            <h3 className=''>Щоб зв'язатись зі мною</h3>
          </div>
          <div className="d-flex justify-content-around">
            <a href="https://www.instagram.com/shy__cakes/" target='_blank' className='footer__link' rel="noreferrer">
              <Instagram />
            </a>
            <a href="https://t.me/elin_pak" target='_blank' className='footer__link' rel="noreferrer">
              <Telegram />
            </a>
            <a href="tel:+380 63 678 7525" target='_blank' className='footer__link' rel="noreferrer">
              <Phone />
            </a>
          </div>
        </div>

        <div className='footer__links'>
          <div className='d-flex flex-column justify-content-around'>
            <h5 className='fw-bold text-info'>Каталог</h5>
            <Link to="/mousse-cakes" className='footer__link'>
              Мусові торти
            </Link>
            <Link to="/biscuit-cakes" className='footer__link'>
              Бісквітні торти
            </Link>
            <Link to="/macarons" className='footer__link'>
              Macarons
            </Link>
            <Link to="/eskimo" className='footer__link'>
              Ескімо
            </Link>
            <Link to="/cake-pops" className='footer__link'>
              Cake-pops
            </Link>
            <Link to="/gift-sets" className='footer__link'>
              Подарункові набори
            </Link>
          </div>

          <div className='d-flex flex-column'>
            <h5 className='fw-bold text-info'>Shy Cakes</h5>
            <Link to="/info" className='footer__link'>
              Про мене
            </Link>
            <Link to="/payment" className='footer__link'>
              Оплата та доставка
            </Link>
            <Link to="/contacts" className='footer__link'>
              Контакти
            </Link>
          </div>
        </div>
      </section>

      <div className="border"></div>

      <Container fluid className="p-3">
        <p className='text-secondary'>
          &copy; Всі права захищені {currentYear}. Shy Cakes
        </p>
      </Container>
    </footer>
  );
};