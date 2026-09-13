import { Cpu, Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { profile } from '../data/profile';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="brand-row">
              <span className="icon-tile brand"><Cpu size={20} /></span>
              <div>
                <div className="fname">{profile.nameZh} · {profile.nameEn}</div>
                <div className="ftitle">{profile.title}</div>
              </div>
            </div>
            <p>專注於 Document AI、LLM Agent 與企業知識圖譜的 AI 應用工程師，把 AI 做成部門真的會用的系統。</p>
            <div className="footer-social">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GithubIcon size={18} /></a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedinIcon size={18} /></a>
              <a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={18} /></a>
            </div>
          </div>
          <div className="footer-col">
            <h4>導覽</h4>
            <button onClick={() => go('hero')}>首頁</button>
            <button onClick={() => go('experience')}>經歷</button>
            <button onClick={() => go('skills')}>技能</button>
            <button onClick={() => go('projects')}>專案</button>
            <button onClick={() => go('contact')}>聯絡</button>
          </div>
          <div className="footer-col">
            <h4>專業領域</h4>
            <span>OCR + LLM 文件自動化</span>
            <span>LLM Agent / Harness Engineering</span>
            <span>知識圖譜與 RAG</span>
            <span>全端與雲端系統交付</span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {year} {profile.nameZh} {profile.nameEn}. Built with React + TypeScript + Vite · GitHub Pages</span>
          <button className="to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="回到頂部">
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
