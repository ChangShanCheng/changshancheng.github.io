import { useEffect, useState } from 'react';
import { Cpu, Menu, X } from 'lucide-react';
import { profile } from '../data/profile';
import './Header.css';

const NAV = [
  { id: 'hero', label: '首頁' },
  { id: 'experience', label: '經歷' },
  { id: 'skills', label: '技能' },
  { id: 'projects', label: '專案' },
  { id: 'contact', label: '聯絡' },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav">
        <button className="brand" onClick={() => go('hero')} aria-label="回到首頁">
          <span className="icon-tile brand small"><Cpu size={18} /></span>
          <span className="brand-text">
            <span className="brand-name">{profile.nameZh}</span>
            <span className="brand-sub">{profile.title}</span>
          </span>
        </button>

        <nav className={`nav-menu ${open ? 'open' : ''}`}>
          {NAV.map((n) => (
            <button key={n.id} onClick={() => go(n.id)}>{n.label}</button>
          ))}
          <a className="nav-cta" href={profile.resumePdfZh} target="_blank" rel="noopener noreferrer">
            下載履歷
          </a>
        </nav>

        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="選單">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
