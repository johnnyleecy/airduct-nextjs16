import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { navCategories } from "@/lib/services";
import { siteConfig } from "@/lib/site";
import JsonLd from "@/components/JsonLd";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import { ShieldCheck, Wrench, Lightbulb, BadgeDollarSign } from "lucide-react";

export const metadata: Metadata = {
  title: "冷氣工程公司｜風喉工程・冷氣安裝維修保養・食肆出牌",
  description:
    "富成工程公司：風喉工程、冷氣安裝、洗冷氣、冷氣維修保養、VRV多聯機、食肆通風出牌、無滴汗風咀及豪宅恆溫通風，全港親身上門度呎報價。",
  alternates: { canonical: "/" },
};

const homeFaqs = [
  {
    question: "點解揀富成工程公司做冷氣工程？",
    answer:
      "我哋係一站式冷氣通風工程公司，涵蓋風喉工程、冷氣安裝、洗冷氣保養、出牌顧問及獨家無滴汗風咀技術，由度呎、設計、施工到驗收一條龍，全港親身上門報價。",
  },
  {
    question: "服務地區包括邊度？",
    answer:
      "全港覆蓋：香港島（中環、灣仔、銅鑼灣、北角）、九龍（土瓜灣、紅磡、觀塘、旺角、九龍灣）、新界（荃灣、沙田、元朗、屯門、將軍澳）等地，無論住宅、商廈定食肆都服務。",
  },
  {
    question: "報價師傅係咪親身過黎？",
    answer:
      "係㗎，報價會有師傅親身落場上門視察環境，實地睇晒現場條件，評估場地究竟可唔可以做到閣下嘅工程要求，同時檢視設備狀況、施工限制。即日回覆提供報價，所有項目同費用會寫得清晰透明，絕無隱藏收費，唔會施工中途亂加價。",
  },
  {
    question: "咁上門睇場有冇收費？",
    answer:
      "住宅上門實地勘測會收取 $300 勘測費。如客戶選擇交由本公司承接有關工程，勘測費將會減半，一半費用可於工程總金額內作扣減。商業及大型工程則按工程規模，勘測費 $300 起。",
  },
];


export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "HomeAndConstructionBusiness",
          name: siteConfig.legalName,
          url: siteConfig.url,
          telephone: siteConfig.phone,
          email: siteConfig.email,
          address: {
            "@type": "PostalAddress",
            addressLocality: "香港",
            addressRegion: "九龍",
            streetAddress: siteConfig.address,
          },
          geo: { "@type": "GeoCoordinates", latitude: siteConfig.geo.lat, longitude: siteConfig.geo.lng },
          openingHours: "Mo-Sa 09:00-18:00",
          priceRange: "$$",
          areaServed: ["香港島", "九龍", "新界"],
          sameAs: [siteConfig.social.facebook, siteConfig.social.instagram],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "冷氣通風工程服務",
            itemListElement: navCategories
              .flatMap((c) => c.items)
              .map((s, i) => ({
                "@type": "Offer",
                position: i + 1,
                itemOffered: { "@type": "Service", name: s.title },
              })),
          },
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">
              註冊工程公司・全港上門
            </p>
            <h1 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-5xl">
              冷氣工程・風喉工程・中央冷氣
              <span className="mt-2 block text-sky-400">一站式安裝維修保養</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              承接風喉工程、冷氣安裝、洗冷氣、冷氣維修保養、VRV多聯機、食肆通風出牌及無滴汗風咀工程。服務食肆、商廈、豪宅及大型機構，全程符合香港法定標準，親身上門視察即時報價。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-sky-600 px-8 py-3.5 text-center text-sm font-bold text-white shadow transition hover:bg-sky-700"
              >
                WhatsApp 聯絡我們
              </a>
              <Link
                href="/services/ventilation-air-supply"
                className="rounded-full border border-slate-600 px-8 py-3.5 text-center text-sm font-bold text-slate-200 transition hover:bg-slate-800"
              >
                睇吓工程服務
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services by Category */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">一站式冷氣通風工程服務</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-500">
            由顧問服務、系統工程到冷氣機安裝，全類型工程一間搞掂。
          </p>
        </div>

        {navCategories.map((cat) => (
          <div key={cat.id} className="mt-12">
            <h3 className="text-xl font-bold text-slate-900">{cat.title}</h3>
            <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {cat.items.map((s) => {
                return (
                  <Link
                    key={s.slug}
                    href={s.href}
                    className="group flex flex-col rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    {/* 直接讀取 s.image */}
                    {s.image && (
                      <div className="relative h-48 w-full">
                        <Image
                          src={s.image}
                          alt={s.title}
                          fill
                          sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="flex flex-col flex-1 p-6">
                      <h4 className="text-lg font-bold text-slate-900 group-hover:text-sky-700">
                        {s.title}
                      </h4>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-500">
                        {s.description}
                      </p>
                      <span className="mt-4 text-sm font-semibold text-sky-600">
                        了解更多 →
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </section>


      {/* Why us */}
      <section className="bg-slate-50">
  <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
    <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
      點解揀富成工程公司？
    </h2>
    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {[
        {
          icon: <ShieldCheck className="h-8 w-8 text-sky-600" />,
          t: "持牌專業團隊",
          d: "註冊電業承辦商，工程符合機電工程署及消防處要求，出牌工程有保證。"
        },
        {
          icon: <Wrench className="h-8 w-8 text-sky-600" />,
          t: "一站式服務",
          d: "風喉、冷氣、清洗、保養、出牌顧問一條龍，唔使多頭搵人夾。"
        },
        {
          icon: <Lightbulb className="h-8 w-8 text-sky-600" />,
          t: "獨家技術",
          d: "行內少有嘅無滴汗風咀技術，消防處認證，徹底解決風咀滴水問題。"
        },
        {
          icon: <BadgeDollarSign className="h-8 w-8 text-sky-600" />,
          t: "透明報價",
          d: "親身上門度呎，明碼實價，絕無隱藏收費。"
        },
      ].map((item, idx) => (
        <div key={idx} className="rounded-2xl border border-slate-200 bg-white p-6">
          <div className="mb-4">
            {item.icon}
          </div>
          <h3 className="font-bold text-slate-900">{item.t}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-500">{item.d}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
          常見問題
        </h2>
        <div className="mt-8">
          <FAQ items={homeFaqs} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
