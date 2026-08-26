import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "如何預約維修？｜上門睇位報價流程",
  description:
    "五步預約流程：WhatsApp快速聯繫諮詢 → 發送現場資料 → 專業評估報價 → 確認報價落實時間 → 師傅上門施工驗收。冷氣、通風風喉工程預約步驟透明清晰。",
  alternates: { canonical: "/book" },
};

const steps = [
  {
    n: "01",
    t: "WhatsApp 快速聯繫、初步諮詢",
    d: "點擊網站右下角WhatsApp連結直接聯絡客服，無需繁複登記。你可以即時查詢冷氣故障、通風系統問題、風喉改裝、清洗保養或牌照顧問等相關工程需求。",
  },
  {
    n: "02",
    t: "發送現場資料、問題狀況",
    d: "請簡單描述故障或工程需求，例如冷氣漏水、製冷不足、風喉噪音、抽氣不足、需要清洗或安裝新系統，並提供現場環境、設備型號及現場照片、影片。充足資料能讓工程師快速判斷問題、初步評估施工難度。",
  },
  {
    n: "03",
    t: "專業工程團隊評估、提供透明報價",
    d: "我們根據你的狀況、場地類型（食肆、商廈、寫字樓、豪宅）、施工方式及工程規模，提供清晰、無隱藏收費的專業報價。針對大型工程、複雜改裝及通風出牌顧問項目，我們會安排工程師上門實地勘測評估，上門勘測將收取指定標準費用，費用公開透明、事前說明，絕無隱藏收費。",
  },
  {
    n: "04",
    t: "確認報價、落實施工時間",
    d: "客戶確認報價後，客服會立即協調工程師檔期，按照你的營業時間或空置時間安排施工，食肆及商業場地可提供夜間、休市時間施工，避免影響營運。",
  },
  {
    n: "05",
    t: "師傅上門施工、維修保養及完工驗收",
    d: "專業認證冷氣風喉工程師準時上門，進行維修、清洗、設備安裝或風喉改裝工程。施工完成後會現場測試製冷、風速、系統運作狀況，確認問題徹底解決，客戶驗收完成即結案。如需長期保養合約，我們亦可同步安排後續恆常保養服務。",
  },
];

export default function BookPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "上門睇位要收費嗎？",
              acceptedAnswer: {
                "@type": "Answer",
                text: "一般情況透過WhatsApp提供現場相片及資料可先做初步評估；大型工程、複雜改裝及通風出牌顧問項目，上門勘測會收取指定標準費用，費用會事前清楚說明，絕無隱藏收費。",
              },
            },
            {
              "@type": "Question",
              name: "報價後幾時可以開工？",
              acceptedAnswer: {
                "@type": "Answer",
                text: "確認報價後，視乎工程規模一般可於 1–2 星期內安排開工；緊急維修可安排即日或翌日處理。商業場地可安排夜間、休市時段施工，減少影響營運。",
              },
            },
            {
              "@type": "Question",
              name: "需要準備咩資料先可以預約？",
              acceptedAnswer: {
                "@type": "Answer",
                text: "簡單描述故障或工程需求，提供場地類型、設備型號、現場照片或影片，以及方便施工嘅時間，協助工程師快速評估狀況。",
              },
            },
          ],
        }}
      />
      <Breadcrumb items={[{ name: "如何預約維修？" }]} />

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">如何預約維修？</h1>
        <p className="mt-4 text-slate-500">
          預約富成工程公司師傅非常簡單，5步搞掂。無論係風喉工程、冷氣安裝、清洗保養、維修或通風牌照顧問服務，流程簡單透明。
        </p>

        <div className="mt-10 space-y-8">
          {steps.map((s) => (
            <div key={s.n} className="flex gap-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-600 text-lg font-bold text-white">
                {s.n}
              </span>
              <div>
                <h2 className="text-xl font-bold text-slate-900">{s.t}</h2>
                <p className="mt-2 leading-relaxed text-slate-500">{s.d}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-sky-200 bg-sky-50 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-slate-900">即刻 WhatsApp 聯繫查詢</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            <li>・ 全港各區服務：{siteConfig.regions}</li>
            <li>・ 辦公時間：{siteConfig.hours}</li>
            <li>・ 緊急維修：24小時熱線支援</li>
          </ul>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-sky-600 px-6 py-3 text-center text-sm font-bold text-white transition hover:bg-sky-700"
            >
              WhatsApp 查詢：{siteConfig.phone}
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
