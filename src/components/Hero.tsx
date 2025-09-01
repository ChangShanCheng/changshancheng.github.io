import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            Hi, I'm <span className="highlight">張善程</span>
          </h1>
          <h2>AI Application Developer</h2>
          <p className="hero-description">
            專精於 <strong>OCR + LLM 識別技術</strong> 的 AI 應用軟體研發工程師。
            致力於將人工智慧技術轉化為實用的軟體解決方案，
            讓文字識別和智能理解為企業和用戶創造價值。
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">3+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat">
              <span className="stat-number">95%</span>
              <span className="stat-label">OCR Accuracy</span>
            </div>
          </div>
          <div className="hero-buttons">
            <button 
              className="btn primary"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              查看作品
            </button>
            <button 
              className="btn secondary"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              聯絡我
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="ai-animation">
            <div className="neural-network">
              <div className="node"></div>
              <div className="node"></div>
              <div className="node"></div>
              <div className="node"></div>
              <div className="connection"></div>
              <div className="connection"></div>
              <div className="connection"></div>
            </div>
            <div className="tech-badges">
              <span className="badge">OCR</span>
              <span className="badge">LLM</span>
              <span className="badge">AI</span>
              <span className="badge">Deep Learning</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;