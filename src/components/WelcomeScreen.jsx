import React from 'react';
import MountainMonochromeVibe from './MountainMonochromeVibe';
import './WelcomeScreen.css';

const WelcomeScreen = ({ onEnter }) => {
  return (
    <div className="welcome-screen" onClick={onEnter}>
      <div className="welcome-content">
        <MountainMonochromeVibe />
        <h1 className="welcome-title">BIENVENIDO</h1>
        <p className="welcome-hint">Haz clic en cualquier lugar para entrar</p>
      </div>
    </div>
  );
};

export default WelcomeScreen;
