import { Navbar, Container, Nav, NavDropdown, Figure, Offcanvas } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import logo from '../assets/images/logo-noback.png';
import Busket from '../assets/icons/busket';
import Heart from '../assets/icons/heart';
import Home from '../assets/icons/home';
import User from '../assets/icons/user';
import '../assets/styles/components/Header.scss';
import Catalog from '../assets/icons/catalog';

const Header = () => {
  return (
    <header className='header border-bottom sticky-top'>
      <Navbar expand="xl">
        <Container fluid>
          <Navbar.Brand href="/home">
            <Figure.Image
              width={120}
              height={100}
              alt="Logo"
              src={logo}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='offcanvasNavbar-expand' />
          <Navbar.Offcanvas
            id='offcanvasNavbar-expand'
            aria-labelledby='offcanvasNavbarLabel-expand'
            placement="end"

          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id='offcanvasNavbarLabel-expand'>
                Shy Cakes
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="">
                {true ? (
                  <NavDropdown title='Максим' id="username">
                    <LinkContainer to="/profile">
                      <NavDropdown.Item>Профіль</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item>
                      Вийти
                    </NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <LinkContainer to="/login">
                    <Nav.Link>
                      <User /> Вхід
                    </Nav.Link>
                  </LinkContainer>
                )}
                <LinkContainer to="home">
                  <Nav.Link>
                    <Home /> Головна
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/cataloge">
                  <Nav.Link>
                    <Catalog /> Каталог
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/favourite">
                  <Nav.Link>
                    <Heart /> Улюблені
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/cart">
                  <Nav.Link>
                    <Busket /> Корзина
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