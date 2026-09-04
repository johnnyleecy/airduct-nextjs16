import type { Metadata } from "next";
import Image from "next/image";
import JsonLd from "@/components/JsonLd";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "冷氣安裝工程｜中央冷氣・VRV多聯機・分體式",
  description:
    "承接大型基建至私人住宅全類型冷氣系統工程：水冷式中央冷氣（Chiller）、VRV多聯機、分體式冷氣、Fan Coil風機盤管，設計安裝改裝一條龍，即日報價。",
  alternates: { canonical: "/services/air-conditioning-engineering" },
};

const faqs = [
  {
    question: "VRV 同分體式冷氣有咩分別？",
    answer:
      "VRV 係一台室外機拖多台室內機，慳位、控溫精準、能耗低，適合寫字樓及豪宅；分體式則一拖一，安裝彈性大、初裝成本較低，適合商鋪及住宅。",
  },
  {
    question: "商廈安裝中央冷氣要幾耐？",
    answer:
      "視乎規模及施工範圍，一般需 2–8 星期。我哋會協調非營業時段施工，分區進行，減低對租戶影響。",
  },
  {
    question: "冷氣系統可以淨做改裝嗎？",
    answer:
      "可以。我哋承接舊系統升級、增加室內機、更換水塔及水喉等改裝工程，並提供能源效益評估建議。",
  },
];

// 圖片數組，包含圖片路徑、小標題、描述
const projectGallery = [
  {
    src: "/images/AirConditioningSystem/3_VRV_AirConditioningSystemInstallation_1.jpeg",
    title: "VRV多聯機安裝作業",
    desc: "現場進行VRV室外機定位與管線鋪設，確保機組散熱與管線走線合乎規範。",
  },
  {
    src: "/images/AirConditioningSystem/4_VRV_AirConditioningSystemInstallation_2.jpeg",
    title: "VRV室內機吊裝施工",
    desc: "商廈樓底吊裝VRV室內機，預留維修空間，配合現場天花結構規劃。",
  },
  {
    src: "/images/AirConditioningSystem/6_linear-air-diffuser.jpeg",
    title: "線型風咀安裝",
    desc: "隱藏式線型風咀，美觀同時均勻送風，適合商鋪、寫字樓同高級餐廳。",
  },
  {
    src: "/images/AirConditioningSystem/7_flexible-insulated-duct.jpeg",
    title: "隔熱軟風喉鋪設",
    desc: "使用優質隔熱軟風喉，減少冷量流失，防止風喉表面滴水結露問題。",
  },
  {
    src: "/images/AirConditioningSystem/9_completed-mall-ceiling-access-panel.jpeg",
    title: "商場天花完工效果",
    desc: "商場冷氣系統完工實景，天花維修口預留妥當，方便日後保養檢修。",
  },
];

export default function AirConditioningPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "冷氣系統工程",
          serviceType: "中央冷氣・VRV多聯機・分體式冷氣",
          provider: { "@type": "HomeAndConstructionBusiness", name: "富成工程公司" },
          areaServed: "香港",
          description:
            "水冷式中央冷氣（Chiller）、VRV多聯機、分體式冷氣、Fan Coil風機盤管，設計安裝改裝一條龍。",
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
      <Breadcrumb items={[{ name: "工程服務", href: "/" }, { name: "冷氣系統工程" }]} />

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
          冷氣系統工程｜中央冷氣安裝、VRV多聯機、分體式冷氣設計施工
        </h1>
        <p className="mt-4 leading-relaxed text-slate-600">
          冷氣系統係建築物嘅「心臟」，選錯系統、裝錯機型，輕則耗電、製冷不均，重則影響整個場所營運。我哋涵蓋<b>大型基建至私人住宅嘅全類型製冷系統</b>，提供設計、安裝、改裝工程，因應場地規模與預算度身訂造方案。
        </p>

        {/* 新增：項目實景展示區塊 */}
        <h2 className="mt-12 text-2xl font-bold text-slate-900">工程實景參考</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projectGallery.map((item, idx) => (
            <div key={idx} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="relative h-52 w-full">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="mt-12 text-2xl font-bold text-slate-900">我哋承接嘅冷氣系統工程</h2>

        <div className="mt-6 space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-bold text-slate-900">1. 水冷式中央冷氣系統（Chiller 水喉製冷）</h3>
            <p className="mt-2 leading-relaxed text-slate-600">
              專用於<b>商廈、商場、醫院</b>等大型場地，承接大型散熱水塔安裝、跨區水喉接駁等大型工程，配合<b>中央冷氣安裝</b>規劃，確保製冷量覆蓋全場、能源效益達標。
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-bold text-slate-900">2. VRV 多聯機系統（一拖多）</h3>
            <p className="mt-2 leading-relaxed text-slate-600">
              <b>VRV 冷氣安裝</b>係近年寫字樓及豪宅最熱門方案：一台室外機帶動多台室內機，一拖三、一拖四等定制組合，<b>節省空間、製冷均勻、能耗更低</b>。由設計、安裝到調試全程跟進。
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-bold text-slate-900">3. 分體式冷氣機</h3>
            <p className="mt-2 leading-relaxed text-slate-600">
              適用於<b>商鋪、住宅、小型辦公室</b>嘅安裝與改裝工程，明碼實價、安裝連搭棚均可安排，適合預算有限但講求製冷效果嘅客戶。
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-bold text-slate-900">4. Fan Coil 風機盤管系統</h3>
            <p className="mt-2 leading-relaxed text-slate-600">
              配套中央水冷系統使用，負責<b>室內精準送風與溫度調節</b>。提供 Fan Coil 選型、隱藏式接駁安裝及更換服務，與風喉工程無縫配合，達致全場溫度均勻。
            </p>
          </div>
        </div>

        <h2 className="mt-12 text-2xl font-bold text-slate-900">適用場景</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {[
            ["大型商業基建、商場、醫院", "水冷式中央冷氣（Chiller）"],
            ["寫字樓、私人豪宅", "VRV 多聯機（一拖多）"],
            ["商鋪、住宅、小型辦公室", "分體式冷氣機"],
            ["商廈全層、高級餐廳", "Fan Coil 風機盤管系統"],
          ].map(([t, d]) => (
            <div key={t} className="rounded-xl bg-slate-50 p-5">
              <h3 className="font-bold text-slate-900">{t}</h3>
              <p className="mt-1 text-sm text-slate-500">{d}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-12 text-2xl font-bold text-slate-900">服務優勢</h2>
        <ul className="mt-5 space-y-3 text-slate-600">
          <li>・ <b>全類型覆蓋</b>：由中央冷氣到分體機，一間公司搞掂晒，唔使多頭搵人</li>
          <li>・ <b>度身設計</b>：按場地面積、人流、樓底、太陽照射方向計算負荷，唔會「大牛拉細車」</li>
          <li>・ <b>省電節能</b>：VRV 系統精準控溫，長期營運慳電費</li>
          <li>・ <b>持牌施工</b>：註冊電業承辦商，冷氣工程符合機電工程署要求</li>
          <li>・ <b>評估度呎</b>：全港各區上門評估，冷氣安裝報價即日提供</li>
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
