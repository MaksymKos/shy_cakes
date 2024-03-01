import { Container } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import '../assets/styles/pages/CatalogePage.scss'

const CatologePage = () => {
  return (
    <>
      <Container fluid>
        <h1 className='text-center fw-bold p-5'>Що ми пропонуємо?</h1>

        <div className="cataloge__list">
          <div className="cataloge__item p-4">
            <div className='cataloge__item__photo cataloge__item__photo-cake' />
            <p>Amazing cakes with awesome taste</p>
            <LinkContainer to="/cakes" className='cataloge__button'>
              <p>Перейти</p>
            </LinkContainer>
          </div>

          <div className="cataloge__item p-4">
            <div className='cataloge__item__photo cataloge__item__photo-pops' />
            <p>Amazing cakes with awesome taste</p>
            <LinkContainer to="/cakes" className='cataloge__button'>
              <p>Перейти</p>
            </LinkContainer>
          </div>

          <div className="cataloge__item p-4">
            <div className='cataloge__item__photo cataloge__item__photo-sets' />
            <p>Amazing cakes with awesome taste</p>
            <LinkContainer to="/cakes" className='cataloge__button'>
              <p>Перейти</p>
            </LinkContainer>
          </div>
        </div>

      </Container >
    </>
  )
}

export default CatologePage