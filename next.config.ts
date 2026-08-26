import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 純 front-end：靜態匯出（SSG），npm run build 後輸出 out/ 資料夾
  // 可直接部署到 Cloudflare Pages / Netlify / GitHub Pages / S3 等任何靜態主機
  output: "export",
  images: { unoptimized: true },
  trailingSlash: false,
};

export default nextConfig;
