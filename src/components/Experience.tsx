import { Building2, Factory, GraduationCap } from 'lucide-react';
import type { Experience as ExperienceItem, EducationItem } from '../types';
import './Experience.css';

const experiences: (ExperienceItem & { icon: typeof Building2; tone: string })[] = [
  {
    icon: Building2,
    tone: 'brand',
    company: '明基材料 BenQ Materials',
    position: 'AI 應用研發工程師 (AI Application R&D Engineer) · 數位技術中心 AI 專案辦公室 (DCA1)',
    period: '2024/12 – 至今',
    location: '桃園',
    description: [
      '從零建立公司文件 AI 平台（Azure Document Intelligence + Azure OpenAI），定義可複用的 OCR → LLM 提取 → 驗證 → 回饋流程。',
      '六套系統正式上線：報價單 OCR（準確率 51% → 100%、速度 3 倍）、臺灣發票 OCR（97%，年省 850 人時）、BMS 中國發票 OCR（100%）、關務 OCR、新人健檢 OCR 平台（48 欄位、97.4%、AES-256-GCM 加密）、供應商 ESG 問卷系統（GCP）。',
      '合計平均準確率 97%+，每年節省 1,500+ 人時、約 100 萬元成本，並避免 48–76 萬元外包支出。',
      '主導企業大腦：從知識圖譜（Neo4j + PostgreSQL + 向量檢索）與 Claude Code 式 Agent Harness（Memory + Tool + Sandbox + Cronjob）兩個 PoC，推進為偏光片產線的地端 AI 數據分析平台（FastAPI + MCP + 沙盒 + 稽核日誌），6 支 n8n 流程遷移為 skill/flows，XGBoost 良率模型 + SHAP 配方建議。',
      '設計 APO-OCR Prompt 自動優化架構並指導實習生落地；擔任 ChatGPT Team 課程助教（67 位學員）。',
    ],
    tags: ['Azure OpenAI', 'Gemini', 'FastAPI', 'React', 'Neo4j', 'pgvector', 'Docker', 'GCP', 'MCP'],
  },
  {
    icon: Factory,
    tone: 'lav',
    company: '中國鋼鐵 China Steel',
    position: '值班股長 · 冷軋廠',
    period: '2024/01 – 2024/11',
    location: '高雄',
    description: [
      '負責冷軋鋼捲產線值班運作與異況排除，維持連續生產、產率達 95%。',
      '建立數據驅動的產線異常分析：彙整製程參數（軋延力、張力、速度、溫度）與品質檢測資料，以 SPC、趨勢與相關性分析找出鋼捲缺陷與停機真因，提出製程調整建議並追蹤成效。',
      '以 Python / Excel 建立異常統計與缺陷分類報表，作為每日生產會議及與上下游製程、品保協調的決策依據。',
      '這段製程資料分析經驗直接延續到日後在明基材料建構的產線 AI 數據分析平台（感測器分析、SPC、良率模型）。',
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
          <p>兩年製造業 AI 落地經驗，從文件 AI 一路做到企業知識圖譜與 AI Agent。</p>
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
