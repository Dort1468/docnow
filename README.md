# Docnow - 即時協作文件編輯器

Docnow 是一個基於 Next.js 和 Liveblocks 構建的即時協作文件編輯器，讓多個用戶可以同時編輯同一份文件，實現無縫協作。

## 功能特點

- 📝 即時協作編輯
- 👥 多人同時在線編輯
- 🔒 用戶權限管理（查看者/編輯者）
- 🎨 Rich Text 編輯功能
- 🔄 即時同步文件更改
- 👤 整合 Clerk 身份驗證
- 📱 響應式設計

## 技術棧

- **Frontend:**

  - Next.js 15
  - React 18
  - TypeScript
  - Tailwind CSS
  - Lexical Editor
  - @liveblocks/react
  - @clerk/nextjs

- **後端/資料庫:**
  - Liveblocks 實時協作服務
  - Clerk 身份驗證

## 安裝說明

1. 克隆專案存儲庫：

```powershell
git clone https://github.com/Dort1468/docnow
cd docnow
```

2. 安裝依賴：

```powershell
npm install
```

3. 設置環境變數：
   創建 `.env.local` 文件並添加以下配置：

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY=your_liveblocks_public_key
LIVEBLOCKS_SECRET_KEY=your_liveblocks_secret_key
```

4. 啟動開發服務器：

```powershell
npm run dev
```

## 使用方法

1. 註冊/登入：使用 Clerk 身份驗證系統創建帳戶或登入。
2. 創建文件：點擊「創建新文件」按鈕創建新的協作文件。
3. 邀請協作者：
   - 點擊分享按鈕
   - 輸入協作者的電子郵件
   - 選擇協作者權限（查看者/編輯者）
4. 即時編輯：所有具有編輯權限的用戶都可以即時編輯文件。

## 貢獻指南

1. Fork 專案
2. 創建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. Push 到分支 (`git push origin feature/AmazingFeature`)
5. 開啟 Pull Request

## 聯繫方式

如有任何問題或建議，請開啟 issue 或發送 Pull Request。
或是聯繫我的 Email: billy61307aaa@gmail.com

## 特別感謝

本專案的開發得以完成，特別感謝以下技術和資源的支持：

Liveblocks - 提供強大的即時協作基礎架構
Clerk - 提供完整的身份驗證解決方案
Lexical - Facebook 的開源文字編輯器框架
Tailwind CSS - 提供優雅的 UI 設計系統
Radix UI - 提供無障礙的 UI 元件
Next.js - 提供強大的 React 框架支持
JavaScript Mastery - 提供專業的開發指導和教學

---
