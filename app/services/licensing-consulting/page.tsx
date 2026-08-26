import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "專業牌照顧問服務｜食肆通風牌照・牌照申請一條龍",
  description:
    "食肆通風牌照顧問：新店現場勘測、後巷散熱及鮮風抽氣佈局評估、Form D證書、普通食肆／小食食肆／食物製造廠牌照申請協助，工程＋出牌一條龍。",
  alternates: { canonical: "/services/licensing-consulting" },
};

const faqs = [
  {
    question: "食肆通風牌照要點申請？",
    answer:
      "需向食環署提交通風系統簡圖及相關證明，系統須符合堂座、廚房、廁所獨立通風及離地高度等要求。我哋可先勘測評估，再安排合規工程及文件，協助順利出牌。",
  },
  {
    question: "你哋熟識邊啲食肆牌照？",
    answer:
      "普通食肆牌照、小食食肆牌照、食物製造廠牌照及相關消防、屋宇署審批程序，我哋都熟悉，知道邊啲位容易「肥佬」，可提前修正工程方案。",
  },
  {
    question: "出牌工程同顧問可以一齊做嗎？",
    answer:
      "可以。我哋係工程公司兼顧問，評估完直接安排合規工程，由通風系統 Form D 證書到鮮風抽氣安裝一次過完成，工程與審批無縫對接。",
  },
];

const licences = [
  ["普通食肆牌照", "餐廳、茶餐廳、酒樓"],
  ["小食食肆牌照", "小食店、快餐、外賣為主"],
  ["食物製造廠牌照", "中央廚房、食物工場"],
];

export default function LicensingConsultingPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "專業牌照顧問服務",
          serviceType: "食肆通風牌照顧問・牌照申請",
          provider: { "@type": "HomeAndConstructionBusiness", name: "富成工程公司" },
          areaServed: "香港",
          description:
            "食肆通風牌照顧問、各類食肆牌照申請、Form D證書及出牌工程一條龍。",
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
      <Breadcrumb items={[{ name: "顧問服務" }, { name: "專業牌照顧問服務" }]} />

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
          專業牌照顧問服務｜食肆通風牌照、出牌工程一條龍
        </h1>
        <p className="mt-4 leading-relaxed text-slate-600">
          開餐廳最關鍵嘅一關，就係<b>出牌</b>。食環署、消防處、屋宇署重重審批，任何一環出錯都會拖慢開業，甚至要拆裝修重做。與其靠自己摸索，不如交俾熟悉出牌程序嘅專業顧問。
        </p>
        <p className="mt-3 leading-relaxed text-slate-600">
          富成工程公司提供<b>專業牌照顧問服務</b>，由新店現場勘測、合規工程設計，到 <b>Form D 證書</b>及出牌文件準備，一條龍協助你順利攞到<b>食肆牌照</b>，少走冤枉路。
        </p>

        <h2 className="mt-12 text-2xl font-bold text-slate-900">我哋嘅牌照顧問服務</h2>

        <div className="mt-6 space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-bold text-slate-900">1. 食肆通風牌照顧問</h3>
            <p className="mt-2 leading-relaxed text-slate-600">
              新店現場勘測，評估<b>後巷散熱、鮮風抽氣佈局</b>，提供專業合規建議，協助<b>食肆通風牌照</b>順利批出。知道邊啲位容易「肥佬」，提前修正工程方案。
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-bold text-slate-900">2. 各類食肆牌照申請協助</h3>
            <p className="mt-2 leading-relaxed text-slate-600">
              熟悉各類牌照要求——<b>普通食肆牌照、小食食肆牌照、食物製造廠牌照</b>——由文件準備、圖則提交到消防及屋宇署審批，全程跟進。
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-bold text-slate-900">3. 出牌工程一條龍</h3>
            <p className="mt-2 leading-relaxed text-slate-600">
              配合我哋嘅冷氣及通風工程團隊，由<b>通風系統 Form D 證書</b>、靜電油煙淨化系統，到鮮風抽氣安裝，一次過完成，工程與審批無縫對接，慳時間慳成本。
            </p>
          </div>
        </div>

        <h2 className="mt-12 text-2xl font-bold text-slate-900">我哋熟悉嘅牌照類型</h2>
        <div className="mt-5 overflow-hidden rounded-xl border border-slate-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-500">
              <tr>
                <th className="px-4 py-3 font-semibold">牌照類型</th>
                <th className="px-4 py-3 font-semibold">適用場所</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {licences.map(([name, scene]) => (
                <tr key={name}>
                  <td className="px-4 py-3 font-medium text-slate-900">{name}</td>
                  <td className="px-4 py-3 text-slate-500">{scene}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="mt-12 text-2xl font-bold text-slate-900">出牌流程</h2>
        <ol className="mt-5 list-decimal space-y-2 pl-5 text-slate-600">
          <li><b>現場勘測</b>：評估通風佈局、後巷散熱及消防條件</li>
          <li><b>合規設計</b>：制定通風系統及消防工程方案</li>
          <li><b>工程施工</b>：鮮風抽氣、油煙淨化、Form D 證書</li>
          <li><b>文件提交</b>：協助準備圖則及證明文件，跟進審批</li>
        </ol>

        <h2 className="mt-12 text-2xl font-bold text-slate-900">服務優勢</h2>
        <ul className="mt-5 space-y-3 text-slate-600">
          <li>・ <b>工程＋顧問一條龍</b>：顧問評估完直接施工，唔使兩邊夾</li>
          <li>・ <b>熟悉政府審批</b>：食環署、消防處、屋宇署要求爛熟於胸</li>
          <li>・ <b>出牌成功率更高</b>：提前發現問題，避免「肥佬」返工</li>
          <li>・ <b>收費透明化</b>：明碼標價，專業知識落地，無隱藏收費</li>
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
