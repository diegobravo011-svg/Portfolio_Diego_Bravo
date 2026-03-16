import React, { useState } from 'react';
import './ProjectGrid.css';

const projects = [
  { id: 1, title: 'MATRIMONIO EMILIA & BENJAMÍN', year: '2025', category: 'Social', image: '/projects/Proyecto_1/DSCF2002.JPG' },
  { id: 2, title: 'JK BURGER', year: '2024', category: 'Commercial', image: '/projects/Proyecto_2/DSCF2034.JPG' },
  { id: 3, title: 'CLINICA DMR', year: '2022-2024', category: 'Commercial', image: '/projects/Proyecto_3/DSCF2076.JPG' },
  { id: 4, title: 'CLINI-QUE', year: '2024', category: 'Commercial', image: '/projects/Proyecto_4/DSCF2085.JPG' },
  { id: 5, title: 'HOTEL LAS CRUCES', year: '2024', category: 'Personal', image: '/projects/Proyecto_5/DSCF2080.JPG' },
  { id: 6, title: 'DANIEL CANDIA', year: '2024', category: 'Editorial', image: '/projects/Proyecto_6/DSCF2252.JPG' },
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
