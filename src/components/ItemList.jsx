import React from 'react';
import SingleItem from './SingleItem';
import { Link } from 'react-router-dom';

const ItemList = ({ title, items, itemsArray = [], path, idPath }) => {
    return (
        <div className="item-list">
            <div className="item-list-header">
                <div className="main__texts">
                    <h2>{title} Populares</h2>
                    <Link to={idPath} className="main__link">Mostrar Tudo</Link>
                </div>    
            </div>
            <div className="item-list__container">
                {itemsArray.filter((_, index) => index < items).map((currObj, index) => 
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
