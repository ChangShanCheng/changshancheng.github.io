# changshancheng.github.io

張善程（Shan-Cheng Chang）的個人網站：AI Application Engineer — Document AI / LLM Agents / Knowledge Graph。

線上網址：https://changshancheng.github.io

## 技術

React 19 + TypeScript + Vite，透過 GitHub Actions 自動部署到 GitHub Pages（推到 `main` 即部署）。

## 開發

```bash
npm install
npm run dev      # 本機預覽
npm run build    # 型別檢查 + 打包到 dist/
npm run preview  # 預覽打包結果
```

## 內容維護

| 想改什麼 | 檔案 |
|---|---|
| Email / GitHub / LinkedIn / 地點 / 履歷連結 | `src/data/profile.ts` |
| 首頁文案與數字 | `src/components/Hero.tsx` |
| 工作經歷與學歷 | `src/components/Experience.tsx` |
| 技能與認證 | `src/components/Skills.tsx` |
| 專案作品 | `src/components/Projects.tsx` |
| 履歷檔案（HTML / PDF） | `public/resume/` |
