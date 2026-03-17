import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ProjectGrid from './components/ProjectGrid'
import SobreMi from './components/SobreMi'
import WelcomeScreen from './components/WelcomeScreen'
import './App.css'

function App() {
  const [view, setView] = useState('main'); // 'main' or 'sobre-mi'
  const [showWelcome, setShowWelcome] = useState(true);
  
  const projectCount = 6;
  const pageCount = 6;

  if (showWelcome) {
    return <WelcomeScreen onEnter={() => setShowWelcome(false)} />;
  }

  return (
    <div className="app">
      {view === 'main' ? (
        <>
          <Header projectCount={projectCount} pageCount={pageCount} />
          <main>
            <ProjectGrid />
            <div className="container footer-actions">
              <button className="about-btn" onClick={() => setView('sobre-mi')}>
                SOBRE MI
              </button>
            </div>
          </main>
          <footer className="container footer">
            <p>&copy; 2026 DIEGO BRAVO NILO. TODOS LOS DERECHOS RESERVADOS.</p>
          </footer>
        </>
      ) : (
        <SobreMi onBack={() => setView('main')} />
      )}
    </div>
  )
}

export default App
