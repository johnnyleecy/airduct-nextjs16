import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "無滴汗風咀｜防滴水風咀工程｜消防處認證",
  description:
    "獨家無滴汗風咀技術，100%解決冷熱溫差導致嘅風咀滴水滴汗問題，專用於商場、高級餐廳、頻繁開關門店舖，行內少有嘅皇牌防滴水工程。",
  alternates: { canonical: "/services/no-drip-nozzle" },
};

const faqs = [
  {
    question: "無滴汗風咀同普通風咀有咩分別？",
    answer:
      "普通風咀靠集水盤「接水」，日久積水照樣漏；無滴汗風咀用消防處認證特製物料，從根源杜絕冷凝水凝結，真正零滴水。",
  },
  {
    question: "可以淨係更換風咀，唔郁其他設備？",
    answer:
      "可以。更換工程獨立進行，唔影響原有冷氣系統運作，多數工程一日內完成。",
  },
  {
    question: "商場工程會唔會影響營業？",
    answer:
      "唔會。我哋安排非營業時段（晚間／凌晨）施工，分區進行，配合商場營運時間。",
  },
];

const scenarios = [
  ["商場", "人流密集、開門頻繁、天花高溫差", "大面積安裝防滴水風咀，杜絕行人區水漬"],
  ["頻繁開關門店舖", "門口風咀冷熱空氣交鋒最勁", "門口區域專用防滴水方案，進出唔怕「落雨」"],
  ["高級餐廳", "一滴水落喺客人頭上影響聲譽", "餐桌區全面防滴水，形象零瑕疵"],
  ["酒店大堂、咖啡店", "高樓底加冷氣強勁", "美觀風咀定制，滴水隱患清零"],
];

export default function NoDripNozzlePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "獨家無滴汗防滴水風咀技術",
          serviceType: "無滴汗風咀工程・防滴水風咀",
          provider: { "@type": "HomeAndConstructionBusiness", name: "富成工程公司" },
          areaServed: "香港",
          description:
            "消防處認證特製風咀，100%解決冷熱溫差導致嘅風咀滴水滴汗，專用於商場、高級餐廳及頻繁開關門店舖。",
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
      <Breadcrumb items={[{ name: "工程服務", href: "/" }, { name: "無滴汗風咀技術" }]} />

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <p className="inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-700">
          皇牌服務・行內少有
        </p>
        <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
          獨家無滴汗防滴水風咀技術
        </h1>
        <p className="mt-4 leading-relaxed text-slate-600">
          <b>風咀滴水、滴汗</b>，係冷氣通風工程最棘手嘅「隱形殺手」。尤其夏天室內外溫差大，冷凝水喺風咀表面凝結，一滴一滴落喺客人頭上、食物上、貨品上——高級餐廳因為一滴水被投訴？商場中庭因為滴水要圍封？店舖門口開開關關，風咀長期「流汗」？
        </p>
        <p className="mt-3 leading-relaxed text-slate-600">
          我哋獨家研發<b>無滴汗防滴水風咀技術</b>，以<b>消防處認證特製風咀</b>從根源解決冷熱溫差導致嘅滴水滴汗問題，成本為普通物料 <b>4 倍</b>，但效果 100% 可靠——呢個係我哋嘅<b>皇牌服務</b>，亦係同業少有嘅技術壁壘。
        </p>

        <h2 className="mt-12 text-2xl font-bold text-slate-900">點解風咀會滴水滴汗？</h2>
        <p className="mt-4 leading-relaxed text-slate-600">
          冷氣風咀出風溫度低，而風咀表面接觸嘅空氣溫度高、濕度高，溫差令空氣中嘅水蒸氣凝結成水珠，沿風咀邊緣滴落。傳統做法只係加裝集水盤「接住」，治標唔治本；我哋嘅<b>防滴水風咀</b>從物料同氣流設計入手，徹底杜絕冷凝水產生。
        </p>

        <h2 className="mt-12 text-2xl font-bold text-slate-900">三大核心優勢</h2>
        <div className="mt-6 space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-bold text-slate-900">1. 消防處認證特製物料</h3>
            <p className="mt-2 leading-relaxed text-slate-600">
              風咀採用<b>消防處認證</b>嘅高階特製物料，導熱特性經特別調校，大幅減低風咀表面與出風溫差，根源上斷絕冷凝水凝結——唔係「接水」，而係「唔出水」。
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-bold text-slate-900">2. 成本 4 倍，效果 100%</h3>
            <p className="mt-2 leading-relaxed text-slate-600">
              普通風咀物料平、快、易壞；我哋嘅<b>特製無滴汗風咀</b>成本為普通物料 <b>4 倍</b>，換來嘅係零滴水、零滴汗、零投訴。對高級餐廳、大型商場嚟講，呢 4 倍成本係最值嘅投資。
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-bold text-slate-900">3. 精準氣流設計</h3>
            <p className="mt-2 leading-relaxed text-slate-600">
              配合<b>風壓、氣流精準計算</b>，令出風均勻、排水暢順，杜絕「死角位」積水，同時降低風咀噪音，營造安靜舒適環境。
            </p>
          </div>
        </div>

        <h2 className="mt-12 text-2xl font-bold text-slate-900">專用場景：呢啲地方特別易滴水</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {scenarios.map(([t, cause, sol]) => (
            <div key={t} className="rounded-xl bg-slate-50 p-5">
              <h3 className="font-bold text-slate-900">{t}</h3>
              <p className="mt-1 text-sm text-slate-500">{cause}</p>
              <p className="mt-2 text-sm font-medium text-sky-700">{sol}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-12 text-2xl font-bold text-slate-900">工程流程</h2>
        <ol className="mt-5 list-decimal space-y-2 pl-5 text-slate-600">
          <li><b>現場勘測</b>：評估溫差、濕度、風壓及滴水成因</li>
          <li><b>度身設計</b>：按空間定制風咀尺寸、數量及佈局</li>
          <li><b>更換安裝</b>：由持牌師傅更換特製防滴水風咀</li>
          <li><b>測試驗收</b>：模擬運行測試，確保零滴水先交收</li>
        </ol>

        <h2 className="mt-12 text-2xl font-bold text-slate-900">常見問題</h2>
        <div className="mt-5">
          <FAQ items={faqs} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
