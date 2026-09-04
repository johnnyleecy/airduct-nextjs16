import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import Breadcrumb from "@/components/Breadcrumb";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "冷氣工程常見問題｜洗冷氣・出牌・保養",
  description:
    "冷氣幾耐洗一次？風咀點解滴水？食肆通風牌點申請？冷氣保養合約包啲咩？一次過解答你嘅冷氣工程疑問，由專業工程團隊親自解答。",
  alternates: { canonical: "/faq" },
};

const faqs = [
  {
    question: "冷氣機幾耐要洗一次？",
    answer:
      "住宅一般每年清洗 1–2 次；辦公室及商鋪建議每季清洗隔塵網、每年深層清洗；食肆因油煙大，建議每半年深層清洗一次，確保製冷力及空氣質素。",
  },
  {
    question: "點解風咀會滴水滴汗？",
    answer:
      "冷氣風咀出風溫度低，而表面接觸嘅空氣溫度高、濕度高，溫差令水蒸氣凝結成水珠滴落。我哋獨家無滴汗風咀技術採用消防處認證特製物料，從根源杜絕冷凝水產生。",
  },
  {
    question: "食肆通風牌照點樣申請？",
    answer:
      "我哋會提供專業顧問指導，協助食肆設計完全符合發牌規範；先進行現場勘測評估，給予合規方案建議，再配合處理工程及相關文件，協助客戶順利完成出牌。",
  },
  {
    question: "VRV 同分體式冷氣有咩分別？",
    answer:
      "VRV 係一台室外機拖多台室內機，慳位、控溫精準、能耗低，適合寫字樓及豪宅；分體式則一拖一，安裝彈性大、初裝成本較低，適合商鋪及住宅。",
  },
  {
    question: "風喉工程費用大約幾多？",
    answer:
      "視乎風喉長度、物料（鍍鋅鐵、保溫軟喉、不鏽鋼）、樓層及施工難度而定，一般需度呎後報價。我哋提供親身上門度呎，即日報價。",
  },
  {
    question: "中央冷氣幾耐要保養一次？",
    answer:
      "商廈及寫字樓中央冷氣建議每年至少進行一次全面檢測保養，包括雪種壓力、水喉系統、風機盤管及過濾網檢查，可有效延長機件壽命、減低突發故障。",
  },
  {
    question: "冷氣漏水可以點算？",
    answer:
      "先關機並清理去水盤，再聯絡我哋安排上門檢查。常見原因係去水喉堵塞或去水泵故障，請先預約維修。",
  },
  {
    question: "食肆做鮮風抽氣系統，是否一定可以順利拿到食環署通風牌？",
    answer:
      "我們會先做現場勘測，按照食環署、消防署法規設計風喉及抽鮮風方案。若場地先天條件不足，會提前告知風險；按我們方案施工，符合法例要求即可協助客戶順利出牌，但受舖位先天條件所限，無法保證 100% 一定批核。",
  },
  {
    question: "冷氣風咀滴水、滴汗是什麼原因，可以完全解決嗎？",
    answer:
      "多由冷熱溫差、風咀物料、風速設計引致。一般改造只能舒緩，我們可採用消防認證無滴汗防滴水風咀，針對商場、食肆頻繁開門的場地，大幅杜絕滴水滴汗問題。",
  },
  {
    question: "商鋪營業中可以做冷氣維修同風喉工程嗎？",
    answer:
      "維修簡單故障可日間處理；噪音大、拆改風喉、深度清洗工程，食肆、商戶大多安排夜間休市施工，不影響日常營運，夜間施工會有額外收費。",
  },
  {
    question: "VRV 多聯機同水冷中央冷氣，應該怎樣選擇？",
    answer:
      "寫字樓、豪宅空間有限適合 VRV 多聯機；大型商廈、商場、醫院等大面積場地，優先選用水冷 Chiller 中央冷氣，我們會按樓宇條件、預算提供建議。",
  },
  {
    question: "冷氣清洗同保養有什麼分別？是否包零件？",
    answer:
      "清洗主要做散熱器、風機、風喉表面除塵除油；保養包含檢測壓力、風壓、運行狀態。包年 / 包月保養合約一般不包含零件、摩打、雪種等耗材，損壞零件會另行報價。",
  },
  {
    question: "上門勘測評估是否收費？",
    answer:
      "簡單 WhatsApp 圖片咨詢免費；需要工程師親身到場做場地可行性評估、出牌顧問，會收取上門評估費用($300起)，費用可於工程中另行商討。",
  },
  {
    question: "風喉可以做隱藏式安裝嗎，會不會影響風量？",
    answer:
      "可以配合吊頂做隱藏風喉安裝，我們會計算風壓風速，控制轉彎、接駁位，避免風量衰減，不會因為美觀而犧牲通風效果。",
  },
  {
    question: "冷氣漏水常見原因有哪些？一定要換機嗎？",
    answer:
      "多為去水喉淤塞、排水位傾斜、隔塵網太髒引致，大部分情況維修疏通即可解決，無需更換整套冷氣系統。",
  },
  {
    question: "教育中心、補習社的通風工程，有什麼特別要求？",
    answer:
      "教育場所有嚴格消防規範，涉及防火風喉、防火門、走火通道要求，不能直接套用普通商鋪方案，建議先做顧問評估再開展工程。",
  },
];

export default function FAQPage() {
  return (
    <>
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
      <Breadcrumb items={[{ name: "常見問題" }]} />

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">常見問題</h1>
        <p className="mt-4 text-slate-500">
          集合客戶最常問嘅冷氣工程問題，由專業團隊逐一解答。仲有疑問？歡迎 WhatsApp 我哋即時查詢。
        </p>
        <div className="mt-8">
          <FAQ items={faqs} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
