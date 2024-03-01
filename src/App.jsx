import Footer from './components/Footer';
import Header from './components/Header';
import { Outlet } from "react-router-dom";
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
