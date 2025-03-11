import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { hardwareArray } from "../assets/database/hardware";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Hardwares = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const cont_increment = () => {
    setCont(cont + 1); // Atualiza a contagem com o valor incrementado
};

  const hardware = hardwareArray.find(hardware => hardware.id === Number(id));
  const [quantity, setQuantity] = useState(1);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  
  // Verificar se o usuário está logado
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setIsUserLoggedIn(parsedUser.authenticated === true);
    }
  }, []);

  // Função para adicionar ao carrinho
  const addToCart = () => {
    // Verificar se o hardware existe
    if (!hardware) {
      alert("Produto não encontrado!");
      return;
    }
    
    // Obter o carrinho atual do localStorage ou criar um novo
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    // Verificar se o item já está no carrinho
    const existingItemIndex = cart.findIndex(item => item.id === hardware.id);
    
    if (existingItemIndex !== -1) {
      // Se já existe, atualizar a quantidade
      cart[existingItemIndex].quantity += quantity;
    } else {
      // Se não existe, adicionar novo item
      cart.push({
        id: hardware.id,
        name: hardware.name,
        price: hardware.price,
        image: hardware.image,
        quantity: quantity
      });
    }
    
    // Salvar o carrinho atualizado no localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
    
    // Atualizar contador global de itens (se existir)
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    localStorage.setItem("cartCount", totalItems);
    
    // Disparar evento para atualizar o Header
    window.dispatchEvent(new CustomEvent('cartUpdated', { detail: { count: totalItems } }));
    
    alert(`${hardware.name} adicionado ao carrinho!`);
  };
  
  // Função para finalizar a compra
  const finalizePurchase = () => {
    if (!isUserLoggedIn) {
      alert("Por favor, faça login para finalizar a compra.");
      navigate("/login");
      return;
    }
    
    // Adicionar ao carrinho primeiro
    addToCart();
    
    // Navegar para a página de checkout
    navigate("/checkout");
  };
  
  if (!hardware) {
    return <div className="item-detail">Produto não encontrado</div>;
  }

  return (
    <div className="item-detail">
      <img src={hardware.image} alt={hardware.name} />
      <div className="item-text">
        <h1 className="text_title">{hardware.name}</h1>
        <h1 className="text_title">Descrição:</h1>
        <h2 className="text_nome">{hardware.bio}</h2>
        <h1 className="text_title">{hardware.price}</h1>
        
        <div className="quantity-selector" style={{ marginBottom: "15px" }}>
          <button 
            onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
            style={{ padding: "5px 10px", background: "#f0f0f0", border: "1px solid #ddd" }}
          >
            -
          </button>
          <span style={{ margin: "0 10px" }}>{quantity}</span>
          <button 
            onClick={() => setQuantity(prev => prev + 1)}
            style={{ padding: "5px 10px", background: "#f0f0f0", border: "1px solid #ddd" }}
          >
            +
          </button>
        </div>
        <button className="button_buy" onClick={() => { addToCart(); cont_increment(); }} style={{ marginBottom: "10px" }}>
          <i className="fas fa-shopping-cart"></i>
          Adicionar ao Carrinho
        </button>

        
      </div>
    </div>
  );
};

export default Hardwares;