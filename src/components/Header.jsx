import React, { useState } from "react";
import { ShoppingCart, Gamepad, Box, Cpu, Star } from "lucide-react"; // Ícones para cada link





const Header = ({cont, setCont}) => {  // Recebendo cartCount corretamente

    return (
        <header>
            <a className="logo" href="/">
                <h1><img src="images/logo.svg" alt="" />Logo</h1>
            </a>
            <nav>
                <ul className="nav__links">
                    <li><a href="/">Produtos</a></li>
                    <li><a href="/Hardwares">Hardwares </a></li>
                    <li><a href="/items"><Star className="nav__link__icons" />Populares</a></li>
                    <li><a href="#"><Gamepad className="nav__link__icons" />Jogos</a></li>
                </ul>
            </nav>
            {}
            <a className="cta" href="#" style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <ShoppingCart/> <a href="">Carrinho {cont}x</a>
            </a>
        </header>
    );
};

export default Header;
