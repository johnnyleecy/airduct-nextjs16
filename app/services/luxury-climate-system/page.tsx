import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "豪宅恆溫通風系統｜家庭影院恆溫・酒窖抽濕",
  description:
    "專為超級豪宅定制恆溫通風系統：私人影院靜音送風、酒吧酒窖24小時恆溫抽濕、頂層複式高樓層風壓解決方案，隱藏式風喉設計，美觀與功能兼備。",
  alternates: { canonical: "/services/luxury-climate-system" },
};

const faqs = [
  {
    question: "豪宅恆溫系統同普通冷氣有咩分別？",
    answer:
      "普通冷氣只求「凍」，豪宅恆溫系統追求「恆溫、靜音、恆濕、美觀」四合一，為影院、酒窖等特殊空間度身定制，係完全唔同層次嘅工程。",
  },
  {
    question: "高樓層風壓問題真係有得解決？",
    answer:
      "可以。我哋會做高層風壓計算，配置平衡裝置同特製風咀，徹底解決送風不均同風聲問題。",
  },
  {
    question: "隱藏式風喉日後維修點算？",
    answer:
      "設計時已預留檢修口及可拆卸面板，維修唔使拆牆拆天花，保養無煩惱。",
  },
];

const spaces = [
  ["私人電影院", "靜音送風、聲學風喉、恆溫控場"],
  ["紅酒窖／雪茄房", "24小時恆溫、高效抽濕、濕度監控"],
  ["私人酒吧", "獨立恆溫分區、藏酒櫃區控溫"],
  ["頂層複式", "高層風壓平衡、防風聲倒灌"],
  ["主人套房／書房", "獨立控溫、靜音送風"],
  ["健身房／水療室", "濕度控制、鮮風換氣"],
];

export default function LuxuryClimatePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "超級豪宅特殊恆溫通風系統",
          serviceType: "豪宅恆溫通風・恆溫抽濕",
          provider: { "@type": "HomeAndConstructionBusiness", name: "富成工程公司" },
          areaServed: "香港",
          description:
            "私人影院靜音送風、酒吧酒窖恆溫抽濕、高樓層風壓方案、隱藏式風喉設計。",
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
      <Breadcrumb items={[{ name: "工程服務", href: "/" }, { name: "豪宅恆溫通風系統" }]} />

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
          超級豪宅恆溫通風系統｜私人影院、酒吧、酒窖專屬定制方案
        </h1>
        <p className="mt-4 leading-relaxed text-slate-600">
          豪宅嘅主人，對生活品質嘅要求永遠唔止「夠凍」咁簡單：私人影院要<b>靜音送風</b>、紅酒窖要<b>24小時恆溫抽濕</b>、頂層複式要面對<b>高樓層風壓</b>難題、全屋設計仲要<b>隱藏式風喉</b>唔可破壞美感——呢啲，正正係普通冷氣工程隊永遠做唔到嘅地方。
        </p>
        <p className="mt-3 leading-relaxed text-slate-600">
          我哋專注<b>超級豪宅特殊恆溫通風系統</b>，將工程技術、聲學設計同美學要求融為一體，為頂級家居打造「無感卻恆溫」嘅舒適環境。
        </p>

        <h2 className="mt-12 text-2xl font-bold text-slate-900">我哋擅長解決嘅四大豪宅難題</h2>

        <div className="mt-6 space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-bold text-slate-900">1. 私人電影院：靜音送風系統</h3>
            <p className="mt-2 leading-relaxed text-slate-600">
              睇戲最怕冷氣「呼呼聲」蓋過對白聲、溫度時冷時熱影響觀影體驗。我哋為<b>私人影院</b>定制<b>靜音送風系統</b>：選用低噪風咀、精準風量控制、吸音風喉設計，配合恆溫控制，置身戲院級寧靜環境。
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-bold text-slate-900">2. 酒吧／酒窖：24小時恆溫高效抽濕</h3>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-slate-600">
              <li><b>紅酒窖</b>：恆溫恆濕係紅酒儲存嘅命脈，設計<b>24小時恆溫系統</b>配高效<b>抽濕系統</b>，溫度濕度長期穩定，珍藏酒品狀態完美</li>
              <li><b>私人酒吧</b>：雪茄櫃、酒櫃區域獨立恆溫，宴客時環境舒適體面</li>
              <li>採用<b>恆溫通風系統</b>，即使豪宅無人居住期間，系統照常守護藏酒</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-bold text-slate-900">3. 頂層複式／高樓層：特殊風壓解決方案</h3>
            <p className="mt-2 leading-relaxed text-slate-600">
              頂層複式、高層單位受<b>高樓層風壓</b>影響，風喉出風不穩、送風不均，甚至風聲倒灌。我哋精準計算高層風壓數據，配置<b>風壓平衡裝置</b>及特製風咀，令高樓層一樣送風穩定、靜音舒適。
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-bold text-slate-900">4. 隱藏式風喉設計：美觀與功能兼備</h3>
            <p className="mt-2 leading-relaxed text-slate-600">
              <b>隱藏式風喉設計</b>係豪宅工程嘅靈魂：風喉收藏於假天花、櫃身、地台下，配合 Fan Coil 機組接駁，全屋零外露機件，設計師嘅心思唔會被機件破壞。同時兼顧維修保養便利性，預留檢修口，一勞永逸。
            </p>
          </div>
        </div>

        <h2 className="mt-12 text-2xl font-bold text-slate-900">專屬空間定制方案</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {spaces.map(([t, d]) => (
            <div key={t} className="rounded-xl bg-slate-50 p-5">
              <h3 className="font-bold text-slate-900">{t}</h3>
              <p className="mt-1 text-sm text-slate-500">{d}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-12 text-2xl font-bold text-slate-900">工程流程</h2>
        <ol className="mt-5 list-decimal space-y-2 pl-5 text-slate-600">
          <li><b>設計師級度呎</b>：了解空間用途、美學要求及使用習慣</li>
          <li><b>系統設計</b>：恆溫負荷計算、風喉佈局、隱藏式方案</li>
          <li><b>精密施工</b>：隱藏式安裝、風壓平衡調試</li>
          <li><b>智能控制</b>：全屋分區恆溫、手機遠端操控</li>
          <li><b>長期保養</b>：豪宅專屬保養合約，恆溫系統長效穩定</li>
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
