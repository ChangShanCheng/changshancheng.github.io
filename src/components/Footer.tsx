import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>張善程</h3>
            <p>AI Application Developer</p>
            <p className="footer-description">
              專精於 OCR + LLM 識別技術的軟體工程師，
              致力於創造實用的 AI 解決方案。
            </p>
          </div>
          
          <div className="footer-section">
            <h4>快速連結</h4>
            <ul>
              <li><a onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}>首頁</a></li>
              <li><a onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}>技能</a></li>
              <li><a onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>作品</a></li>
              <li><a onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>聯絡</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>專業領域</h4>
            <ul>
              <li>OCR 文字識別</li>
              <li>Large Language Models</li>
              <li>Computer Vision</li>
              <li>全端網頁開發</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>聯絡資訊</h4>
            <div className="contact-info">
              <p>📧 changshancheng@example.com</p>
              <p>📱 +886 912-345-678</p>
              <p>📍 台北市, 台灣</p>
            </div>
            <div className="footer-social">
              <a href="https://github.com/changshancheng" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                💻
              </a>
              <a href="https://linkedin.com/in/changshancheng" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                💼
              </a>
              <a href="mailto:changshancheng@example.com" aria-label="Email">
                📧
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-credits">
            <p>&copy; {currentYear} 張善程. All rights reserved.</p>
            <p>Built with React + TypeScript + Vite</p>
          </div>
          
          <button className="scroll-to-top" onClick={scrollToTop} aria-label="回到頂部">
            ⬆️
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;