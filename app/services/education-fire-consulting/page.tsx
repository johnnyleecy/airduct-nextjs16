import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "教育中心消防顧問｜1.5小時防火門・消防通風改造",
  description:
    "專為教育中心提供消防合規顧問：1.5小時防火門、特殊走火通道、消防通風高規格改造，符合教育局及消防處要求，專業評估＋施工一條龍。",
  alternates: { canonical: "/services/education-fire-consulting" },
};

const faqs = [
  {
    question: "教育中心防火門一定要 1.5 小時耐火嗎？",
    answer:
      "按消防處及教育局規定，教育用途場所嘅防火門須符合指定耐火時數，我哋會按實際圖則及審批要求核對，確保規格正確。",
  },
  {
    question: "學校／教育中心可以點樣減少停課時間做工程？",
    answer:
      "我哋會安排週末、假期或課後時段施工，分區進行，並提前與校方協調，盡量唔影響教學進度。",
  },
  {
    question: "裝修緊先知唔合規，仲有得救嗎？",
    answer:
      "有。我哋提供合規改造服務，檢測現有問題、出改造方案，直接施工到驗收，幫你盡快拎到合規證明。",
  },
];

const services = [
  ["消防合規評估", "防火門、走火通道、消防通風全面檢測"],
  ["1.5小時防火門工程", "更換／安裝，連同門框配件一次過"],
  ["走火通道改造", "通道闊度、出口設計、疏散路線優化"],
  ["消防通風改造", "防火風喉、防煙分隔、排煙系統"],
  ["防火間隔規劃", "防火分隔、防火物料、審批文件"],
  ["出牌文件支援", "消防處表格、圖則、證明文件準備"],
];

export default function EducationFirePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "教育中心專屬消防顧問",
          serviceType: "教育機構消防顧問・防火門工程",
          provider: { "@type": "HomeAndConstructionBusiness", name: "富成工程公司" },
          areaServed: "香港",
          description:
            "1.5小時防火門、特殊走火通道、消防通風高規格改造與合規評估服務。",
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
      <Breadcrumb items={[{ name: "工程服務", href: "/" }, { name: "教育中心消防顧問" }]} />

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
          教育中心消防顧問｜高規格合規改造、評估一站式服務
        </h1>
        <p className="mt-4 leading-relaxed text-slate-600">
          教育中心嘅消防合規要求，係全港<b>最高規格</b>之一：小朋友嘅安全不容有失，教育局、消防處對<b>防火門規格、走火通道、消防通風</b>都有嚴格規定。好多教育中心裝修完先發現唔合規，要拆要改，錢使咗之餘仲要停課整改，損失慘重。
        </p>
        <p className="mt-3 leading-relaxed text-slate-600">
          我哋專為<b>教育中心、補習社、幼稚園、學校</b>提供<b>消防合規顧問</b>，熟悉教育機構獨有嘅高規格要求，提供專業改造與合規評估服務，助你一次過通過審批，安心開課。
        </p>

        <h2 className="mt-12 text-2xl font-bold text-slate-900">教育中心消防合規嘅特殊要求</h2>

        <div className="mt-6 space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-bold text-slate-900">1. 1.5小時防火門（耐火規格）</h3>
            <p className="mt-2 leading-relaxed text-slate-600">
              教育機構嘅防火門要求遠比一般商舖嚴格：需符合<b>1.5小時耐火</b>規格，連同門框、門鉸、閉門器一併符合標準。我哋熟悉教育局及消防處對<b>防火門</b>嘅完整要求，提供檢測、更換、安裝一條龍，確保達標。
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-bold text-slate-900">2. 特殊走火通道設計</h3>
            <p className="mt-2 leading-relaxed text-slate-600">
              教育場所人流密集、用家包括兒童，<b>走火通道</b>要求特別嚴謹：通道闊度、出口數量、疏散距離、防煙設計均有特定規格。我哋提供<b>走火通道合規評估</b>，及早發現路線設計問題，避免「肥佬」返工。
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-bold text-slate-900">3. 消防通風高規格改造</h3>
            <p className="mt-2 leading-relaxed text-slate-600">
              教育中心嘅通風系統須符合消防處<b>防煙、排煙</b>要求：防火風喉、防煙分隔、排煙裝置缺一不可。我哋提供<b>消防通風改造</b>，由設計、施工到測試，確保火災時煙霧控制達標。
            </p>
          </div>
        </div>

        <h2 className="mt-12 text-2xl font-bold text-slate-900">我哋提供嘅專業服務</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {services.map(([t, d]) => (
            <div key={t} className="rounded-xl bg-slate-50 p-5">
              <h3 className="font-bold text-slate-900">{t}</h3>
              <p className="mt-1 text-sm text-slate-500">{d}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-12 text-2xl font-bold text-slate-900">適用場景</h2>
        <p className="mt-4 leading-relaxed text-slate-600">
          幼稚園、小學、中學、補習社、興趣班、Playgroup、語言中心、培訓機構、安老院舍（高規格同類標準）。
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
