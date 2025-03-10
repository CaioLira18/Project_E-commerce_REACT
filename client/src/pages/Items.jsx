import React from "react";
import { useParams } from "react-router-dom";
import { itemsArray } from "../assets/database/items";

const Items = ({ cont, cont_increment }) => { // Recebendo as props corretamente
    const { id } = useParams();
    const item = itemsArray.find(item => item.id === Number(id));

    return (
        <div>
            <div className="item-detail">
                <img src={item.image} alt={item.name} />
                <div className="item-text">
                    <h1 className="text_title">{item.name}</h1>
                    <h1 className="text_title">Descrição:</h1>
                    <h2 className="text_nome">{item.bio}</h2>
                    <h1 className="text_title">{item.price}</h1>
                    <button className="button_buy" onClick={cont_increment}>
                        <i className="fas fa-shopping-cart"></i>
                        Adicionar ao Carrinho
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Items;
