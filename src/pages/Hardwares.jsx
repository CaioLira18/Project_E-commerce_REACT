import React from "react";
import { useParams } from "react-router-dom";
import { hardwareArray } from "../assets/database/hardware";
import '@fortawesome/fontawesome-free/css/all.min.css'; // Ícones do FontAwesome

const Hardwares = () => {  // Recebendo setCartCount corretamente
    const { id } = useParams(); 
    const hardware = hardwareArray.find(hardware => hardware.id === Number(id));


    return (
      <div className="item-detail">
        <img src={hardware.image} alt={hardware.name} />
        <div className="item-text">
          <h1 className="text_title">{hardware.name}</h1>
          <h1 className="text_title">Descrição:</h1>
          <h2 className="text_nome">{hardware.bio}</h2>
          <h1 className="text_title">{hardware.price}</h1>
          <button className="button_buy">
            <i className="fas fa-shopping-cart"></i>
            Finalizar Compra
          </button>
        </div>
      </div>
    );
};

export default Hardwares;
