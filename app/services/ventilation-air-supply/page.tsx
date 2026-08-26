import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "風喉工程｜鮮風抽氣系統安裝｜食肆通風出牌",
  description:
    "專業風喉工程公司，承接鮮風抽氣系統、風喉風槽製作安裝、風咀定制工程，全程符合食環署及消防出牌標準，商廈寫字樓食肆適用，免費上門度呎報價。",
  alternates: { canonical: "/services/ventilation-air-supply" },
};

const faqs = [
  {
    question: "風喉工程費用大約幾多？",
    answer:
      "視乎風喉長度、物料（鍍鋅鐵、保溫軟喉、不鏽鋼）、樓層及施工難度而定，一般需度呎後報價。我哋提供上門度呎，即日報價。",
  },
  {
    question: "食肆通風系統有咩法例要求？",
    answer:
      "餐廳堂座、廚房及廁所須有各自獨立嘅通風系統，安裝需獲食環署及消防處批准，入氣口或排氣口須離地至少 2.5 米。",
  },
  {
    question: "舊風喉可以更換嗎？",
    answer:
      "可以。我哋承接舊有風喉拆卸、更換及加裝工程，並會協調非營業時段施工，減低對商戶營運嘅影響。",
  },
];

export default function VentilationPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "通風與送風系統工程",
          serviceType: "風喉工程・鮮風抽氣系統",
          provider: { "@type": "HomeAndConstructionBusiness", name: "富成工程公司" },
          areaServed: "香港",
          description:
            "鮮風抽氣系統、風喉風槽製作安裝、風咀定制工程，全程符合食環署及消防出牌標準。",
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
      <Breadcrumb items={[{ name: "工程服務", href: "/" }, { name: "通風與送風系統工程" }]} />

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
          通風與送風系統工程｜風喉安裝、鮮風抽氣系統一站式方案
        </h1>
        <p className="mt-4 leading-relaxed text-slate-600">
          通風與送風系統係食肆、商廈、寫字樓及商場嘅「呼吸系統」。風喉工程做得好，室內空氣流通、溫度均勻、營運合規；做得唔好，輕則通風不均、噪音滋擾，重則影響食環署出牌、浪費高昂改裝成本。
        </p>
        <p className="mt-3 leading-relaxed text-slate-600">
          我哋專業承接各場所<b>鮮風系統、抽氣系統、風喉風槽製作安裝、風咀定制工程</b>，全程符合香港法定出牌標準，由度呎、設計、施工到測試驗收一站式完成。
        </p>

        <h2 className="mt-12 text-2xl font-bold text-slate-900">我們提供嘅風喉工程服務</h2>

        <div className="mt-6 space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-bold text-slate-900">1. 鮮風與抽氣系統（食肆專用）</h3>
            <p className="mt-2 leading-relaxed text-slate-600">
              專為食肆定制<b>鮮風抽氣系統</b>，嚴格遵循<b>食環署、消防處出牌規格</b>，精準把控出風口與抽氣口距離、離地高度等法例要求，確保工程一次過通過審批，<b>食肆通風牌照</b>順利到手。適合餐廳、咖啡店、茶餐廳、外賣店及食物製造廠。
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-bold text-slate-900">2. 風喉／風槽製作與安裝</h3>
            <p className="mt-2 leading-relaxed text-slate-600">
              配合 Fan Coil 冷氣主機做<b>隱藏式接駁</b>，針對狹小空間、商廈樓層限高、樑柱障礙等情況度身定制風喉方案。熟悉各類風喉物料（鍍鋅鐵、保溫軟喉、不鏽鋼）及防火要求，美觀、慳位、實用兼備。
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-bold text-slate-900">3. 風咀設計與安裝</h3>
            <p className="mt-2 leading-relaxed text-slate-600">
              各式標準及<b>定制風咀</b>，精準計算風壓與氣流分配，解決<b>通風不均、噪音、積水</b>等常見問題。可搭配獨家<b>防滴水風咀</b>（無滴汗風咀），杜絕冷凝水積聚滴漏，特別適合食肆及商場天花位置。
            </p>
          </div>
        </div>

        <h2 className="mt-12 text-2xl font-bold text-slate-900">適用場景</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {[
            ["食肆餐廳", "鮮風抽氣、運水煙罩、靜電油煙淨化、出牌通風"],
            ["商廈／寫字樓", "鮮風櫃、抽氣櫃、風喉更換、寫字樓通風改善"],
            ["商場", "大規模風喉工程、風咀定制、氣流平衡"],
            ["公共機構", "學校、醫院、老人院通風系統、空氣淨化加裝"],
          ].map(([t, d]) => (
            <div key={t} className="rounded-xl bg-slate-50 p-5">
              <h3 className="font-bold text-slate-900">{t}</h3>
              <p className="mt-1 text-sm text-slate-500">{d}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-12 text-2xl font-bold text-slate-900">服務優勢</h2>
        <ul className="mt-5 space-y-3 text-slate-600">
          <li>・ <b>合規出牌</b>：熟悉食環署、消防處、屋宇署各項通風要求，出牌唔使走冤枉路</li>
          <li>・ <b>隱藏式設計</b>：風喉接駁隱藏美觀，唔影響樓底高度及裝修效果</li>
          <li>・ <b>氣流精準分配</b>：度呎計算風壓，每區送風均勻，杜絕「死角位」</li>
          <li>・ <b>獨家防滴水風咀</b>：解決冷凝水積水痛點，減少維修煩惱</li>
          <li>・ <b>全港覆蓋</b>：港島、九龍、新界均有工程團隊，風喉工程上門報價</li>
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
