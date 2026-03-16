import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero container fade-in">
      <h1 className="hero-title">
        Proyectos<span className="dot">.</span>
      </h1>
      <div className="hero-description">
        <p>Una curación de los trabajos fotográficos más destacados, desde eventos sociales hasta fotografía comercial y editorial.</p>
      </div>
    </section>
  );
};

export default Hero;
