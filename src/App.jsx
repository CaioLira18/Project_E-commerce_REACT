import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import Items from './pages/Items';
import Item from './pages/Item';
import Hardwares from './pages/hardware';



const App = () => {
  const [cartCount, setCartCount] = useState(0); // Estado do carrinho
  const location = useLocation(); // Pegando a rota atual

  return (
    <div>
      <Header cartCount={cartCount} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<Item />} />
        <Route path="/Hardware" element={<Hardwares />} />
        <Route path="/items/:id" element={<Items />} />
        <Route path="/item/:id" element={<Items setCartCount={setCartCount} />} />
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
