import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "洗冷氣服務｜冷氣清洗保養・深層清洗",
  description:
    "專業洗冷氣服務：分體式、窗口機、天花機、風喉機深層清洗，辦公室中央冷氣清洗、食肆冷氣清洗，支持夜間施工，明碼實價，全港上門。",
  alternates: { canonical: "/services/cleaning-maintenance" },
};

const faqs = [
  {
    question: "冷氣機幾耐要洗一次？",
    answer:
      "住宅一般每年清洗 1–2 次；辦公室及商鋪建議每季清洗隔塵網、每年深層清洗；食肆因油煙大，建議每半年深層清洗一次。",
  },
  {
    question: "深層清洗同普通清洗有咩分別？",
    answer:
      "普通清洗只做隔塵網及表面；深層清洗會拆開機組，用高壓藥水清洗鰭片、風輪、去水盤及內部，徹底清除塵垢油煙，恢復製冷力。",
  },
  {
    question: "清洗會唔會影響營業？",
    answer:
      "唔會。商用場所可安排夜間或假日施工，收舖後先開工，朝早開門已經清潔完畢，完全唔影響營運。",
  },
];

const priceTable = [
  ["清洗窗口機", "住宅", "$850起"],
  ["清洗掛牆分體機", "住宅、小型商鋪", "$1,200起"],
  ["清洗四面出風分體機", "商鋪、辦公室", "$1,200起"],
  ["清洗豬籠機 Fan Coil（FCU）", "辦公室、寫字樓", "$1,400起"],
];


export default function CleaningMaintenancePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "冷氣機清洗保養",
          serviceType: "洗冷氣・深層清洗",
          provider: { "@type": "HomeAndConstructionBusiness", name: "富成工程公司" },
          areaServed: "香港",
          description:
            "洗冷氣、中央冷氣清洗、深層清洗，商用住宅明碼實價，支持夜間施工。",
          offers: {
            "@type": "Offer",
            priceSpecification: {
              "@type": "PriceSpecification",
              price: "450",
              priceCurrency: "HKD",
              description: "分體式／窗口機清洗起",
            },
          },
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
      <Breadcrumb items={[{ name: "冷氣機安裝" }, { name: "清洗保養" }]} />

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
          冷氣機清洗保養｜專業洗冷氣、深層清洗服務
        </h1>
        <p className="mt-4 leading-relaxed text-slate-600">
          冷氣機長期唔洗，隔塵網積塵、鰭片堵塞，製冷變差、電費上升，甚至引發霉味、細菌滋生，影響家人、員工同顧客健康。定期<b>洗冷氣</b>，先可以保持製冷力、慳電又衛生。
        </p>
        <p className="mt-3 leading-relaxed text-slate-600">
          富成工程公司提供專業<b>冷氣清洗保養</b>服務：分體式、窗口機、天花機、風喉機、中央冷氣深層清洗，商用住宅都服務，明碼實價。
        </p>

        <h2 className="mt-12 text-2xl font-bold text-slate-900">清洗服務範圍</h2>

        <div className="mt-6 space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-bold text-slate-900">1. 住宅洗冷氣</h3>
            <p className="mt-2 leading-relaxed text-slate-600">
              窗口式、分體式、窗口分體機清洗套餐，<b>洗冷氣價錢</b>明碼實價，師傅上門快速完成，屋企即刻涼快。
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-bold text-slate-900">2. 辦公室中央冷氣清洗</h3>
            <p className="mt-2 leading-relaxed text-slate-600">
              風喉機、口琴機、天花機、櫃機<b>深層清洗</b>，支持<b>夜間施工</b>，唔影響日間辦公，員工呼吸健康空氣。
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-bold text-slate-900">3. 食肆冷氣清洗</h3>
            <p className="mt-2 leading-relaxed text-slate-600">
              針對油煙積聚問題，高壓藥水<b>深度清洗</b>，消除異味，客人食得舒服，冷氣仲慳電。
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-bold text-slate-900">4. 定期清洗保養計畫</h3>
            <p className="mt-2 leading-relaxed text-slate-600">
              商舖、辦公室可選<b>定期清洗保養</b>計畫，按季度上門清洗，長期保持製冷效果，慳電又耐用。
            </p>
          </div>
        </div>

        <h2 className="mt-12 text-2xl font-bold text-slate-900">收費參考</h2>
        <div className="mt-5 overflow-hidden rounded-xl border border-slate-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-500">
              <tr>
                <th className="px-4 py-3 font-semibold">服務</th>
                <th className="px-4 py-3 font-semibold">適用場景</th>
                <th className="px-4 py-3 font-semibold">收費參考</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {priceTable.map(([s, scene, price]) => (
                <tr key={s}>
                  <td className="px-4 py-3 font-medium text-slate-900">{s}</td>
                  <td className="px-4 py-3 text-slate-500">{scene}</td>
                  <td className="px-4 py-3 text-slate-700">{price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-slate-400">*實際收費視乎機型、匹數及數量，歡迎查詢報價。</p>

        <h2 className="mt-12 text-2xl font-bold text-slate-900">服務優勢</h2>
        <ul className="mt-5 space-y-3 text-slate-600">
          <li>・ <b>深層清洗</b>：拆機清洗鰭片、風輪、去水盤，徹底除塵除油煙</li>
          <li>・ <b>支持夜間施工</b>：商用場所唔影響營業</li>
          <li>・ <b>明碼實價</b>：報價清晰，無隱藏收費</li>
          <li>・ <b>全港上門</b>：港島、九龍、新界都有服務</li>
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
