import React from 'react';
import './Header.css';

const Header = ({ projectCount, pageCount }) => {
  return (
    <header className="header container">
      <div className="header-top">
        <h1 className="main-name">DIEGO BRAVO NILO</h1>
        <div className="info-meta-row">
          <div className="meta-item">
            <span className="label">V.1.0</span>
          </div>
          <div className="meta-item">
            <span className="label">PROYECTOS</span>
            <span className="value">{projectCount || 0}</span>
          </div>
          <div className="meta-item">
            <span className="label">PÁGINAS</span>
            <span className="value">{pageCount || 0}</span>
          </div>
          <div className="meta-item">
            <span className="label">UBICACIÓN</span>
            <span className="value">SANTIAGO DE CHILE</span>
          </div>
          <div className="meta-item">
            <span className="label">CONTACTO</span>
            <span className="value">FOTOGRAPHYDIEGO@GMAIL.COM | +56961469174</span>
          </div>
          <div className="meta-item">
            <span className="label">SOCIAL</span>
            <span className="value">@DIEGOBRAVONN / @DIEGOTOOKTHEPIC</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
