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
                    <li><a href="#">Hardwares</a></li>
                    <li><a href="#">Sobre</a></li>
                </ul>
            </nav>
            {/* Atualizando carrinho com cartCount */}
            <a className="cta" href="#" style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <ShoppingCart/> Carrinho 0x
            </a>
            <p className="menu cta">Home</p>
        </header>
    );
};

export default Header;
