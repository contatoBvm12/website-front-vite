import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import RegisterUser from './pages/RegisterUser';
import RegisterCompany from './pages/RegisterCompany';
import Cop30Article from './pages/Cop30Article';
import GoMoovArticle from './pages/GoMoovArticle';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Noticias from './pages/Noticias';
import Materia from './pages/Materia';
import Assistir from './pages/Assistir';
import Titulo from './pages/Titulo';
import Receitas from './pages/Receitas';
import Receita from './pages/Receita';

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
    // Página nova começa no topo de uma vez: o scroll-behavior suave do html é para as âncoras, não para a troca de página.
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, hash]);
  return null;
};

const App: React.FC = () => {
  return (
    <>
      <ScrollManager />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/noticias/cop30" element={<Cop30Article />} />
        <Route path="/noticias/gomoov-99food" element={<GoMoovArticle />} />
        <Route path="/noticias/:id" element={<Materia />} />
        <Route path="/series-e-filmes" element={<Assistir />} />
        <Route path="/series-e-filmes/:id" element={<Titulo />} />
        <Route path="/receitas" element={<Receitas />} />
        <Route path="/receitas/:id" element={<Receita />} />
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
