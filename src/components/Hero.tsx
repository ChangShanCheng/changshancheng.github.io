import { ArrowRight, FileCheck2, Target, Clock, Coins, ScanText, Sparkles, ShieldCheck, RefreshCw, Download } from 'lucide-react';
import { profile } from '../data/profile';
import './Hero.css';

const STATS = [
  { icon: FileCheck2, label: 'AI 系統上線', value: '6', tone: 'lav' },
  { icon: Target, label: 'OCR 欄位準確率', value: '97%+', tone: 'sage' },
  { icon: Clock, label: '每年節省人時', value: '1,500+', tone: 'amber' },
  { icon: Coins, label: '每年效益 (NTD)', value: '~100 萬', tone: 'rose' },
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
            AI Application Engineer · BenQ Materials
          </div>
          <h1>
            {profile.nameZh}
            <span className="hero-en">{profile.nameEn}</span>
          </h1>
          <p className="hero-tagline">Document AI · LLM Agents · Knowledge Graph</p>
          <p className="hero-desc">
            在製造業把 <strong>OCR + LLM</strong> 從零做到六套系統正式上線的 AI 應用工程師。
            目前在明基材料負責<strong>企業知識圖譜</strong>、<strong>Claude Code 式 AI Agent</strong>
            與偏光片產線的 <strong>AI 數據分析平台</strong>。從使用者訪談、架構設計、前後端到部署與推動採用，一個人扛完整條線。
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
              <span className="live" /> 報價單 · 發票 · 健檢報告 · 關務文件 皆由同一條流程衍生
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
