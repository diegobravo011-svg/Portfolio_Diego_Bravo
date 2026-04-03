import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="project-detail-error container">
        <h2>Proyecto no encontrado</h2>
        <button onClick={() => navigate('/')} className="back-btn">VOLVER AL INICIO</button>
      </div>
    );
  }

  return (
    <div className="project-detail fade-in">
      <header className="project-detail-header container">
        <div className="header-top">
          <button onClick={() => navigate('/')} className="back-link">
            <span className="arrow">←</span> VOLVER
          </button>
          <div className="project-meta-mini">
            <span className="category">{project.category}</span>
            <span className="separator">/</span>
            <span className="year">{project.year}</span>
          </div>
        </div>
        <h1 className="project-title-large">{project.title}</h1>
        <p className="coords-detail">{project.coords}</p>
      </header>

      <main className="gallery-container container">
        <div className="gallery-grid">
          {project.images.map((img, index) => (
            <div key={index} className="gallery-item fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
              <img 
                src={`/projects/${project.folder}/${img}`} 
                alt={`${project.title} - ${index + 1}`} 
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </main>

      <footer className="project-detail-footer container">
        <button onClick={() => navigate('/')} className="back-btn-bottom">
          VOLVER AL INICIO
        </button>
        <p className="copyright">&copy; 2026 DIEGO BRAVO NILO</p>
      </footer>
    </div>
  );
};

export default ProjectDetail;
