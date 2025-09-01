import { useState } from 'react';
import { Project } from '../types';
import './Projects.css';

const projectsData: Project[] = [
  {
    id: 1,
    title: "智能發票識別系統",
    description: "結合 OCR 與 LLM 技術，自動識別並解析發票資訊，準確率達 98%，大幅提升企業財務處理效率。",
    technologies: ["Python", "TensorFlow", "OpenCV", "FastAPI", "PostgreSQL", "React"],
    highlights: [
      "支援多種發票格式 (統一發票、電子發票、手寫收據)",
      "實時處理能力：每分鐘處理 500+ 張發票",
      "智能錯誤修正：自動識別並標記異常資料",
      "RESTful API 設計，易於整合現有系統"
    ],
    github: "https://github.com/example/invoice-ocr",
    demo: "https://demo-invoice-ocr.vercel.app"
  },
  {
    id: 2,
    title: "多語言文檔翻譯平台",
    description: "整合 OCR 文字識別與多語言翻譯模型，支援圖片文字直接翻譯，提供企業級翻譯解決方案。",
    technologies: ["Python", "PyTorch", "Transformer", "Docker", "Redis", "Vue.js"],
    highlights: [
      "支援 50+ 語言對互相翻譯",
      "圖片文字識別準確率 95%+",
      "批量處理：單次上傳 1000+ 文檔",
      "分散式架構，支援高並發訪問",
      "智能語言檢測，無需手動選擇"
    ],
    github: "https://github.com/example/doc-translator",
    demo: "https://doc-translator-demo.vercel.app"
  },
  {
    id: 3,
    title: "AI 履歷分析助手",
    description: "運用 NLP 技術分析履歷內容，自動提取關鍵技能與經驗，協助 HR 快速篩選合適人才。",
    technologies: ["Python", "BERT", "spaCy", "FastAPI", "MongoDB", "TypeScript"],
    highlights: [
      "自動技能標籤化與匹配度評分",
      "支援 PDF、Word、圖片格式履歷",
      "智能職位匹配推薦系統",
      "可視化分析報告生成",
      "隱私保護：本地處理，不上傳敏感資料"
    ],
    github: "https://github.com/example/resume-analyzer"
  },
  {
    id: 4,
    title: "智慧型表格數據擷取",
    description: "專為複雜表格設計的 OCR 系統，精準識別表格結構與內容，轉換為結構化數據。",
    technologies: ["Python", "OpenCV", "PaddleOCR", "Pandas", "Flask", "SQLite"],
    highlights: [
      "支援複雜表格結構識別 (合併儲存格、多層表頭)",
      "自動欄位分類與數據驗證",
      "Excel/CSV 格式輸出",
      "批量處理模式，提升工作效率",
      "視覺化錯誤檢測與修正介面"
    ],
    github: "https://github.com/example/table-extractor",
    demo: "https://table-demo.vercel.app"
  },
  {
    id: 5,
    title: "文件智能歸檔系統",
    description: "利用 AI 技術自動分類與歸檔文檔，支援多格式文件，大幅提升文檔管理效率。",
    technologies: ["Python", "Scikit-learn", "ElasticSearch", "Django", "PostgreSQL", "React"],
    highlights: [
      "自動文檔分類，支援 20+ 文檔類型",
      "智能重複文檔檢測與合併",
      "全文搜索與語義搜索功能",
      "權限管理與版本控制",
      "自動標籤生成與關鍵字擷取"
    ],
    github: "https://github.com/example/doc-classifier"
  },
  {
    id: 6,
    title: "即時字幕生成器",
    description: "結合語音識別與文字修正技術，為會議與影片提供準確的即時字幕服務。",
    technologies: ["Python", "Whisper", "WebRTC", "Socket.IO", "Node.js", "React"],
    highlights: [
      "即時語音轉文字，延遲低於 100ms",
      "多人會議支援，說話者識別",
      "智能標點符號與語法修正",
      "多語言支援，自動語言檢測",
      "WebRTC 串流，支援瀏覽器直接使用"
    ],
    github: "https://github.com/example/live-caption",
    demo: "https://live-caption-demo.vercel.app"
  }
];

const Projects = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const categories = ['all', 'OCR', 'NLP', 'Computer Vision', 'Full Stack'];
  
  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => 
        project.technologies.some(tech => 
          tech.toLowerCase().includes(filter.toLowerCase()) ||
          project.description.includes(filter)
        )
      );

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2>專案作品</h2>
          <p>展示我在 OCR + LLM 領域的實際應用與創新解決方案</p>
        </div>

        <div className="filter-buttons">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
            >
              {category === 'all' ? '全部' : category}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <span className="link-icon">💻</span>
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <span className="link-icon">🚀</span>
                    </a>
                  )}
                </div>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-highlights">
                <h4>主要功能</h4>
                <ul>
                  {project.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>
              
              <div className="project-tech">
                <h4>技術棧</h4>
                <div className="tech-tags">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="open-source-section">
          <h3>開源貢獻</h3>
          <div className="open-source-stats">
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">開源專案</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">200+</span>
              <span className="stat-label">GitHub Stars</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Pull Requests</span>
            </div>
          </div>
          <p className="open-source-description">
            積極參與開源社群，貢獻於 OCR、NLP 相關專案，
            並維護多個被廣泛使用的 AI 工具庫。
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;