import React from 'react';
import './navbar.css';

function Navbar() {
    return (
        <nav>
            <div id="logo">
                <a href="/"><img src={require('./logo.png')} alt="Logo" /></a>
            </div>
            <ul className="navigation-menu">
                <li><a href="#inicio">Início</a></li>
                <li><a href="#suites">Suítes</a></li>
                <li><a href="#aperitivos">Aperitivos e Bebidas</a></li>
                <li><a href="#sobre">Saiba mais</a></li>
                <li><a href="#funcionarios">Funcionarios</a></li>
            </ul>
            <div className="btn-group">
                <button className="btn-outline-dark btn-hover-color"><span className="material-symbols-outlined">Faça o seu login</span></button>
            </div>
        </nav>
    );
}

export default Navbar;
