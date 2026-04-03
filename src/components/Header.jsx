import React, { useState } from 'react';
import './Header.css';

const Header = ({ projectCount, pageCount }) => {
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } else {
      setPhoneCopied(true);
      setTimeout(() => setPhoneCopied(false), 2000);
    }
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
            <span className="label">ARCHIVOS</span>
            <span className="value">{pageCount || 0}</span>
          </div>
          <div className="meta-item">
            <span className="label">UBICACIÓN</span>
            <span className="value">SANTIAGO DE CHILE</span>
          </div>
          <div className="meta-item contact-meta">
            <span className="label">CONTACTO</span>
            <span className="value">
              <span 
                className="clickable-contact" 
                onClick={() => handleCopy('fotographydiego@gmail.com', 'email')}
              >
                FOTOGRAPHYDIEGO@GMAIL.COM {emailCopied && <span className="copy-badge-header">COPIADO!</span>}
              </span>
              <span className="separator"> | </span>
              <span 
                className="clickable-contact" 
                onClick={() => handleCopy('+56961469174', 'phone')}
              >
                +56961469174 {phoneCopied && <span className="copy-badge-header">COPIADO!</span>}
              </span>
            </span>
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
