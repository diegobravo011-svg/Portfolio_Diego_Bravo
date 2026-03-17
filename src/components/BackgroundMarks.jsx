import React from 'react';
import './BackgroundMarks.css';

const BackgroundMarks = () => {
  // Generamos una serie de posiciones para las marcas
  const marks = [
    { top: '5%', left: '5%' },
    { top: '5%', right: '5%' },
    { bottom: '5%', left: '5%' },
    { bottom: '5%', right: '5%' },
    { top: '50%', left: '2%' },
    { top: '20%', right: '10%' },
    { bottom: '30%', left: '15%' },
    { top: '15%', left: '40%' },
    { bottom: '45%', right: '3%' }
  ];

  return (
    <div className="background-marks-container" aria-hidden="true">
      {marks.map((style, index) => (
        <div 
          key={index} 
          className="crop-mark" 
          style={style}
        >
          <div className="mark-h"></div>
          <div className="mark-v"></div>
        </div>
      ))}
    </div>
  );
};

export default BackgroundMarks;
