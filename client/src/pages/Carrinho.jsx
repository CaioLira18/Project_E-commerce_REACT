import React from "react";
import { useParams } from "react-router-dom";
import { hardwareArray } from "../assets/database/hardware";
import '@fortawesome/fontawesome-free/css/all.min.css'; // Ícones do FontAwesome

const Carrinho = () => {  // Recebendo setCartCount corretamente
    const { id } = useParams(); 
    const hardware = hardwareArray.find(hardware => hardware.id === Number(id));

    return (
      <div className="item-detail">
            <h1>teste</h1>
      </div>
    );
};

export default Carrinho;
