import { Container } from "react-bootstrap";
import Cataloge from '../CatalogePage/CatologePage';
import './HomePage.scss';

const HomePage = () => {
  return (
    <>
      <section className='home__title'>
        <p className='home__title-text'>We bake to make YOU happy</p>
        <p className='home__title-brand'>Shy Cakes</p>
      </section>
      <Container fluid>
        <Cataloge />

        <section className='home__about'>
          <div className='home__about-desc'>
            <h3 className='home__about-desc__title'>Про мене</h3>
            <p className='home__about-desc__text'>
              Ласкаво запрошуємо до світу вишуканих тортів, що народжуються з любові та пристрасті!
              Я - Аліна, майстер, який протягом року і далі вдосконалює мистецтво випічки.
              Від елегантних весільних тортів до казкових солодощів на день народження,
              Приєднуйтесь у цій захоплюючій подорожі світом смаків та ароматів, де кожен торт розповідає свою історію, а кожен шматочок - це радість та задоволення.
            </p>
          </div>
          <div className='home__about__list'>
            <div className="">
              <p className='home__about__list-featch'>100+</p>
              <p>Клієнти</p>
            </div>
            <div className="">
              <p className='home__about__list-featch'>2023</p>
              <p>Рік заснування</p>
            </div>
          </div>
        </section>
      </Container >
    </>
  );
};

export default HomePage;