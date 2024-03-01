import { Nav, Breadcrumb } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import '../../assets/styles/pages/aboutPages/ContactsPage.scss'

const ContactsPage = () => {
  return (
    <div className='contacts-page vh-100'>
      <Breadcrumb className='p-4'>
        <Breadcrumb.Item>
          <LinkContainer to="/home">
            <Nav.Link>
              Головна
            </Nav.Link>
          </LinkContainer>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
          Контакти
        </Breadcrumb.Item>
      </Breadcrumb>

      <h1 className='text-center p-4'>Контакти</h1>
      <div className='contacts-page__container mb-5'>
        <div className="contacts-page__card shadow border p-4">
          <h4 className='mb-4'>Консультації та замовлення</h4>
          <a href="https://www.instagram.com/shy__cakes/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://t.me/elin_pak" target="_blank" rel="noopener noreferrer">Telegram</a>
          <a href="tel:+380 63 678 7525" target='_blank' rel="noreferrer">+380 63 678 7525</a>
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