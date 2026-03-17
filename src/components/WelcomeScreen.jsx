import React from 'react';
import MountainHero from './MountainHero';

const WelcomeScreen = ({ onEnter }) => {
  return <MountainHero onEnter={onEnter} />;
};

export default WelcomeScreen;
