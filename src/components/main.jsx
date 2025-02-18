import React from "react";
import ItemList from "./ItemList";
import { itemsArray } from "../assets/database/items";
import { hardwareArray } from "../assets/database/hardware";
import { Link, useLocation } from "react-router-dom";

const Main = ({ type }) => {
    const location = useLocation();
    const isHome = location.pathname === "/" || location.pathname === "";

    return (
        <div className="main">
            {/* Item List de items  */}
            {type === "items" || type === undefined ? (
                <ItemList 
                    title="Items" 
                    items={itemsArray.length} 
                    itemsArray={itemsArray} 
                    path='/items' 
                    idPath="/Items"
                />
            ) : <></>}
            {type === "hardware" || type === undefined ? (
                <ItemList 
                    title="Hardware" 
                    items={hardwareArray.length} 
                    itemsArray={hardwareArray} 
                    path='/hardware' 
                    idPath="/hardware"
                />
            ) : <></>}
        </div>
    );
};

export default Main;
