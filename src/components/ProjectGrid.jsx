import React, { useState } from 'react';
import './ProjectGrid.css';

const projects = [
  { id: 1, title: 'BARBERÍA BLACK-JOS', year: '2024', category: 'Commercial', image: '/projects/Barbería Black-Jos/DSCF2076.JPG' },
  { id: 2, title: 'CLINI-QUE (INSUMOS MEDICOS)', year: '2024', category: 'Commercial', image: '/projects/Clini-que (Insumos Medicos)/DSCF4164.JPG' },
  { id: 3, title: 'CLINICA DMR', year: '2022-2024', category: 'Commercial', image: '/projects/Clinica DMR/DSCF0093.jpg' },
  { id: 4, title: 'GERMAINE DE CAPUCCINI', year: '2024', category: 'Commercial', image: '/projects/Germaine de Capuccini/DSCF5978.jpg' },
  { id: 5, title: 'GRAN FONDO PUCHUNCAVÍ', year: '2025', category: 'Evento', image: '/projects/Gran Fondo Puchuncaví/DSCF0119.JPG' },
  { id: 6, title: 'JK BURGER', year: '2024', category: 'Commercial', image: '/projects/JK Burger/DSCF2080.JPG' },
  { id: 7, title: 'MATRIMONIOS', year: '2024', category: 'Social', image: '/projects/Matrimonios/DSCF1262.JPG' },
  { id: 8, title: 'PADEL NUESTRO', year: '2024', category: 'Commercial', image: '/projects/Padel Nuestro/DSCF2054.JPG' },
  { id: 9, title: 'VIOLINISTA DANIEL CANDIA', year: '2024', category: 'Editorial', image: '/projects/Violinista Daniel Candia/DSCF5124.jpg' },
];

const ProjectGrid = () => {
  return (
    <section className="projects-section container" id="proyectos">
      <div className="projects-header">
        <h2 className="section-label">PROYECTOS</h2>
        <p className="section-description">
          Repertorio de los trabajos fotograficos mas destacados, desde eventos sociales hasta fotografia comercial y editioral.
        </p>
      </div>
      
      <div className="grid">
        {projects.map(project => (
          <div key={project.id} className="project-card fade-in">
            <div className="image-container">
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
            <div className="content">
              <h3 className="project-title">{project.title}</h3>
              <div className="meta">
                <span className="category">{project.category}</span>
                <span className="year">{project.year}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectGrid;
