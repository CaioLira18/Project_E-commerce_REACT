import React from "react";
import { useParams } from "react-router-dom";
import { itemsArray } from "../assets/database/items";
import '@fortawesome/fontawesome-free/css/all.min.css'; // Importando o Font Awesome

const Items = () => {
    const { id } = useParams(); // Pega o ID da URL
    const items = itemsArray.find(item => item.id === Number(id)); // Busca o herói pelo ID

    return (
      <div className="item-detail">
        <img src={items.image} alt={items.name} />
        <div className="item-text">
          <h1 className="text_title">{items.name}</h1>
          <h1 className="text_title">Descrição:</h1>
          <h2 className="text_nome">{items.bio}</h2>
          <h1 className="text_title">{items.price}</h1>
          <button className="button_buy">
            <i className="fas fa-shopping-cart"></i>
            Finalizar Compra
          </button>
        </div>
      </div>
    );
};

export default Items;
