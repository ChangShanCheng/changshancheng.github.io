import { Skill } from '../types';
import './Skills.css';

const skillsData: Skill[] = [
  // AI/ML 技能
  { name: 'OCR 文字識別', level: 95, category: 'AI/ML' },
  { name: 'Large Language Models', level: 90, category: 'AI/ML' },
  { name: 'Computer Vision', level: 85, category: 'AI/ML' },
  { name: 'Deep Learning', level: 80, category: 'AI/ML' },
  { name: 'TensorFlow/PyTorch', level: 85, category: 'AI/ML' },
  { name: 'OpenCV', level: 90, category: 'AI/ML' },
  
  // 後端技能
  { name: 'Python', level: 95, category: 'Backend' },
  { name: 'FastAPI', level: 90, category: 'Backend' },
  { name: 'Django/Flask', level: 85, category: 'Backend' },
  { name: 'Node.js', level: 80, category: 'Backend' },
  { name: 'PostgreSQL/MongoDB', level: 85, category: 'Backend' },
  
  // 前端技能
  { name: 'React/TypeScript', level: 85, category: 'Frontend' },
  { name: 'Vue.js', level: 80, category: 'Frontend' },
  { name: 'HTML/CSS/JavaScript', level: 90, category: 'Frontend' },
  
  // 雲端和工具
  { name: 'Docker/Kubernetes', level: 80, category: 'Cloud' },
  { name: 'AWS/GCP', level: 75, category: 'Cloud' },
  { name: 'Git/GitHub', level: 90, category: 'Tools' },
  { name: 'CI/CD', level: 80, category: 'Tools' },
];

const Skills = () => {
  const categories = ['AI/ML', 'Backend', 'Frontend', 'Cloud', 'Tools'] as const;
  
  const getSkillsByCategory = (category: Skill['category']) => 
    skillsData.filter(skill => skill.category === category);

  const categoryColors = {
    'AI/ML': '#ff6b6b',
    'Backend': '#4ecdc4', 
    'Frontend': '#45b7d1',
    'Cloud': '#f9ca24',
    'Tools': '#6c5ce7'
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2>技術專長</h2>
          <p>專精於 AI 應用開發，擁有完整的全端開發能力</p>
        </div>
        
        <div className="skills-overview">
          <div className="specialty-card">
            <div className="specialty-icon">🤖</div>
            <h3>OCR + LLM 專家</h3>
            <p>結合光學文字識別與大型語言模型，打造智能文檔處理解決方案</p>
          </div>
          <div className="specialty-card">
            <div className="specialty-icon">⚡</div>
            <h3>高效能系統設計</h3>
            <p>設計可擴展的 AI 應用架構，處理大量數據與並發請求</p>
          </div>
          <div className="specialty-card">
            <div className="specialty-icon">🎯</div>
            <h3>精準度優化</h3>
            <p>持續優化模型表現，達成 95%+ 的文字識別準確率</p>
          </div>
        </div>

        <div className="skills-categories">
          {categories.map(category => (
            <div key={category} className="skill-category">
              <h3 
                className="category-title"
                style={{ color: categoryColors[category] }}
              >
                {category}
              </h3>
              <div className="skills-grid">
                {getSkillsByCategory(category).map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ 
                          width: `${skill.level}%`,
                          backgroundColor: categoryColors[category]
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="certifications">
          <h3>認證與學習</h3>
          <div className="cert-grid">
            <div className="cert-item">
              <div className="cert-icon">🏆</div>
              <div className="cert-info">
                <h4>深度學習專業認證</h4>
                <p>Coursera Deep Learning Specialization</p>
              </div>
            </div>
            <div className="cert-item">
              <div className="cert-icon">☁️</div>
              <div className="cert-info">
                <h4>雲端架構師</h4>
                <p>AWS Solutions Architect</p>
              </div>
            </div>
            <div className="cert-item">
              <div className="cert-icon">🐍</div>
              <div className="cert-info">
                <h4>Python 專家認證</h4>
                <p>Python Institute PCPP</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;