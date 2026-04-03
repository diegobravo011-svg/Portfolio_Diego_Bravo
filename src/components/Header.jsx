import React, { useState } from 'react';
import './Header.css';

const Header = ({ projectCount, pageCount }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
          <div className="meta-item clickable" onClick={() => handleCopy('fotographydiego@gmail.com')}>
            <span className="label">CONTACTO {copied && <span className="copy-badge">COPIADO!</span>}</span>
            <span className="value email-value">FOTOGRAPHYDIEGO@GMAIL.COM | +56961469174</span>
          </div>
          <div className="meta-item">
            <span className="label">SOCIAL</span>
            <span className="value">
              <a href="https://www.instagram.com/diegobravonn/" target="_blank" rel="noopener noreferrer" className="social-link">@DIEGOBRAVONN</a> / 
              <a href="https://www.instagram.com/diegotookthepic/" target="_blank" rel="noopener noreferrer" className="social-link"> @DIEGOTOOKTHEPIC</a>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
