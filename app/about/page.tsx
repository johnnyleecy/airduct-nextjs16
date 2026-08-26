import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "關於我們｜註冊冷氣工程公司",
  description:
    "認識富成工程公司：多年冷氣通風工程經驗、註冊電業承辦商團隊，服務食肆、商廈、豪宅及大型機構，工程案例遍佈全港，一站式工程一條龍。",
  alternates: { canonical: "/about" },
};

const values = [
  { t: "專業持牌", d: "註冊電業承辦商，團隊具備豐富工程經驗，所有施工符合機電工程署、消防處及屋宇署要求。" },
  { t: "合規出牌", d: "熟悉食環署、消防處出牌程序，由工程到文件一條龍，幫客戶慳時間慳成本。" },
  { t: "技術領先", d: "行內少有嘅無滴汗風咀技術、醫院級大型製冷經驗，以技術建立口碑。" },
  { t: "以客為本", d: "透明報價、準時完工，做完工程仲有保養跟進，長遠合作夥伴。" },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "關於富成工程公司",
          url: `${siteConfig.url}/about`,
        }}
      />
      <Breadcrumb items={[{ name: "關於我們" }]} />

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">關於我們</h1>
        <p className="mt-4 text-slate-500">
          本公司專營香港風喉及冷氣工程，提供設計、安裝、維保及食肆通風牌照顧問一站式服務，服務食肆、商廈、豪宅等場地，報價透明，專注合規工程。
        </p>

        <div className="mt-10 space-y-10">
          <div>
            <h2 className="text-xl font-bold text-slate-900">公司核心價值</h2>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              {values.map((v) => (
                <div key={v.t} className="rounded-2xl border border-slate-200 bg-white p-6">
                  <h3 className="font-bold text-slate-900">{v.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{v.d}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900">我哋服務嘅客戶</h2>
            <p className="mt-3 leading-relaxed text-slate-600">
              食肆餐廳（出牌通風、無滴汗風咀）、商業寫字樓及商廈管理處（VRV安裝、全幢保養合約）、私人豪宅獨立屋（恆溫通風、隱藏式風喉）、大型商場／教育中心／醫療機構（醫院級Chiller、消防通風改造）。無論工程規模大小，我哋都以同樣專業態度處理。
            </p>
          </div>

          <div className="rounded-2xl border border-sky-200 bg-sky-50 p-6">
            <h2 className="text-lg font-bold text-slate-900">聯絡我哋</h2>
            <ul className="mt-3 space-y-1 text-sm text-slate-600">
              <li>電話：{siteConfig.phonenumber}</li>
              <li>地址：{siteConfig.address}</li>
              <li>服務時間：{siteConfig.hours}</li>
            </ul>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
