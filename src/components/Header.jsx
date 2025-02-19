import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <header>
                <a className="logo" href="/"><img src="images/logo.svg" alt="logo do e-commerce" /></a>
                <nav>
                    <ul className="nav__links">
                        <li><a href="#">Produtos</a></li>
                        <li><a href="#">Hardwares</a></li>
                        <li><a href="#">Sobre</a></li>
                    </ul>
                </nav>
                <a className="cta" href="#">Contato</a>
                <p className="menu cta">Home</p>
            </header>
            
            <div className="overlay">
                <a className="close" href="#">&times;</a>
                <div className="overlay__content">
                    <a href="#">Services</a>
                    <a href="#">Projects</a>
                    <a href="#">About</a>
                </div>
            </div>
        </>
    );
};

export default Header;
