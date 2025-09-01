import { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-brand">
          <h2>張善程</h2>
          <span>AI Application Developer</span>
        </div>
        
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><a onClick={() => scrollToSection('hero')}>首頁</a></li>
          <li><a onClick={() => scrollToSection('skills')}>技能</a></li>
          <li><a onClick={() => scrollToSection('projects')}>作品</a></li>
          <li><a onClick={() => scrollToSection('contact')}>聯絡</a></li>
        </ul>
        
        <div 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;