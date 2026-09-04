import type { Metadata } from "next";
import Image from "next/image";
import JsonLd from "@/components/JsonLd";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "牌照與場地顧問｜租鋪前可行性評估・出牌風險分析",
  description:
    "租鋪前場地可行性評估、出牌風險分析、工程方案優化，避免租錯鋪、慳返幾十萬改裝成本，明碼標價按次收費，專業顧問上門評估。",
  alternates: { canonical: "/services/licence-site-consulting" },
};

const faqs = [
  {
    question: "點解租鋪前要做場地可行性評估？",
    answer:
      "部分舖位受後巷、座向限制，根本無法安裝合規通風或排煙系統，簽約後先知就太遲。評估一次，慳返租約、裝修幾十萬。",
  },
  {
    question: "場地可行性評估收費點計？",
    answer:
      "按次收費，明碼標價，上門評估後即日提供報告，包括出牌可行性、工程方案及預算估算。",
  },
  {
    question: "評估內容包括啲咩？",
    answer:
      "包括後巷散熱空間、鮮風抽氣佈局、消防間隔、合規風險及改裝成本估算，並提供優化建議。",
  },
];

export default function LicenceSiteConsultingPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "牌照與場地顧問",
          serviceType: "場地可行性評估・出牌顧問",
          provider: { "@type": "HomeAndConstructionBusiness", name: "富成工程公司" },
          areaServed: "香港",
          description:
            "租鋪前場地可行性評估、出牌風險分析、工程方案優化，避免租錯鋪、慳返改裝成本。",
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
      <Breadcrumb items={[{ name: "顧問服務" }, { name: "牌照與場地顧問" }]} />

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
          牌照與場地顧問｜租鋪前可行性評估，避免租錯鋪
        </h1>
        <p className="mt-4 leading-relaxed text-slate-600">
          開餐廳、開鋪最怕咩？租咗間鋪先發現<b>出唔到牌</b>，裝修改完又改，錢使咗、時間拖咗，最後仲要面對食環署、消防處、屋宇署重重審批。與其事後補救，不如<b>事前做一次場地可行性評估</b>。
        </p>
        <p className="mt-3 leading-relaxed text-slate-600">
          富成工程公司提供<b>牌照與場地顧問</b>服務，由工程角度評估舖位能否出牌、優化工程方案、計算改裝成本，幫你避坑慳成本，租鋪簽約前就心中有數。
        </p>

        <div className="mt-5 relative h-[250px] md:h-[450px]  w-full">
          <Image
            src="/images/banner/licence-site-consulting.jpg"
            alt="冷氣通風工程服務"
            fill
            sizes="(max-width:1024px) 100vw, 50vw"
            className="object-cover rounded-2xl"
            priority
          />
        </div>

        <h2 className="mt-12 text-2xl font-bold text-slate-900">我哋嘅顧問服務</h2>

        <div className="mt-6 space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-bold text-slate-900">1. 場地可行性評估（按次收費）</h3>
            <p className="mt-2 leading-relaxed text-slate-600">
              協助客戶判斷<b>舖位能否出牌</b>、優化工程方案、計算改裝成本，避免租賃無效場地。租鋪前做一次評估，隨時慳返幾十萬裝修費。明碼標價，上門評估後即日提供報告。
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-bold text-slate-900">2. 出牌風險分析</h3>
            <p className="mt-2 leading-relaxed text-slate-600">
              逐項檢查座向、後巷散熱空間、鮮風抽氣佈局、消防間隔等<b>出牌關鍵因素</b>，提前指出容易「肥佬」嘅位，並提供修正方案，避免簽約後先知死。
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-bold text-slate-900">3. 工程方案優化</h3>
            <p className="mt-2 leading-relaxed text-slate-600">
              按場地實際情況設計<b>合規工程方案</b>，包括通風系統、消防改造及冷氣佈局，並提供預算估算，令你裝修前清楚晒成本，唔使「邊做邊加錢」。
            </p>
          </div>
        </div>

        <h2 className="mt-12 text-2xl font-bold text-slate-900">評估流程</h2>
        <ol className="mt-5 list-decimal space-y-2 pl-5 text-slate-600">
          <li><b>預約上門</b>：提供舖位地址及經營意向（辦公室 / 餐廳／咖啡店／外賣店等）</li>
          <li><b>現場勘測</b>：檢查通風條件、消防間隔及後巷環境</li>
          <li><b>風險報告</b>：即日提供可行性評估、工程方案及預算估算</li>
          <li><b>跟進支援</b>：如需施工，可直接安排富成工程團隊一條龍跟進</li>
        </ol>

        <h2 className="mt-12 text-2xl font-bold text-slate-900">適用場景</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {[
            ["新餐廳／咖啡店", "租鋪前評估、出牌風險分析"],
            ["商鋪轉手頂讓", "接手前檢查原鋪出牌狀態"],
            ["外賣店／食物製造廠", "通風合規、牌照可行性"],
            ["樓上舖食店", "後巷散熱、鮮風抽氣佈局評估"],
          ].map(([t, d]) => (
            <div key={t} className="rounded-xl bg-slate-50 p-5">
              <h3 className="font-bold text-slate-900">{t}</h3>
              <p className="mt-1 text-sm text-slate-500">{d}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-12 text-2xl font-bold text-slate-900">服務優勢</h2>
        <ul className="mt-5 space-y-3 text-slate-600">
          <li>・ <b>避坑慳成本</b>：出牌問題提早發現，避免租錯鋪、改錯裝修，隨時慳幾十萬</li>
          <li>・ <b>工程＋顧問一條龍</b>：評估完可直接安排施工，唔使顧問同工程公司兩邊夾</li>
          <li>・ <b>熟悉政府審批</b>：食環署、消防處、屋宇署要求爛熟於胸</li>
          <li>・ <b>收費透明化</b>：明碼標價上門評估服務，無隱藏收費</li>
        </ul>

        <h2 className="mt-12 text-2xl font-bold text-slate-900">常見問題</h2>
        <div className="mt-5">
          <FAQ items={faqs} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
