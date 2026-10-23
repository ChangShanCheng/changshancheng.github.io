import { ArrowRight, FileCheck2, Target, Clock, Coins, ScanText, Sparkles, ShieldCheck, RefreshCw, Download } from 'lucide-react';
import { profile } from '../data/profile';
import './Hero.css';

const STATS = [
  { icon: Coins, label: '兩年免外購 AutoML (NTD)', value: '415 萬', tone: 'lav' },
  { icon: Target, label: '每年有形效益 (NTD)', value: '~100 萬', tone: 'sage' },
  { icon: Clock, label: '每年節省人時', value: '1,500+', tone: 'amber' },
  { icon: FileCheck2, label: '產線分析流程平台化', value: '6 支', tone: 'rose' },
];

const PIPELINE = [
  { icon: ScanText, label: 'OCR' },
  { icon: Sparkles, label: 'LLM 提取' },
  { icon: ShieldCheck, label: '驗證' },
  { icon: RefreshCw, label: '使用者回饋' },
];

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-glow a" />
      <div className="hero-glow b" />
      <div className="container hero-grid">
        <div className="hero-text">
          <div className="hero-eyebrow">
            <span className="dot" />
            AI Application R&D Engineer · BenQ Materials
          </div>
          <h1>
            {profile.nameZh}
            <span className="hero-en">{profile.nameEn}</span>
          </h1>
          <p className="hero-tagline">LLM Agents · AI 數據分析 · Document AI</p>
          <p className="hero-desc">
            在製造業設計、驗證並維運企業 AI 系統的 AI 應用工程師：主導明基材料的
            <strong>AI 數據分析平台</strong>（仿 Claude Code 的 skill 架構，產線每天在用），並從零建立
            <strong>文件 AI（OCR + LLM）</strong>。每套系統都先用測試集驗過才上線。
          </p>
          <div className="hero-actions">
            <button className="btn primary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              查看專案 <ArrowRight size={16} />
            </button>
            <a className="btn ghost" href={profile.resumePdfZh} target="_blank" rel="noopener noreferrer">
              <Download size={16} /> 下載履歷
            </a>
          </div>
        </div>

        <div className="hero-panel reveal in">
          <div className="panel-bar">
            <span /><span /><span />
            <em>Enterprise AI · 成效總覽</em>
          </div>
          <div className="panel-stats">
            {STATS.map((s) => (
              <div key={s.label} className="stat-card">
                <span className={`icon-tile ${s.tone}`}><s.icon size={20} strokeWidth={1.8} /></span>
                <div>
                  <div className="stat-label">{s.label}</div>
                  <div className="stat-value">{s.value}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="panel-pipeline">
            <div className="pipeline-title">可複用的文件 AI 流程</div>
            <div className="pipeline">
              {PIPELINE.map((p, i) => (
                <div key={p.label} className="pipeline-step">
                  <span className="step"><p.icon size={15} strokeWidth={2} />{p.label}</span>
                  {i < PIPELINE.length - 1 && <ArrowRight size={14} className="arrow" />}
                </div>
              ))}
            </div>
            <div className="pipeline-note">
              <span className="live" /> 報價單 · 發票 · 健檢報告 皆由同一條流程衍生
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
