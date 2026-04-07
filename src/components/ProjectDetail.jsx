import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);
  const [selectedImage, setSelectedImage] = useState(null);
  const [shuffledImages, setShuffledImages] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (project && project.images) {
      // Fisher-Yates shuffle
      const images = [...project.images];
      for (let i = images.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [images[i], images[j]] = [images[j], images[i]];
      }
      setShuffledImages(images);
    }
  }, [id, project]);

  if (!project) {
    return (
      <div className="project-detail-error container">
        <h2>Proyecto no encontrado</h2>
        <button onClick={() => navigate('/')} className="back-btn">VOLVER AL INICIO</button>
      </div>
    );
  }

  const openLightbox = (imgUrl) => {
    setSelectedImage(imgUrl);
    document.body.style.overflow = 'hidden'; // Prevent scroll
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // Restore scroll
  };

  return (
    <div className="project-detail fade-in">
      <header className="project-detail-header container">
        <div className="header-top">
          <button onClick={() => navigate('/')} className="back-link retro-font">
            <span className="arrow">←</span> VOLVER
          </button>
          <div className="project-meta-mini retro-font">
            <span className="category">{project.category}</span>
            <span className="separator">/</span>
            <span className="year">{project.year}</span>
          </div>
        </div>
        <h1 className="project-title-large">{project.title}</h1>
        <p className="coords-detail retro-font">{project.coords}</p>
      </header>

      <main className="gallery-container container">
        <div className="gallery-masonry">
          {shuffledImages.map((img, index) => {
            const imgUrl = `/projects/${project.folder}/${img}`;
            return (
              <div 
                key={index} 
                className="gallery-item-masonry fade-in" 
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => openLightbox(imgUrl)}
              >
                <img 
                  src={imgUrl} 
                  alt={`${project.title} - ${index + 1}`} 
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>
      </main>

      {selectedImage && (
        <div className="lightbox-overlay fade-in" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <img src={selectedImage} alt="Fullscreen view" />
            <button className="lightbox-close retro-font" onClick={closeLightbox}>CERRAR [X]</button>
          </div>
        </div>
      )}

      <footer className="project-detail-footer container">
        <button onClick={() => navigate('/')} className="back-btn-bottom retro-font">
          VOLVER AL INICIO
        </button>
        <p className="copyright">&copy; 2026 DIEGO BRAVO NILO</p>
      </footer>
    </div>
  );
};

export default ProjectDetail;
