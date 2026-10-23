import { Building2, Factory, GraduationCap } from 'lucide-react';
import type { Experience as ExperienceItem, EducationItem } from '../types';
import './Experience.css';

const experiences: (ExperienceItem & { icon: typeof Building2; tone: string })[] = [
  {
    icon: Building2,
    tone: 'brand',
    company: '明基材料 BenQ Materials',
    position: 'AI 應用研發工程師 (AI Application R&D Engineer) · 數位技術中心智慧應用部智慧應用開發課',
    period: '2024/12 – 至今',
    location: '桃園',
    description: [
      '企業大腦 AI 數據分析平台（系統架構設計、主要開發）：BML 產線每天在用，取代外購 AutoML（兩年免採購 415 萬）；把 6 支 n8n 流程與另一套獨立統計分析收斂成一個仿 Claude Code 的 skill，同事只給計算邏輯即可共用，6 支流程零斷線切換。',
      '文件 AI（OCR + LLM）：從零建立公司平台，每套以人工標註測試集驗收——報價單效期 51% → 100%（29 份）、發票 31/32 與 31/31、健檢欄位級 97.4%（42 份 × 46 欄）；設計並完成 APO-OCR 自動調 prompt（保留集 8/8），已可優化既有 OCR，並指導實習生延伸。',
      '供應商問卷管理系統（GCP）：52 個 API、4.5 個月獨立完成並上線，已交接。',
      'ESG 碳管理平台：匯入改網頁上傳並交接同事；後端單檔拆成每頁一個模組（API 104 → 42 支）、前端逐廠複製的圖表合成共用元件（219 → 51 檔），輸出逐筆比對不變。',
      '發票與健檢三套系統每年節省 1,572 人時、有形效益約 99 萬元；ChatGPT Team 課程助教（67 位學員）。',
    ],
    tags: ['Skills（仿 Claude Code）', 'Docker 沙盒', 'Azure OpenAI', 'FastAPI', 'React', 'GCP', 'MCP（原型）'],
  },
  {
    icon: Factory,
    tone: 'lav',
    company: '中國鋼鐵 China Steel',
    position: '值班股長 · 冷軋廠',
    period: '2024/01 – 2024/11',
    location: '高雄',
    description: [
      '冷軋鋼捲產線值班，排除異況、維持連續生產，產率 95%。',
      '以 SPC、趨勢與相關性分析找出缺陷與停機真因，建立每日異常報表（Python / Excel）；這段經驗延續到日後的產線 AI 數據分析平台。',
    ],
    tags: ['製程數據分析', '異常分析', 'SPC', 'Python / Excel 報表', '根因分析', '跨部門協作'],
  },
];

const education: EducationItem[] = [
  {
    school: '國立臺灣大學',
    degree: '生物機電工程學系 碩士（AIoT / 電腦視覺）',
    period: '2021 – 2023',
    note: '論文：AIoT 技術在設施栽培中精密監控小型害蟲與優化蜜蜂授粉之應用 · 1 篇期刊論文、1 篇研討會論文、1 項發明專利',
  },
  {
    school: '國立臺北科技大學',
    degree: '機械工程學系 學士',
    period: '2017 – 2021',
    note: '專題：以 Autoware 自駕開源軟體實現無人駕駛導航系統',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">Experience</div>
          <h2>工作經歷</h2>
          <p>兩年製造業 AI 落地經驗，從文件 AI 一路做到產線 AI 數據分析平台。</p>
        </div>

        <div className="timeline">
          {experiences.map((exp, i) => (
            <div key={exp.company} className={`timeline-item reveal d${i + 1}`}>
              <div className="timeline-rail">
                <span className={`icon-tile ${exp.tone}`}><exp.icon size={20} strokeWidth={1.8} /></span>
              </div>
              <div className="card card-hover timeline-card">
                <div className="timeline-head">
                  <div>
                    <h3>{exp.position}</h3>
                    <div className="timeline-company">
                      {exp.company}{exp.location ? ` · ${exp.location}` : ''}
                    </div>
                  </div>
                  <span className="badge lav">{exp.period}</span>
                </div>
                <ul>
                  {exp.description.map((line, j) => <li key={j}>{line}</li>)}
                </ul>
                {exp.tags && (
                  <div className="timeline-tags">
                    {exp.tags.map((t) => <span key={t} className="chip">{t}</span>)}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="education reveal">
          <div className="education-title">
            <span className="icon-tile"><GraduationCap size={20} strokeWidth={1.8} /></span>
            <h3>學歷</h3>
          </div>
          <div className="education-grid">
            {education.map((edu) => (
              <div key={edu.school} className="card card-hover education-card">
                <div className="education-head">
                  <h4>{edu.school}</h4>
                  <span className="badge lav">{edu.period}</span>
                </div>
                <p className="education-degree">{edu.degree}</p>
                {edu.note && <p className="education-note">{edu.note}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
