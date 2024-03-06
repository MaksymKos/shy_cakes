import { Container } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import './CatalogePage.scss'

const CatologePage = () => {
  return (
    <>
      <Container fluid>
        <h1 className='page__header'>Що ми пропонуємо?</h1>

        <div className="cataloge__list">
          <div className="cataloge__item p-4">
            <div className='cataloge__item__photo cataloge__item__photo-mousse' />
            <p className='cataloge__item__name'>Мусові торти</p>
            <LinkContainer to="/mousse-cakes" className='cataloge__button'>
              <p>Перейти</p>
            </LinkContainer>
          </div>

          <div className="cataloge__item p-4">
            <div className='cataloge__item__photo cataloge__item__photo-biskvit' />
            <p className='cataloge__item__name'>Бісквітні торти</p>
            <LinkContainer to="/biscuit-cakes" className='cataloge__button'>
              <p>Перейти</p>
            </LinkContainer>
          </div>

          <div className="cataloge__item p-4">
            <div className='cataloge__item__photo cataloge__item__photo-macarons' />
            <p className='cataloge__item__name'>Macarons</p>
            <LinkContainer to="/macarons" className='cataloge__button'>
              <p>Перейти</p>
            </LinkContainer>
          </div>
          <div className="cataloge__item p-4">
            <div className='cataloge__item__photo cataloge__item__photo-eskimo' />
            <p className='cataloge__item__name'>Ескімо</p>
            <LinkContainer to="/eskimo" className='cataloge__button'>
              <p>Перейти</p>
            </LinkContainer>
          </div>

          <div className="cataloge__item p-4">
            <div className='cataloge__item__photo cataloge__item__photo-pops' />
            <p className='cataloge__item__name'>Cake-pops</p>
            <LinkContainer to="/cake-pops" className='cataloge__button'>
              <p>Перейти</p>
            </LinkContainer>
          </div>

          <div className="cataloge__item p-4">
            <div className='cataloge__item__photo cataloge__item__photo-sets' />
            <p className='cataloge__item__name'>Подарункові набори</p>
            <LinkContainer to="/gift-sets" className='cataloge__button'>
              <p>Перейти</p>
            </LinkContainer>
          </div>
        </div>
      </Container >
    </>
  )
}

export default CatologePage