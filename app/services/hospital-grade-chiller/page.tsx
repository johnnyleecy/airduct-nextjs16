import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "大型製冷工程｜Chiller水冷系統・跨區散熱水喉接駁",
  description:
    "具備大型基建Chiller水冷系統施工經驗：中央冷氣安裝、醫院級大型製冷、跨區跨建築物散熱水喉接駁工程，掌握大型製冷系統核心技術，24小時穩定運行。",
  alternates: { canonical: "/services/hospital-grade-chiller" },
};

const faqs = [
  {
    question: "點解大型場所要用 Chiller 水冷系統？",
    answer:
      "水冷系統製冷量覆蓋大、集中管理、能源效益高，適合面積龐大、冷氣負荷高嘅場所；相比分體機更慳電、更耐用、更易統一維護。",
  },
  {
    question: "跨建築物水喉接駁有咩技術要求？",
    answer:
      "需要精準水力平衡計算、保溫防結露、伸縮節處理及沉降應對，呢啲正正係大型工程經驗嘅體現，唔係普通工程隊可以做到。",
  },
  {
    question: "醫院冷氣可以停機做保養嗎？",
    answer:
      "絕對唔可以。我哋提供冗餘設計及分區停機保養方案，確保任何時候都有製冷能力，關鍵場所運作唔受影響。",
  },
];

const capabilities = [
  ["Chiller 系統", "水冷式中央冷氣設計、安裝、改裝"],
  ["水塔工程", "大型散熱水塔安裝、更換、群控"],
  ["水喉接駁", "跨區／跨建築物散熱水喉、水力平衡"],
  ["泵組系統", "冷卻水泵、冰水泵、變頻控制"],
  ["後備設計", "N+1冗餘、後備電源協調、遠端監控"],
  ["節能方案", "能源審計、系統優化、電費節省"],
];

export default function HospitalChillerPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "醫院級大型製冷工程",
          serviceType: "Chiller水冷系統・大型製冷工程",
          provider: { "@type": "HomeAndConstructionBusiness", name: "富成工程公司" },
          areaServed: "香港",
          description:
            "大型基建Chiller水冷系統、跨區跨建築物散熱水喉接駁，24小時穩定運行。",
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }}
      />
      <Breadcrumb items={[{ name: "工程服務", href: "/" }, { name: "醫院級大型製冷工程" }]} />

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
          醫院級大型製冷工程｜Chiller 水冷系統、跨區散熱水喉接駁
        </h1>
        <p className="mt-4 leading-relaxed text-slate-600">
          大型基建冷氣工程，唔係睇安裝幾多部機咁簡單，而係一套<b>系統工程</b>：製冷量計算、水塔擺位、水喉接駁、泵組選型、能源效益、後備方案——任何一個環節出錯，影響嘅係成幢建築物嘅運作。
        </p>
        <p className="mt-3 leading-relaxed text-slate-600">
          我哋具備<b>大型基建 Chiller 水冷系統</b>施工實戰經驗，承接<b>跨區、跨建築物大型散熱水喉接駁工程</b>，掌握大型製冷系統核心技術原理，為醫院、商場、商廈、數據中心等<b>不容許停機</b>嘅場所提供可靠製冷。
        </p>

        <h2 className="mt-12 text-2xl font-bold text-slate-900">醫院級大型製冷工程嘅技術要求</h2>

        <div className="mt-6 space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-bold text-slate-900">1. 大型基建 Chiller 水冷系統施工</h3>
            <p className="mt-2 leading-relaxed text-slate-600">
              我哋熟悉 <b>Chiller（水冷式中央冷氣）</b>系統全套技術：<b>水冷式製冷機組、大型散熱水塔、冷卻水喉、水泵、控制系統</b>。由負荷計算、設備選型、安裝調試到能源效益驗證，全程掌握核心技術，確保製冷量精準覆蓋全場。
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-bold text-slate-900">2. 跨區、跨建築物散熱水喉接駁</h3>
            <p className="mt-2 leading-relaxed text-slate-600">
              大型園區、醫院群、商場組合，往往需要<b>跨區、跨建築物</b>嘅散熱水喉接駁：水喉穿越不同樓宇、地庫、天橋位，牽涉<b>水力平衡、保溫、伸縮、沉降處理</b>等專業技術。我哋具備此類大型工程經驗，確保冷卻水輸送暢順、無漏水風險。
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-bold text-slate-900">3. 24小時穩定運行設計</h3>
            <p className="mt-2 leading-relaxed text-slate-600">
              醫院、實驗室、機房<b>唔可以停冷氣</b>。我哋設計<b>後備系統、N+1冗餘配置、遠端監控</b>，即使單一機組故障，系統照常製冷，確保關鍵場所運作零中斷。
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-bold text-slate-900">4. 能源效益與節能優化</h3>
            <p className="mt-2 leading-relaxed text-slate-600">
              大型製冷系統佔建築物耗電量大宗，我哋提供<b>能源效益評估</b>：水泵變頻控制、水塔群控、冰水溫度優化，幫你喺長期營運慳返可觀電費。
            </p>
          </div>
        </div>

        <h2 className="mt-12 text-2xl font-bold text-slate-900">大型製冷工程能力一覽</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {capabilities.map(([t, d]) => (
            <div key={t} className="rounded-xl bg-slate-50 p-5">
              <h3 className="font-bold text-slate-900">{t}</h3>
              <p className="mt-1 text-sm text-slate-500">{d}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-12 text-2xl font-bold text-slate-900">適用場景</h2>
        <p className="mt-4 leading-relaxed text-slate-600">
          大型醫院、診所群、實驗室、數據中心、大型商場、甲級商廈、工業園區、大學校園、公共基建。
        </p>

        <h2 className="mt-12 text-2xl font-bold text-slate-900">常見問題</h2>
        <div className="mt-5">
          <FAQ items={faqs} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
