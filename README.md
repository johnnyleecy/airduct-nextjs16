# 富成工程公司 — 官方網站（Next.js 16）

純 front-end 靜態網站（SSG），採用 Next.js 16 App Router + TypeScript + Tailwind CSS v4，內建完整 SEO 配置。

## 技術棧

- **Next.js 16.3.3**（App Router、Turbopack、Static Export）
- **React 19.2**、**TypeScript 5**、**Tailwind CSS v4**
- 純 front-end：`output: "export"`，build 後輸出純靜態檔案

## 快速開始

```bash
npm install        # 安裝依賴（已完成可跳過）
npm run dev        # 開發模式 http://localhost:3000
npm run build      # 靜態匯出至 out/
npx serve out      # 預覽靜態版本
```

## 網站結構

### 主頁面

| 頁面 | 路徑 |
|---|---|
| 主頁 | `/` |
| 如何預約維修？ | `/book` |
| 常見問題 | `/faq` |
| 關於我們 | `/about` |
| 聯絡我們 | `/contact` |

### Navbar：顧問服務

| 頁面 | 路徑 |
|---|---|
| 牌照與場地顧問 | `/services/licence-site-consulting` |
| 專業牌照顧問服務 | `/services/licensing-consulting` |

### Navbar：系統工程服務

| 頁面 | 路徑 |
|---|---|
| 通風與送風系統工程 | `/services/ventilation-air-supply` |
| 冷氣系統工程 | `/services/air-conditioning-engineering` |

### Navbar：冷氣機安裝

| 頁面 | 路徑 |
|---|---|
| 拆除及安裝 | `/services/dismantle-install` |
| 清洗保養 | `/services/cleaning-maintenance` |
| 維修保養 | `/services/repair-maintenance` |

### 技術專長（頁尾區塊，維持 SEO 內部連結）

| 頁面 | 路徑 |
|---|---|
| 獨家無滴汗防滴水風咀技術（皇牌） | `/services/no-drip-nozzle` |
| 超級豪宅特殊恆溫通風系統 | `/services/luxury-climate-system` |
| 教育中心專屬消防與結構顧問 | `/services/education-fire-consulting` |
| 醫院級大型製冷工程經驗 | `/services/hospital-grade-chiller` |

## SEO 配置一覽

- **Metadata API**：全站 title template、description、canonical、Open Graph、Twitter Card、robots meta（`app/layout.tsx` + 每頁 `export const metadata`）
- **sitemap.xml**：程式生成，自動包含全部頁面（`app/sitemap.ts`）
- **robots.txt**：程式生成，指向 sitemap（`app/robots.ts`）
- **JSON-LD 結構化資料**：
  - 主頁：`HomeAndConstructionBusiness` + `OfferCatalog`
  - 服務頁：`Service` + `FAQPage`
  - 內頁：`BreadcrumbList`
  - FAQ 頁：`FAQPage`
- **本地 SEO**：`metadataBase`、`zh-HK` 語言、LocalBusiness 座標、地區關鍵字埋入頁尾

## 自訂項目（上線前必改）

所有網站資料集中在 **`lib/site.ts`**：

| 欄位 | 說明 |
|---|---|
| `name` / `legalName` | 品牌名及公司註冊名（現為「富成工程公司」） |
| `url` | 正式網址（影響 canonical、sitemap、OG 全部） |
| `phone` / `phoneHref` / `whatsapp` | 聯絡電話及 WhatsApp 連結 |
| `email` / `address` | 電郵及地址（地址已更新為土瓜灣馬頭角道） |
| `geo` | 地址座標（Google 地圖排名用） |
| `social` | Facebook／Instagram 專頁（LocalBusiness schema 用） |

服務結構集中在 **`lib/services.ts`**（導覽分類、主頁、頁尾、sitemap 共用，改一處全站更新）。

## 部署

`npm run build` 後將 **`out/`** 資料夾上傳至任何靜態主機：

- Cloudflare Pages / Netlify / GitHub Pages / S3 / 任何香港 serverless 靜態空間
- 部署後到 **Google Search Console** 提交 `https://你的網址/sitemap.xml`
- 建立 **Google Business Profile**（本地 SEO 地圖排名）

> 如部署到 Vercel：可移除 `next.config.ts` 中的 `output: "export"` 及 `images.unoptimized`，由 Vercel 自動處理。
# airduct-next16
