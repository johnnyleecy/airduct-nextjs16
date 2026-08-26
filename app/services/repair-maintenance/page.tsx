import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "冷氣維修保養｜24小時緊急維修・冷氣保養合約",
  description:
    "冷氣維修、冷氣保養一站式：24小時緊急維修、漏水唔凍即日處理、商廈承包保養合約、定期檢測，全港上門，明碼實價。",
  alternates: { canonical: "/services/repair-maintenance" },
};

const faqs = [
  {
    question: "冷氣漏水點算？",
    answer:
      "先關機並清理去水盤，再聯絡我哋安排上門檢查。常見原因係去水喉堵塞或去水泵故障，一般即日可處理。",
  },
  {
    question: "冷氣保養合約點計？",
    answer:
      "按機型、數量及服務範圍報價，包月／包年任揀，可加入緊急維修優先服務，收費透明。",
  },
  {
    question: "緊急維修幾時可以到場？",
    answer:
      "商業客戶優先處理，一般可安排即日或翌日到場，24小時熱線支援，將停機損失減到最低。",
  },
];

export default function RepairMaintenancePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "冷氣機維修保養",
          serviceType: "冷氣維修・冷氣保養合約",
          provider: { "@type": "HomeAndConstructionBusiness", name: "富成工程公司" },
          areaServed: "香港",
          description:
            "24小時緊急維修、冷氣保養合約、定期檢測，漏水唔凍即日處理。",
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
      <Breadcrumb items={[{ name: "冷氣機安裝" }, { name: "維修保養" }]} />

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
          冷氣機維修保養｜24小時緊急維修、保養合約
        </h1>
        <p className="mt-4 leading-relaxed text-slate-600">
          冷氣機突然唔凍、漏水、發出怪聲？夏天冇冷氣真係會令人燥底！富成工程公司提供<b>冷氣維修保養</b>一站式服務：突發故障<b>24小時緊急維修</b>、定期保養合約、商廈承包保養，快速上門，明碼實價。
        </p>

        <h2 className="mt-12 text-2xl font-bold text-slate-900">維修保養服務範圍</h2>

        <div className="mt-6 space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-bold text-slate-900">1. 日常突發維修</h3>
            <p className="mt-2 leading-relaxed text-slate-600">
              快速處理各類突發問題：<b>冷氣漏水、冷氣唔凍、水喉淤塞、摩打更換、水喉掣故障</b>、加雪種等。設<b>24小時緊急冷氣維修</b>熱線，商業客戶優先處理。
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-bold text-slate-900">2. 冷氣保養合約（商廈承包保養）</h3>
            <p className="mt-2 leading-relaxed text-slate-600">
              為<b>商廈、寫字樓、商場、會所</b>提供包月／包年定制<b>冷氣保養合約</b>：全幢大廈冷氣及水喉系統定期檢測、保養維護。定期保養有效延長機件壽命、減低突發故障。
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-bold text-slate-900">3. 定期檢測保養</h3>
            <p className="mt-2 leading-relaxed text-slate-600">
              冷氣系統<b>定期檢測</b>：雪種壓力、風機盤管、去水系統、過濾網全面檢查，及早發現問題，慳返大筆維修費。
            </p>
          </div>
        </div>

        <h2 className="mt-12 text-2xl font-bold text-slate-900">維修流程</h2>
        <ol className="mt-5 list-decimal space-y-2 pl-5 text-slate-600">
          <li><b>電話／WhatsApp 求助</b>：描述故障情況，安排師傅上門</li>
          <li><b>上門檢測</b>：檢查故障根源，報價確認後先維修</li>
          <li><b>專業維修</b>：持牌師傅施工，更換零件明碼實價</li>
          <li><b>測試交收</b>：即場測試運作，確認正常先交收</li>
        </ol>

        <h2 className="mt-12 text-2xl font-bold text-slate-900">服務優勢</h2>
        <ul className="mt-5 space-y-3 text-slate-600">
          <li>・ <b>全天候維修</b>：24小時緊急支援，突發故障唔使等到聽日</li>
          <li>・ <b>定期保養</b>：合約制定期檢測，壞機率大幅下降，慳返大筆維修費</li>
          <li>・ <b>商業優先</b>：商廈、食肆客戶優先處理，停機損失減到最低</li>
          <li>・ <b>明碼實價</b>：報價清晰，零件更換前先確認</li>
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
