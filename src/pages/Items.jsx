import React from "react";
import { useParams } from "react-router-dom";
import { itemsArray } from "../assets/database/items";
import '@fortawesome/fontawesome-free/css/all.min.css'; // Ícones do FontAwesome

const Items = ({ setCartCount }) => {  // Recebendo setCartCount corretamente
    const { id } = useParams(); 
    const item = itemsArray.find(item => item.id === Number(id));


    return (
      <div className="item-detail">
        <img src={item.image} alt={item.name} />
        <div className="item-text">
          <h1 className="text_title">{item.name}</h1>
          <h1 className="text_title">Descrição:</h1>
          <h2 className="text_nome">{item.bio}</h2>
          <h1 className="text_title">{item.price}</h1>
          <button className="button_buy">
            <i className="fas fa-shopping-cart"></i>
            Finalizar Compra
          </button>
        </div>
      </div>
    );
};

export default Items;
