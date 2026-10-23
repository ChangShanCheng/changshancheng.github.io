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
    description: '負責系統架構設計與主要開發：正式上線、BML 產線每天在用的 AI 數據分析平台，取代外購 AutoML（兩年免採購 415 萬）。原本分析邏輯散在 6 支 n8n 流程，另有獨立的 StatRecipe（SR）分析；我把它們收斂成同一個 sensor-analysis skill，並定一份統一輸入格式，讓同事只要提供計算邏輯，方法就能被上傳、API、排程共用。之後再透過使用者對分析結果的回饋累積成企業知識。資料不出內網。',
    metric: '免外購 415 萬／兩年 · 6 支產線流程平台化 · 零斷線切換',
    flow: [
      { title: '3 個入口', desc: '上傳 Excel · 對外 API · 6 支排程' },
      { title: '統一輸入格式', desc: 'analysis_input.v1，先驗格式，錯了告訴你怎麼修' },
      { title: 'sensor-analysis skill', desc: '同事的計算邏輯（含 StatRecipe）掛成方法', mine: true },
      { title: '程式算 → LLM 寫', desc: '統計 → 判讀 → PDF／Excel 報表' },
      { title: '回饋變知識', desc: '工程師標註 → 審核 → 知識圖譜' },
    ],
    flowCaption: '資料進來 → 分析 → 累積成知識；紫框是我設計的共用 skill',
    compare: {
      head: ['', '原本（n8n）', '改成一個 skill 後'],
      rows: [
        ['分析邏輯', '散在 6 支流程、約 550 個節點，各自複製', '1 個 skill，3 個入口共用'],
        ['新增分析方法', '要逐支流程改', '同事提供計算邏輯，掛進 skill 一次'],
        ['接新資料來源', '複製一整支流程', '整理成統一格式即可（已接 7 種）'],
        ['StatRecipe（SR）', '獨立的一串節點', '移植成 skill 的一個方法'],
        ['切換驗證', '—', 'Excel 報表與舊信 9/9 逐格一致、PDF 逐 byte 相同'],
      ],
    },
    technologies: ['FastAPI', 'Gemini Function Calling', 'MCP', 'PostgreSQL + pgvector', 'Neo4j', 'Docker', 'React', 'n8n → Skills'],
    highlights: [
      '設計重點：資料整理與分析分開——同事只提供計算邏輯，我包成 skill 的方法，負責格式驗證、LLM 判讀與報表；統計由程式算，LLM 只寫判讀，LLM 失敗也不影響數據',
      'skill 格式與 Claude Code 相同：同事在 Claude Code 開發測試後，可原封不動搬上平台',
      '穩定與安全：對話太長自動摘要、工具失敗重試並讓模型換做法、每題最多 10 次工具呼叫；依角色限定工具、公司規定由程式強制擋下、沙盒執行、不可修改的稽核紀錄',
      '知識迴圈：知識圖譜已收錄我建的 6 支 OCAP 缺陷處理流程；知識庫成熟後再開放 chat 問答',
    ],
  },
  {
    id: 1,
    title: '報價單 OCR 自動稽核',
    period: '2025/01 – 2025/05 上線',
    category: 'Document AI',
    description: '採購報價單的效期與報價日期自動提取與分類，取代人工逐份檢查，並以閃爍邊界框讓使用者直接對照原檔。',
    metric: '效期準確率 51% → 100%（29 份回歸集）· 單份 30 → 10 秒 · 758+ 份',
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
    metric: '臺灣 31/32 · 中國 31/31 · 年省 1,447 人時',
    technologies: ['Azure Document Intelligence', 'Azure OpenAI', 'Python', 'Flask', 'SQL Server'],
    highlights: [
      '臺灣發票 32 份測試集、5 個關鍵欄位全對才算對：含手寫的整體準確率 78% → 97%',
      '簡體中文發票 31 份測試集 10 欄位全對，導入 BMS、DTB、BMM 三廠區',
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
    metric: '欄位級 97.4%（42 份 × 46 欄位）· 已處理 216+ 份',
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
      '32 張發票 golden set 切 24 訓練／8 保留並排除 3 種資料洩漏；LLM 只有提案權、評分全由純程式碼逐欄位比對',
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
    title: '供應商問卷管理系統',
    period: '2025/10 – 2026/03 · 已上線、已交接',
    category: 'Cloud & Web',
    description: '首次自行架設的 GCP 全端系統：取代採購部門手動 Excel 管理供應商 ESG 問卷，支援多專案、批次操作、自動提醒與權限控管；年底交接同仁（含 GCP／Firebase 教學），接手者已能自行部署維運。',
    metric: '52 個 API · Entra ID 登入 · 4.5 個月獨立完成',
    technologies: ['React 19', 'Express 5', 'Cloud Functions', 'Firestore', 'Firebase Hosting', 'Google Sheets API', 'Entra ID', 'Sentry', 'Playwright'],
    highlights: [
      'Google Forms / Sheets 雙向同步（Apps Script + OAuth2）',
      'Microsoft Entra ID 公司帳號登入，不必另購雲端帳號',
      'RBAC + Tag 權限模型、4 個排程任務、Firestore 安全規則',
      'AI 輔助開發（Claude），估計效率提升 3–5 倍',
    ],
  },
  {
    id: 9,
    title: 'ESG 碳及能源數位管理平台重構',
    period: '2025/12 – 2026/10 重構上線',
    category: 'Cloud & Web',
    description: '接手既有 ESG 碳排平台：上半年維運（主機搬遷不中斷、熱點分析資料匯入），下半年完成系統體檢與重構，讓資料匯入不再綁定個人電腦、誰都能接手。',
    metric: '程式 44,000 → 6,000 行（少 86%）· 相依主機 5 → 1 台',
    technologies: ['系統重構', '資料驗證', '備份／還原腳本'],
    highlights: [
      '先寫好備份與還原腳本，重構分段執行、每段可還原',
      '資料改由網頁上傳，預覽差異確認後才寫入',
      '自動擋下放錯檔、放錯月份的匯入',
      '每月 ESG 碳排看板照常更新，切換不中斷',
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
      '期刊論文：Computers and Electronics in Agriculture (2023)（共同第一作者）',
      '研討會論文：ISMAB 2022（第一作者）',
      '發明專利 TW I842416 B 作物採收機',
    ],
  },
  {
    id: 10,
    title: '以 Autoware / ROS 實現無人駕駛導航系統（大學專題）',
    period: '2020 – 2021',
    category: 'Research',
    description: '北科大機械系專題：在 Ubuntu + ROS + Autoware 上建構室內外自駕平台，完成建圖、定位與路徑規劃，並整合機器學習口罩偵測模組。',
    technologies: ['ROS', 'Autoware', 'Ubuntu', 'SLAM', 'Machine Learning'],
    highlights: [
      '室內外建圖、定位與路徑規劃',
      '整合機器學習口罩偵測模組',
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
            <article key={p.id} className={`card card-hover project${p.flow ? ' wide' : ''}`} style={{ animationDelay: `${Math.min(i, 5) * 70}ms` }}>
              <div className="project-top">
                <span className={`badge ${badgeTone[p.category]}`}>{p.category}</span>
                <span className="project-period">{p.period}</span>
              </div>
              <h3>{p.title}</h3>
              <p className="project-desc">{p.description}</p>
              {p.metric && <div className="project-metric">{p.metric}</div>}
              {p.flow && (
                <div className="arch">
                  <ol className="arch-flow">
                    {p.flow.map((f) => (
                      <li key={f.title} className={f.mine ? 'mine' : ''}><b>{f.title}</b><span>{f.desc}</span></li>
                    ))}
                  </ol>
                  {p.flowCaption && <p className="arch-cap">{p.flowCaption}</p>}
                </div>
              )}
              {p.compare && (
                <table className="arch-table">
                  <thead><tr>{p.compare.head.map((h, k) => <th key={k}>{h}</th>)}</tr></thead>
                  <tbody>{p.compare.rows.map((r) => <tr key={r[0]}>{r.map((c, k) => <td key={k}>{c}</td>)}</tr>)}</tbody>
                </table>
              )}
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
