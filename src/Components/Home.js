import React from 'react';
import './Home.css'; // Importe o arquivo CSS correspondente
import HeroImage from './beauty clinic.png'; // Substitua pelo caminho correto da imagem

const Home = () => {
  return (
    <section className="hero">
      <img src={HeroImage} alt="Imagem Hero" className="hero-image" /> {/* Adiciona a imagem */}
      <h1>Garantindo o seu êxtase, Lupanar ideal para o seu patamar.</h1>
      <div className="btn-group">
        <button className="btn-filled-dark">
          <span className="material-symbols-outlined">Conecte-se</span>
        </button>
      </div>
      <div className="home-container">
      <div className="text-container">
        <h2>Quem somos nós?</h2>
        <p>Clique para saber mais!</p>
        <button onClick={() => { /* Adicione a função de clique aqui */ }}>Clique aqui!</button>
      </div>
      <div className="image-container">
        <img src="./" alt="Imagem" />
      </div>
    </div>
    </section>
    
  );
};

export default Home;