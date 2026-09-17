import { useState } from 'react';
import { Check, Lock } from 'lucide-react';
import type { Project, ProjectCategory } from '../types';
import './Projects.css';

const projectsData: Project[] = [
  {
    id: 4,
    title: '企業大腦：從 PoC 到產線 AI 數據分析平台',
    period: '2025/12 – 進行中',
    category: 'Agent & KG',
    description: '從知識圖譜與 Agent Harness 兩個 PoC 起步，推進為偏光片產線的地端 AI Agent 平台：感測器數據分析、知識沉澱與知識圖譜，Skill 格式與 Claude Code 相容，資料不出內網。',
    metric: '2 個 PoC → 10 個 Docker 服務 · 7 種分析方法 · XGBoost F1 0.74',
    technologies: ['FastAPI', 'Gemini Function Calling', 'MCP', 'PostgreSQL + pgvector', 'Neo4j', 'Docker', 'React', 'XGBoost', 'SHAP', 'n8n → Skills'],
    highlights: [
      'PoC 階段：以化妝品法規比對驗證知識圖譜（Neo4j + PostgreSQL + 向量檢索），含輸入規範、知識審核機制與版控',
      'PoC 階段：自建 Claude Code 式 Agent Harness（Memory / Tool / Sandbox / Cronjob）與 Prompt 版控治理',
      '產線階段：原生 Skill / Bash / Read 工具 + MCP 工具伺服器 + 沙盒執行 + append-only 稽核日誌',
      '產線階段：6 支 n8n 流程遷移為 1 個 skill（7 種分析方法）+ 7 個 flows；XGBoost 良率模型 + SHAP 配方建議卡',
      '知識沉澱：分析結果標註 → 與武功秘笈比對 → 知識圖譜（141 個實體已入圖）',
    ],
  },
  {
    id: 1,
    title: '報價單 OCR 自動稽核',
    period: '2025/01 – 2025/05 上線',
    category: 'Document AI',
    description: '採購報價單的效期與報價日期自動提取與分類，取代人工逐份檢查，並以閃爍邊界框讓使用者直接對照原檔。',
    metric: '準確率 51% → 100% · 速度 3 倍 · 758+ 份',
    technologies: ['Azure Document Intelligence', 'Azure OpenAI', 'Python', 'Flask', 'IIS', 'SQL Server'],
    highlights: [
      '支援 PDF / 圖片 / Word / Excel 多格式，中英日多語文件',
      '效期與報價日期雙分支平行提取，Prompt 簡化後準確率大幅提升',
      '可縮放的 Highlighted Bounding Box，點選結果即定位原檔位置',
      '使用者回饋機制可直接調整 Prompt，降低維護成本',
    ],
  },
  {
    id: 2,
    title: '臺灣發票 / BMS 中國發票 OCR',
    period: '2025/06 – 2025/12 上線',
    category: 'Document AI',
    description: '財務發票自動登錄：臺灣 6 種發票格式（含手寫、感熱紙）與中國發票 11 項欄位提取，橫跨廠商、採購、財務部門。',
    metric: '臺灣 97% · 中國 100% · 年省 1,447 人時',
    technologies: ['Azure Document Intelligence', 'Azure OpenAI', 'Python', 'Flask', 'SQL Server'],
    highlights: [
      '手寫數字辨識技術突破，準確率提升 19 個百分點',
      '簡體中文發票 100% 準確率，導入 BMS、DTB、BMM 三廠區',
      '年省約 90 萬元人工成本，避免 48–76 萬元外包支出',
      '作為 Prompt 自動優化引擎（APO-OCR）的驗證標的',
    ],
  },
  {
    id: 3,
    title: '新人健檢報告 OCR 平台',
    period: '2025/06 – 2025/09 上線',
    category: 'Document AI',
    description: '人資新人健檢報告自動建檔的獨立系統：48 項健檢欄位提取、AI 校正、醫師評估建議，並符合 ISO 27001 機密資料規範。',
    metric: '48 欄位 · 準確率 97.4% · 216+ 份',
    technologies: ['FastAPI', 'React', 'Azure OpenAI', 'SQL Server', 'AES-256-GCM', 'JWT', 'LDAP'],
    highlights: [
      '欄位級 AES-256-GCM 加密、完整稽核日誌、三級角色權限',
      'AD 帳號登入 + JWT，Server-Sent Events 即時處理進度',
      '手寫 / 印刷自動判別、身分證檢查碼與數值範圍驗證',
      '季度資料自動清除並產出刪除清單，滿足稽核要求',
    ],
  },
  {
    id: 5,
    title: 'APO-OCR：Prompt 自動優化引擎',
    period: '2026/03 – 2026/09',
    category: 'Document AI',
    description: '設計「Golden Set + 純程式碼驗證器 + Coach LLM + 熔斷治理」的迴圈架構，讓 Prompt 自動迭代到達標；指導實習生實作並交接上線。',
    metric: '$1.44 · 2 輪迭代 · 保留測試集 8/8',
    technologies: ['Python', 'Azure OpenAI', 'Loop Engineering', 'Golden Set', 'Validator'],
    highlights: [
      'LLM 只有提案權、沒有評分權：驗證與計費全由純程式碼裁決',
      '達標 / 圈數 / 預算三重熔斷，避免無限震盪',
      '引擎與 OCR API 僅透過 HTTP 溝通，換單據只需換測試集',
      '自動產出的 Prompt 比人工版短 35%，與資深工程師手調版同分',
    ],
  },
  {
    id: 7,
    title: 'Universal OCR Platform：No-code OCR 建構平台',
    period: '2025/10 – 2026/01 · Side Project',
    category: 'Side Project',
    description: '把公司 OCR 經驗抽象成通用平台：使用者上傳文件、定義欄位與 Prompt，7 步驟流程自動產出結構化結果與標註圖，並可一鍵部署成 REST API。',
    metric: '7 步驟 pipeline · 3 種雲端部署版本 · 多檔聯合 OCR',
    technologies: ['FastAPI', 'React 19', 'PostgreSQL', 'Supabase', 'Cloud Run', 'Firebase Hosting', 'Azure Document Intelligence', 'Azure OpenAI', 'Gemini', 'Claude MCP', 'Docker'],
    highlights: [
      '預處理 → Document Intelligence → 多次 LLM 提取 → 結果選擇 → 欄位定位 → 標註圖 → 驗證',
      '多檔案聯合 OCR（2–5 份文件一次提取並標記來源）與多值欄位獨立定位',
      '三種部署架構：本地 PostgreSQL + SSE、Firestore + Firebase Hosting、Supabase Realtime + Cloud Run',
      'Claude MCP 整合：自動分析文件特徵並協助建立工作流程',
    ],
  },
  {
    id: 6,
    title: '供應商 ESG 問卷管理系統',
    period: '2025/10 – 2026/03',
    category: 'Cloud & Web',
    description: '首次自行架設的 GCP 全端系統：取代採購部門手動 Excel 管理供應商 ESG 問卷，支援多專案、批次操作、自動提醒與權限控管。',
    metric: '33K+ 行程式碼 · 52 個 API · 4.5 個月獨立完成',
    technologies: ['React 19', 'Express 5', 'Cloud Functions', 'Firestore', 'Firebase Hosting', 'Google Sheets API', 'Entra ID', 'Sentry', 'Playwright'],
    highlights: [
      'Google Forms / Sheets 雙向同步（Apps Script + OAuth2）',
      'Microsoft Entra ID 登入，省下每人約 1 萬元的帳號費用',
      'RBAC + Tag 權限模型、4 個排程任務、Firestore 安全規則',
      'AI 輔助開發（Claude），估計效率提升 3–5 倍',
    ],
  },
  {
    id: 8,
    title: 'AIoT 害蟲監控與蜜蜂授粉優化（碩士研究）',
    period: '2021 – 2023',
    category: 'Research',
    description: '溫室 AIoT 系統：深度學習害蟲計數、蜜蜂追蹤與花粉分割，結合克利金法溫度分布做環控自動化。',
    metric: 'YOLOv8 mAP 99.5% · 追蹤 97.7% · 害蟲計數 95.8%',
    technologies: ['PyTorch', 'YOLOv8', 'StrongSORT', 'Mask R-CNN (Swin-T)', 'IoT', 'Kriging'],
    highlights: [
      '期刊論文：Computers and Electronics in Agriculture (2023)',
      '研討會論文：ISMAB 2022（第一作者）',
      '發明專利 TW I842416 B 作物採收機',
    ],
  },
];

const categories: Array<'all' | ProjectCategory> = ['all', 'Agent & KG', 'Document AI', 'Cloud & Web', 'Side Project', 'Research'];

const badgeTone: Record<ProjectCategory, string> = {
  'Document AI': 'lav',
  'Agent & KG': 'indigo',
  'Cloud & Web': 'sage',
  'Side Project': 'rose',
  'Research': 'amber',
};

const Projects = () => {
  const [filter, setFilter] = useState<'all' | ProjectCategory>('all');
  const list = filter === 'all' ? projectsData : projectsData.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">Projects</div>
          <h2>專案作品</h2>
          <p>在明基材料交付的 AI 系統、個人 Side Project，以及碩士期間的 AIoT 研究。</p>
        </div>

        <div className="segmented reveal">
          {categories.map((c) => (
            <button key={c} className={filter === c ? 'active' : ''} onClick={() => setFilter(c)}>
              {c === 'all' ? '全部' : c}
            </button>
          ))}
        </div>

        <div className="projects-grid" key={filter}>
          {list.map((p, i) => (
            <article key={p.id} className="card card-hover project" style={{ animationDelay: `${Math.min(i, 5) * 70}ms` }}>
              <div className="project-top">
                <span className={`badge ${badgeTone[p.category]}`}>{p.category}</span>
                <span className="project-period">{p.period}</span>
              </div>
              <h3>{p.title}</h3>
              <p className="project-desc">{p.description}</p>
              {p.metric && <div className="project-metric">{p.metric}</div>}
              <ul className="project-highlights">
                {p.highlights.map((h) => (
                  <li key={h}><Check size={14} strokeWidth={2.5} />{h}</li>
                ))}
              </ul>
              <div className="project-tech">
                {p.technologies.map((t) => <span key={t} className="chip soft">{t}</span>)}
              </div>
            </article>
          ))}
        </div>

        <div className="project-note reveal">
          <Lock size={16} />
          <span>公司專案皆為內部系統，程式碼不對外公開；數字整理自年度績效報告，歡迎面談時深入討論。</span>
        </div>
      </div>
    </section>
  );
};

export default Projects;
