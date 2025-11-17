import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import RegisterUser from './pages/RegisterUser';
import RegisterCompany from './pages/RegisterCompany';
import Cop30Article from './pages/Cop30Article';
import GoMoovArticle from './pages/GoMoovArticle';
import About from './pages/About';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/noticias/cop30" element={<Cop30Article />} />
        <Route path="/noticias/gomoov-99food" element={<GoMoovArticle />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register-user" element={<RegisterUser />} />
        <Route path="/register-company" element={<RegisterCompany />} />
        <Route path="*" element={<div className="p-4">Página não encontrada</div>} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
