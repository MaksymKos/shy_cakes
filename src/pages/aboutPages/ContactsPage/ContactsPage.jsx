import { Link } from 'react-router-dom';
import Home from '../../../assets/icons/home';
import './ContactsPage.scss'

const ContactsPage = () => {
  return (
    <div className='contacts-page vh-100'>
      <div className="bread-crumbs">
        <Link to="/">
          <Home />
        </Link>
        <p className="bread-crumbs__arrow" />
        <Link to="/cataloge">
          <p className="bread-crumbs__text-gray">Контакти</p>
        </Link>
      </div>

      <h1 className='page__header p-4'>Контакти</h1>
      <div className='contacts-page__container'>
        <div className="contacts-page__card shadow border p-4">
          <h4 className='mb-4'>Консультації та замовлення</h4>
          <p><a href="https://www.instagram.com/shy__cakes/" target="_blank" rel="noopener noreferrer" className='contacts-page__link'>Instagram</a></p>
          <p><a href="https://t.me/elin_pak" target="_blank" rel="noopener noreferrer" className='contacts-page__link'>Telegram</a></p>
          <p><a href="tel:+380 63 678 7525" target='_blank' rel="noreferrer" >+380 63 678 7525</a></p>
        </div>
        <div className="contacts-page__card shadow border p-4">
          <h4 className='mb-4'>Час роботи</h4>
          <p>Пн-Пт 9:00-20:00</p>
          <p>Сб 10:00-13:00</p>
          <p>Нд 10:00-13:00</p>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;