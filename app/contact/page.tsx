import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import Breadcrumb from "@/components/Breadcrumb";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "聯絡我們｜免費上門報價",
  description:
    "聯絡富成工程公司免費上門度呎報價：WhatsApp／電話／電郵，專人即日回覆，全港各區（港島、九龍、新界）冷氣工程、風喉工程、洗冷氣、出牌顧問服務。",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "聯絡我們",
          url: `${siteConfig.url}/contact`,
        }}
      />
      <Breadcrumb items={[{ name: "聯絡我們" }]} />

      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">聯絡我們</h1>
        <p className="mt-4 text-slate-500">
          有工程查詢？免費上門度呎報價，專人即日回覆。無論係冷氣工程、風喉工程、洗冷氣定出牌顧問，歡迎用任何方式聯絡我哋。
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:shadow-md"
          >
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">WhatsApp</p>
            <p className="mt-2 font-bold text-sky-700">即時查詢・免費報價</p>
            <p className="mt-1 text-sm text-slate-500">{siteConfig.phone}</p>
          </a>
          <a
            href={siteConfig.phoneHref}
            className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:shadow-md"
          >
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">電話</p>
            <p className="mt-2 font-bold text-slate-900">預約維修・報價熱線</p>
            <p className="mt-1 text-sm text-slate-500">{siteConfig.phone}</p>
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:shadow-md"
          >
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">電郵</p>
            <p className="mt-2 font-bold text-slate-900">工程查詢・報價</p>
            <p className="mt-1 text-sm text-slate-500">{siteConfig.email}</p>
          </a>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-bold text-slate-900">公司資料</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li><span className="font-semibold text-slate-900">地址：</span>{siteConfig.address}</li>
              <li><span className="font-semibold text-slate-900">服務時間：</span>{siteConfig.hours}</li>
              <li><span className="font-semibold text-slate-900">服務地區：</span>{siteConfig.regions}</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-bold text-slate-900">查詢流程</h2>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-slate-600">
              <li>提供場地類型、面積及工程類型</li>
              <li>專人即日回覆，約時間免費上門睇位</li>
              <li>度呎後即日提供清晰報價單</li>
              <li>確認後安排施工，完工驗收</li>
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
