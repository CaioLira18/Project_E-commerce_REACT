import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import Items from './pages/Items';
import Item from './pages/Item';
import Hardwares from "./pages/Hardwares";
import Hardware from "./pages/Hardware";



const App = () => {
  // Usando o useState para gerenciar o estado da quantidade do carrinho
  const [cont, setCont] = useState(0);
  
  const cont_increment = () => {
      setCont(cont + 1); // Atualiza a contagem com o valor incrementado
  };
  
  const location = useLocation(); // Pegando a rota atual
  
  return (
    <div>
      <Header cont={cont}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<Items cont={cont} cont_increment={cont_increment} />} />
        <Route path="/Hardwares" element={<Hardware />} />
        <Route path="/Hardware/:id" element={<Hardwares />} />
        <Route path="/items/:id" element={<Items cont={cont} cont_increment={cont_increment} />} />
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
