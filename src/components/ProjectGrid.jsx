import React, { useState } from 'react';
import './ProjectGrid.css';

const projects = [
  { id: 7, title: 'GERMAINE DE CAPUCCINI', year: '2025', category: 'Commercial', image: '/projects/Germaine de Capuccini/DSCF5985.jpg', coords: '33°03\'S 71°35\'W' },
  { id: 8, title: 'GRAN FONDO PUCHUNCAVÍ', year: '2025', category: 'Evento', image: '/projects/Gran Fondo Puchuncaví/DSCF0520.JPG', coords: '32°43\'S 71°25\'W' },
  { id: 1, title: 'MATRIMONIOS', year: '2023-2025', category: 'Social', image: '/projects/Matrimonios/DSCF3531.JPG', coords: '33°02\'S 71°38\'W' },
  { id: 5, title: 'VIOLINISTA DANIEL CANDIA', year: '2024-2025', category: 'Editorial', image: '/projects/Violinista Daniel Candia/DSCF5124.jpg', coords: '33°04\'S 71°37\'W' },
  { id: 2, title: 'JK BURGER', year: '2024', category: 'Commercial', image: '/projects/JK Burger/DSCF4333.JPEG', coords: '33°01\'S 71°33\'W' },
  { id: 4, title: 'CLINI-QUE', year: '2024', category: 'Commercial', image: '/projects/Clini-que (Insumos Medicos)/DSCF4164.JPG', coords: '32°59\'S 71°32\'W' },
  { id: 6, title: 'BARBERÍA BLACK-JOS', year: '2024', category: 'Commercial', image: '/projects/Barbería Black-Jos/DSCF5712.jpg', coords: '33°02\'S 71°36\'W' },
  { id: 9, title: 'PADEL NUESTRO', year: '2023-2024', category: 'Commercial', image: '/projects/Padel Nuestro/PN (1).jpg', coords: '33°00\'S 71°34\'W' },
  { id: 3, title: 'CLINICA DMR', year: '2022-2024', category: 'Commercial', image: '/projects/Clinica DMR/DSCF5142.jpg', coords: '32°58\'S 71°31\'W' },
];

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
          <div key={project.id} className="project-card fade-in">
            <div className="image-container">
              <img src={project.image} alt={project.title} className="project-image" />

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
        ))}
      </div>
    </section>
  );
};

export default ProjectGrid;
