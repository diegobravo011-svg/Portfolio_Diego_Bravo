import React from 'react';
import './SobreMi.css';

const SobreMi = ({ onBack }) => {
  return (
    <div className="sobre-mi-page fade-in">
      <div className="container">
        <div className="sobre-mi-content">
          <div className="text-section">
            <h1 className="sobre-mi-title">Sobre mí.</h1>
            
            <div className="bio-container">
              <div className="image-wrapper">
                <img src="/Foto_Diego/Foto_diego.jpeg" alt="Diego Bravo" className="profile-img" />
                <div className="profile-info">
                  <span className="profile-name">DIEGO BRAVO</span>
                  <span className="profile-role">Fotógrafo</span>
                </div>
              </div>
              
              <div className="bio-text">
                <h2 className="bio-heading">Geólogo y Fotógrafo.</h2>
                <p>
                  Paralelamente a mi formación científica, he desarrollado una sólida carrera como fotógrafo y videógrafo.
                </p>
                <p>
                  Mi lado creativo me ha llevado a colaborar profesionalmente con diversas marcas, productos y en la cobertura de eventos, un área en la que he estado activo casi 10 años y que continúa siendo una de mis grandes pasiones.
                </p>
              </div>
            </div>

            <div className="contact-footer">
              <div className="contact-col">
                <h3>Conecta</h3>
                <p>Santiago, Chile</p>
                <p>fotographydiego@gmail.com</p>
                <p>+56961469174</p>
              </div>
              <div className="contact-col">
                <h3>Social</h3>
                <p>@diegobravonn</p>
              </div>
            </div>
          </div>
        </div>
        <button className="back-btn" onClick={onBack}>← VOLVER</button>
      </div>
    </div>
  );
};

export default SobreMi;
