import React from "react";
import { ShoppingCart, Gamepad, Box, Cpu, Star } from "lucide-react";

const Header = ({ cont, setCont }) => {
    return (
        <header>
            <a className="logo" href="/">
                <h1>
                    <img src="images/logo.svg" alt="" />Logo
                </h1>
            </a>
            <nav>
                <ul className="nav__links">
                    <li>
                        <a href="/"><Box className="nav__link_icons" />Produtos</a>
                    </li>
                    <li>
                        <a href="/Hardwares"><Cpu className="nav__link_icons" />Hardwares</a>
                    </li>
                    <li>
                        <a href="/items"><Star className="nav__link__icons" />Populares</a>
                    </li>
                    <li>
                        <a href="#"><Gamepad className="nav__link__icons" />Jogos</a>
                    </li>
                </ul>
            </nav>
            <a className="cta" href="/Carrinho" style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <ShoppingCart className="nav__link__icons" />
                Carrinho {cont}x
            </a>
            <a className="cta" href="/Login" style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                Login 
            </a>
        </header>
    );
};

export default Header;
