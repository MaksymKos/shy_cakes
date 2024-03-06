import Footer from './components/Footer/Footer';
import { Outlet } from "react-router-dom";
import Header from './components/Header/Header';
import './assets/styles/App.scss';


function App() {
  return (
    <>
      <Header />
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
