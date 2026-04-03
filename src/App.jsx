import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import ProjectGrid from './components/ProjectGrid'
import SobreMi from './components/SobreMi'
import ProjectDetail from './components/ProjectDetail'
import WelcomeScreen from './components/WelcomeScreen'
import { projects } from './data/projects'
import './App.css'

function AppContent() {
  const navigate = useNavigate();
  const projectCount = projects.length;
  const pageCount = projects.length + 2; // Home + Sobre Mi + Proyectos

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={
          <>
            <Header projectCount={projectCount} pageCount={pageCount} />
            <main>
              <ProjectGrid />
              <div className="container footer-actions">
                <Link to="/sobre-mi" className="about-btn-link">
                  <button className="about-btn">
                    SOBRE MI
                  </button>
                </Link>
              </div>
            </main>
            <footer className="container footer">
              <p>&copy; 2026 DIEGO BRAVO NILO. TODOS LOS DERECHOS RESERVADOS.</p>
            </footer>
          </>
        } />
        
        <Route path="/sobre-mi" element={
          <SobreMi onBack={() => navigate('/')} />
        } />

        <Route path="/project/:id" element={
          <ProjectDetail />
        } />
      </Routes>
    </div>
  )
}

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  if (showWelcome) {
    return <WelcomeScreen onEnter={() => setShowWelcome(false)} />;
  }

  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
