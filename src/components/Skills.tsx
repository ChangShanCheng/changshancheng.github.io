import { ScanText, Brain, ShieldCheck, Award, BookOpen, Mic, Languages } from 'lucide-react';
import type { SkillGroup } from '../types';
import './Skills.css';

const groups: SkillGroup[] = [
  { category: 'LLM & Agents', items: ['Prompt Engineering', 'RAG', 'Knowledge Graph', 'LLM Agents', 'Harness Engineering', 'Function Calling', 'MCP', 'Prompt 自動優化 (APO)', 'Azure OpenAI (GPT-4o / o3 / o4-mini)', 'Gemini API', 'Claude Code'] },
  { category: 'Document AI / CV', items: ['Azure Document Intelligence', 'OCR + LLM 結構化提取', 'Bounding Box 可解釋化', 'OpenCV', 'YOLOv8', 'StrongSORT', 'Mask R-CNN', 'PyTorch', 'TensorFlow'] },
  { category: 'Data & ML', items: ['XGBoost', 'SHAP', 'SPC', 'Pandas', 'Neo4j', 'Qdrant', 'pgvector', 'PostgreSQL', 'SQL Server', 'Firestore'] },
  { category: 'Backend', items: ['Python', 'FastAPI', 'Flask', 'Node.js', 'Express', 'REST', 'GraphQL', 'Server-Sent Events', 'WebSocket'] },
  { category: 'Frontend', items: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Recharts', 'React Query'] },
  { category: 'Cloud & DevOps', items: ['Docker', 'GCP', 'Firebase Hosting', 'Cloud Functions', 'Cloud Run', 'Supabase', 'Azure AI', 'IIS', 'Git', 'n8n', 'Vitest', 'Playwright', 'Sentry'] },
  { category: 'Security', items: ['AES-256-GCM', 'JWT', 'AD / LDAP', 'Microsoft Entra ID OAuth', 'RBAC', 'ISO 27001 稽核日誌'] },
];

const specialties = [
  { icon: ScanText, tone: 'brand', title: 'Document AI（OCR + LLM）', desc: 'Azure Document Intelligence 結合 LLM 結構化提取，報價單、發票、健檢報告等六套系統上線，平均準確率 97%+。' },
  { icon: Brain, tone: 'lav', title: 'LLM Agent 與知識圖譜', desc: '自建 Claude Code 式 Agent Harness（Memory / Tool / Sandbox / Cron / MCP）與 Neo4j + Qdrant 企業知識圖譜。' },
  { icon: ShieldCheck, tone: 'sage', title: '企業級系統交付', desc: 'AES-256-GCM 加密、AD / Entra ID 登入、RBAC 與稽核日誌，符合 ISO 27001；Docker 與 GCP 雲端部署。' },
];

const credentials = [
  { icon: Award, tone: 'amber', title: '發明專利 TW I842416 B', desc: '作物採收機 · 2024/05 核准' },
  { icon: BookOpen, tone: 'lav', title: '期刊論文 · Computers and Electronics in Agriculture', desc: 'Development of AIoT system for facility asparagus cultivation (2023)' },
  { icon: Mic, tone: 'rose', title: '研討會論文 · ISMAB 2022', desc: 'AIoT based pest counting system for asparagus cultivation（第一作者）' },
  { icon: Languages, tone: 'sage', title: '語言', desc: '英文 TOEIC 790 · 德文 A2 · 中文母語' },
];

const Skills = () => {
  return (
    <section id="skills" className="section alt skills">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">Skills</div>
          <h2>技術專長</h2>
          <p>以 LLM 應用為核心，具備從模型、後端、前端到雲端部署的全端交付能力。</p>
        </div>

        <div className="specialties">
          {specialties.map((s, i) => (
            <div key={s.title} className={`card card-hover specialty reveal d${i + 1}`}>
              <span className={`icon-tile ${s.tone}`}><s.icon size={22} strokeWidth={1.8} /></span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="skill-groups reveal">
          {groups.map((g) => (
            <div key={g.category} className="skill-group">
              <div className="skill-group-title">{g.category}</div>
              <div className="skill-chips">
                {g.items.map((it) => <span key={it} className="chip">{it}</span>)}
              </div>
            </div>
          ))}
        </div>

        <div className="credentials reveal">
          <h3>認證、論文與專利</h3>
          <div className="cred-grid">
            {credentials.map((c) => (
              <div key={c.title} className="card card-hover cred">
                <span className={`icon-tile ${c.tone}`}><c.icon size={20} strokeWidth={1.8} /></span>
                <div>
                  <h4>{c.title}</h4>
                  <p>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
