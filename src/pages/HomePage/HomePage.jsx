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
              Ласка запрошую до світу вишуканих десертів та тортів, що народжуються з любов'ю!<br/>
              Я - Аліна, майстер, який протягом декількох років вдосконалює свої навички у кондитерському мистецтві. Постійно покращую як теоретичну, так і практичну базу своїх вмінь.<br/>
              Від елегантних тортів на пам'ятні дати до казкових маленьких десертів які прикрасять кожен Ваш день.<br/>
              Приєднуйтесь до цієї захоплюючої подорожі світом смаків та ароматів, де кожен торт розповідає свою історію, а кожен шматочок - це радість та задоволення.
            </p>
          </div>
          <div className='home__about__list'>
            <div className="">
              <p className='home__about__list-featch'>100+</p>
              <p>Клієнтів</p>
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