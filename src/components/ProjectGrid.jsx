import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import './ProjectGrid.css';

const ProjectGrid = () => {
  return (
    <section className="projects-section container" id="proyectos">
      <div className="projects-header">
        <h2 className="section-label">PROYECTOS</h2>
        <p className="section-description">
          Repertorio de mis trabajos fotográficos más destacados: desde eventos sociales hasta fotografía comercial y editorial.
        </p>
      </div>

      <div className="grid">
        {projects.map(project => (
          <Link key={project.id} to={`/project/${project.id}`} className="project-card-link">
            <div className="project-card fade-in">
              <div className="image-container">
                <img src={project.coverImage} alt={project.title} className="project-image" />

                <div className="tech-overlay">
                  <div className="panel-crema">
                    <div className="coord-lines"></div>
                    <div className="tech-content">
                      <span className="coord-text">{project.coords}</span>
                      <div className="tech-meta">
                        <span className="label">CATEGORY:</span>
                        <span className="value">{project.category}</span>
                        <span className="label">PERIOD:</span>
                        <span className="value">{project.year}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="content">
                <h3 className="project-title">{project.title}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProjectGrid;
