import React, { useState, useEffect } from 'react';
import SingleItem from './SingleItem';
import { Link, useLocation } from 'react-router-dom';

const ItemList = ({ title, itemsArray = [], idPath }) => {
    const location = useLocation();
    const isItemsPage = location.pathname === "/items"; // Verifica se está na página completa

    const [showAll, setShowAll] = useState(isItemsPage); // Mostra tudo se já estiver em "/items"

    // Atualiza o estado se o usuário navegar diretamente para "/items"
    useEffect(() => {
        if (isItemsPage) {
            setShowAll(true);
        }
    }, [isItemsPage]);

    // Exibe todos os itens se showAll for true, senão mostra os primeiros 4
    const visibleItems = showAll ? itemsArray : itemsArray.slice(0, 4);

    return (
        <div className="item-list">
            <div className="item-list-header">
                <div className="main__texts">
                    <h2>{title} Populares</h2>
                    {/* Se estiver na página completa, exibe "Voltar ao Menu", senão "Mostrar Tudo" */}
                    {showAll ? (
                        <a href="/">Voltar ao Menu</a>
                    ) : (
                        <button className="main__link" onClick={() => setShowAll(true)}>Mostrar Tudo</button>
                    )}
                </div>    
            </div>
            <div className="item-list__container">
                {visibleItems.map((currObj, index) => 
                    (<SingleItem 
                        idPath={idPath}
                        {...currObj}
                        key={`${title}-${index}`} 
                    />)
                )}
            </div>      
        </div>
    );
}

export default ItemList;
