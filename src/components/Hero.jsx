import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero container fade-in">
      <h1 className="hero-title">
        Proyectos<span className="dot">.</span>
      </h1>
      <div className="hero-description">
        <p>Selección de mi trabajo visual más destacado. Un recorrido por mis proyectos en fotografía social, comercial y editorial.</p>
      </div>
    </section>
  );
};

export default Hero;
