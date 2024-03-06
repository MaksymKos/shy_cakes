import { Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Home from '../../../assets/icons/home';

import './AboutUsPage.scss';

const AboutUsPage = () => {
  return (
    <>
      <div className="bread-crumbs">
        <Link to="/">
          <Home />
        </Link>
        <p className="bread-crumbs__arrow" />
        <Link to="/cataloge">
          <p className="bread-crumbs__text-gray">Про мене</p>
        </Link>
      </div>
      <Container fluid className='vh-100'>
        <h1 className='page__header'>Про мене</h1>

      </Container>
    </>
  );
};

export default AboutUsPage;