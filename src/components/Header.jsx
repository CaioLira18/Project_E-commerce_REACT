import React from "react";
import { ShoppingCart } from "lucide-react"; // Ícone do carrinho
import { Link } from "lucide-react";

const Header = ({ cartCount, id }) => {  // Recebendo cartCount corretamente
    return (
        <header>
            <a className="logo" href="/">
                <h1><img src="images/logo.svg" alt="" />Logo</h1>
            </a>
            <nav>
                <ul className="nav__links">
                    <li><a href="/">Produtos</a></li>
                    <li><a href="/Hardwares">Hardwares</a></li>
                    <li><a href="/items">Populares</a></li>
                    <li><a href="#">Jogos</a></li>
                </ul>
            </nav>
            {}
            <a className="cta" href="#" style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <ShoppingCart/> Carrinho 0x
            </a>
        </header>
    );
};

export default Header;
