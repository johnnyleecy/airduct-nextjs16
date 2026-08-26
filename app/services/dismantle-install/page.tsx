import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "冷氣機拆除及安裝｜分體式・窗口機・天花機安裝",
  description:
    "冷氣機拆除、安裝、更換、搬遷一條龍：分體式冷氣安裝、窗口機安裝、天花機安裝，安裝連搭棚、舊機拆除回收，明碼實價，全港上門。",
  alternates: { canonical: "/services/dismantle-install" },
};

const faqs = [
  {
    question: "安裝分體式冷氣要幾耐？",
    answer:
      "一般住宅分體機安裝約 2–4 小時，商用或需要搭棚嘅工程另計，我哋會按實際情況報價及安排。",
  },
  {
    question: "舊冷氣機可以幫我拆除回收嗎？",
    answer:
      "可以。我哋提供舊機拆除、搬遷及回收服務，拆機後會妥善處理雪種及喉管，符合環保規定。",
  },
  {
    question: "安裝費用包啲咩？",
    answer:
      "標準安裝包括機架、基本喉管、雪種接駁及測試，費用透明；如需要搭棚、加長喉管或特別安裝位置，會提前報價確認。",
  },
];

export default function DismantleInstallPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "冷氣機拆除及安裝",
          serviceType: "冷氣安裝・拆除・更換",
          provider: { "@type": "HomeAndConstructionBusiness", name: "富成工程公司" },
          areaServed: "香港",
          description:
            "冷氣機拆除、安裝、更換、搬遷，分體式／窗口機／天花機，安裝連搭棚。",
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
      <Breadcrumb items={[{ name: "冷氣機安裝" }, { name: "拆除及安裝" }]} />

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
          冷氣機拆除及安裝｜分體式、窗口機、天花機一條龍
        </h1>
        <p className="mt-4 leading-relaxed text-slate-600">
          換冷氣機最怕遇到「裝機快、拆機慢」嘅師傅，又或者安裝位唔啱、喉管外露影響外觀。富成工程公司提供<b>冷氣機拆除及安裝</b>一站式服務：由舊機拆除、搬遷，到新機安裝、測試，一次過搞掂，明碼實價。
        </p>

        <h2 className="mt-12 text-2xl font-bold text-slate-900">我哋嘅拆除及安裝服務</h2>

        <div className="mt-6 space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-bold text-slate-900">1. 分體式冷氣安裝</h3>
            <p className="mt-2 leading-relaxed text-slate-600">
              住宅、商鋪及小型辦公室<b>分體式冷氣安裝</b>，包括室內外機定位、喉管接駁、雪種測試，安裝位置精準、喉管整齊，美觀又慳位。
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-bold text-slate-900">2. 窗口機安裝／拆除</h3>
            <p className="mt-2 leading-relaxed text-slate-600">
              <b>窗口機安裝</b>、舊窗口機拆除，配合窗台尺寸訂造托架，安裝穩固、防水妥善，適合住宅及租盤單位。
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-bold text-slate-900">3. 天花機安裝</h3>
            <p className="mt-2 leading-relaxed text-slate-600">
              商鋪、寫字樓常用嘅<b>天花機安裝</b>（口琴機），配合假天花設計，隱藏機身、慳位美觀，商用空間最適合。
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-bold text-slate-900">4. 舊機拆除／搬遷／更換</h3>
            <p className="mt-2 leading-relaxed text-slate-600">
              舊冷氣機<b>拆除</b>、<b>搬遷</b>到新地址、<b>更換</b>新機一站式處理，拆機後妥善回收，唔使你煩惱舊機點處理。
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-bold text-slate-900">5. 安裝連搭棚</h3>
            <p className="mt-2 leading-relaxed text-slate-600">
              高層單位、外牆安裝需要<b>搭棚</b>？我哋可以安排合資格棚架，安裝連搭棚一條龍，安全合規。
            </p>
          </div>
        </div>

        <h2 className="mt-12 text-2xl font-bold text-slate-900">安裝流程</h2>
        <ol className="mt-5 list-decimal space-y-2 pl-5 text-slate-600">
          <li><b>上門睇位</b>：上門度呎，評估安裝位置及喉管走線</li>
          <li><b>清晰報價</b>：列明安裝費、物料及附加項目，無隱藏收費</li>
          <li><b>專業安裝</b>：持牌師傅施工，喉管整齊、測試完善</li>
          <li><b>完工驗收</b>：即場測試製冷效果，確認先交收</li>
        </ol>

        <h2 className="mt-12 text-2xl font-bold text-slate-900">服務優勢</h2>
        <ul className="mt-5 space-y-3 text-slate-600">
          <li>・ <b>持牌施工</b>：註冊電業承辦商，工程符合機電工程署要求</li>
          <li>・ <b>安裝連搭棚</b>：高層單位都搞得掂，安全合規</li>
          <li>・ <b>舊機回收</b>：拆機搬遷一條龍，唔使你煩惱</li>
          <li>・ <b>明碼實價</b>：報價清晰，完工先收款</li>
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
