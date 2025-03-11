import React, { useEffect, useState } from "react";
import { ShoppingCart, Gamepad, Box, Cpu, Star, User, LogOut } from "lucide-react";

const Header = ({ cont, setCont }) => {
    // Estado para controlar a autenticação do usuário
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userEmail, setUserEmail] = useState("");

    // Função para verificar o status de autenticação
    const checkAuthStatus = () => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            try {
                const parsedUser = JSON.parse(storedUser);
                console.log("Status de autenticação:", parsedUser);
                setIsAuthenticated(parsedUser.authenticated === true);
                setUserEmail(parsedUser.email || "");
            } catch (error) {
                console.error("Erro ao analisar usuário do localStorage:", error);
                setIsAuthenticated(false);
            }
        } else {
            setIsAuthenticated(false);
        }
    };

    // Verificar status de autenticação quando o componente for montado
    useEffect(() => {
        checkAuthStatus();
        
        // Adiciona um listener para detectar mudanças no localStorage
        window.addEventListener('storage', checkAuthStatus);
        
        // Cria um intervalo para verificar periodicamente (como fallback)
        const interval = setInterval(checkAuthStatus, 2000);
        
        // Limpa os listeners quando o componente for desmontado
        return () => {
            window.removeEventListener('storage', checkAuthStatus);
            clearInterval(interval);
        };
    }, []);

    // Função para realizar o logout
    const handleLogout = () => {
        localStorage.removeItem("user");
        setIsAuthenticated(false);
        setUserEmail("");
        // Redirecionar para a página inicial, se necessário
        window.location.href = "/";
    };

    console.log("Estado de autenticação no render:", isAuthenticated);

    return (
        <header>
            <a className="logo" href="/">
                <h1>E-Commerce</h1>
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
            <a className="cta" href="/Checkout" style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <ShoppingCart />
                Carrinho
            </a>
            
            {!isAuthenticated ? (
                <a className="cta" href="/Profile" style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    <User />
                    Login
                </a>
            ) : (
                <div className="user-section" style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                    <a className="cta" href="/Profile" style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                        <User />
                        {userEmail.split('@')[0]}
                    </a>
                    <button 
                        className="cta logout-btn" 
                        onClick={handleLogout} 
                        style={{ display: "flex", alignItems: "center", gap: "5px", cursor: "pointer", border: "none" }}
                    >
                        <LogOut />
                        Sair
                    </button>
                </div>
            )}
        </header>
    );
};

export default Header;