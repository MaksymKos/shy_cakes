import { Container, Nav, Breadcrumb, Col, Badge } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import '../../assets/styles/pages/aboutPages/AboutUsPage.scss';

const AboutUsPage = () => {
  return (
    <Container fluid className='py-5'>
      <Breadcrumb className='px-4'>
        <Breadcrumb.Item>
          <LinkContainer to="/info">
            <Nav.Link>
              Головна
            </Nav.Link>
          </LinkContainer>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
          Про магазин
        </Breadcrumb.Item>
      </Breadcrumb>

      <h1 className='text-center my-5'>Про магазин</h1>

      <section className='about-numbers'>
        <div className="number">
          <p className="number__circle">3</p>
          <p className='number__text'>годин експрес доставка по Києву нашим кур'єром, з моменту підтвердження замовлення</p>
        </div>
        <div className="number">
          <p className="number__circle">14</p>
          <p className='number__text'>областей, представництв наших магазинів</p>
        </div>
        <div className="number">
          <p className="number__circle">5</p>
          <p className='number__text'>годин доставка по Києву нашим кур'єром, з моменту підтвердження замовлення</p>
        </div>
        <div className="number">
          <p className="number__circle">33</p>
          <p className='number__text'>офлайн магазину по всій країні</p>
        </div>

      </section>
      <section className='mb-5 d-flex '>
        <div className="">
          Компанія Corks&Wine— відчуй себе людиною світу, насолоджуючись витворами виробників з п'яти континентів.
          <br />
          Corks&Wine.com.ua — це лаконічний та зрозумілий каталог товарів мережі gastro&wine market Corks&Wine.
          <br />
          Corks&Wine — це вина, міцні напої і гастрономія з усього світу, а також локальні продукти від маленьких українських виробників.
          <br />
          Детальний опис, якісні фотографії та повноцінна консультація допоможуть Вам розібратися в асортименті Corks&Wine і зробити правильний вибір. У будь-якій незрозумілій ситуації користуйтеся нашими підказками «Рекомендуємо спробувати». І звичайно ж, Ви можете розраховувати на точну і своєчасну, зручну для Вас доставку! Ми резервуємо і доставляємо повний асортимент маркету Corks&Wine на Бажана, 1е (Київ) відповідно до договору-оферти, з яким Ви погоджуєтеся при оформленні замовлення.
          <br />
          Гастромаркети Corks&Wine це більш ніж 5000 м2 торгових площ і понад 8000 найменувань товарів власного імпорту з Італії, Іспанії, Франції, Чилі, Португалії, Німеччини, Шотландії, Австралії та інших країн. Corks&Wine налагодив більше 150 прямих імпортних контрактів з європейськими виробниками, ексклюзивно поставляючи їх продукти на ринок України.
          <br />
          Усі товари сертифіковані, юридичним особам при купівлі нашої продукції надаємо необхідні документи.
        </div>
      </section>
    </Container>
  );
};

export default AboutUsPage;