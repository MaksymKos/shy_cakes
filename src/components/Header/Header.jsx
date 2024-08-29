import { useState } from 'react';
import { Navbar, Container, Nav, Figure, Offcanvas } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import logo from '../../assets/images/logo/logo-noback.png';
import Busket from '../../assets/icons/busket';
import Heart from '../../assets/icons/heart';
import Home from '../../assets/icons/home';
import Catalog from '../../assets/icons/catalog';

import './Header.scss';

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <header className='header border-bottom sticky-top'>
      <Navbar expand="md">
        <Container fluid>
          <Navbar.Brand href="/">
            <Figure.Image
              width={120}
              height={100}
              alt="Logo"
              src={logo}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='offcanvasNavbar-expand' onClick={toggleShow} />
          <Navbar.Offcanvas
            id='offcanvasNavbar-expand'
            aria-labelledby='offcanvasNavbarLabel-expand'
            show={show}
            onHide={handleClose}
            placement='end'
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id='offcanvasNavbarLabel-expand'>
                Shy Cakes
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1">
                <LinkContainer to="/" onClick={handleClose}>
                  <Nav.Link>
                    <Home /> Головна
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/cataloge" onClick={handleClose}>
                  <Nav.Link>
                    <Catalog /> Каталог
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/reviews" onClick={handleClose}>
                  <Nav.Link>
                    <Heart /> Відгуки
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/packaging" onClick={handleClose}>
                  <Nav.Link>
                    <Busket /> Пакування
                  </Nav.Link>
                </LinkContainer>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;