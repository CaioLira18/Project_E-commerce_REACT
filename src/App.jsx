import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import Items from './pages/items';
import Item from './pages/Item';
import Hardwares from './pages/hardware';



const App = () => {
  const location = useLocation(); // Pegando a rota atual

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<Item />} />
        <Route path="/Hardware" element={<Hardwares />} />
        <Route path="/items/:id" element={<Items />} />





      </Routes>
    
      {/* Exibir LeiaMais apenas na página de Notícias */}
      {location.pathname.startsWith("/Noticias") && <LeiaMais />}

      <Footer />
    </div>
  );
};

// Envolve tudo corretamente no BrowserRouter
const Main = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default Main;
