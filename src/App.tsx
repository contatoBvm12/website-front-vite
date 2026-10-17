import React, { useEffect } from 'react';
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import RegisterUser from './pages/RegisterUser';
import RegisterCompany from './pages/RegisterCompany';
import Cop30Article from './pages/Cop30Article';
import GoMoovArticle from './pages/GoMoovArticle';
import About from './pages/About';

/** Ao trocar de página, volta ao topo; com âncora (/#indice), vai até a sala. */
const ScrollManager: React.FC = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
};

const NotFound: React.FC = () => (
  <main className="bg-nevoa">
    <div className="contenedor flex min-h-[60svh] flex-col justify-center py-24">
      <p className="olho text-ardosia">Erro 404</p>
      <h1 className="titulo mt-4 text-[clamp(44px,6vw,96px)]">Esta sala está vazia.</h1>
      <p className="mt-6 font-serif text-[20px] text-ardosia">A página que você procura não existe ou mudou de lugar.</p>
      <Link to="/" className="olho mt-10 self-start border-b-2 border-marinho pb-1.5">
        Voltar à entrada
      </Link>
    </div>
  </main>
);

const App: React.FC = () => {
  return (
    <>
      <ScrollManager />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/noticias/cop30" element={<Cop30Article />} />
        <Route path="/noticias/gomoov-99food" element={<GoMoovArticle />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register-user" element={<RegisterUser />} />
        <Route path="/register-company" element={<RegisterCompany />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
