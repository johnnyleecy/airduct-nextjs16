// ============================================================
// 全站服務結構（導覽、主頁、頁尾、Sitemap 共用）
// 分為三大導覽分類 + 技術專長（頁尾區塊，不在 Navbar）
// ============================================================
export type Service = {
  slug: string;
  href: string;
  title: string;
  description: string;
  keywords: string[];
};

export type ServiceCategory = {
  id: string;
  title: string;
  items: Service[];
};

// ── Navbar 三大分類 ─────────────────────────────────────
export const navCategories: ServiceCategory[] = [
  {
    id: "consulting",
    title: "顧問服務",
    items: [
      {
        slug: "licence-site-consulting",
        href: "/services/licence-site-consulting",
        title: "牌照與場地顧問",
        description:
          "租鋪前場地可行性評估、出牌風險分析，避免租錯鋪、慳返改裝成本。",
        keywords: ["場地可行性評估", "出牌顧問", "牌照申請"],
      },
      {
        slug: "licensing-consulting",
        href: "/services/licensing-consulting",
        title: "專業牌照顧問服務",
        description:
          "食肆通風牌照顧問、各類食肆牌照申請、Form D 證書及出牌工程一條龍。",
        keywords: ["食肆通風牌", "牌照顧問", "Form D"],
      },
    ],
  },
  {
    id: "systems",
    title: "系統工程服務",
    items: [
      {
        slug: "ventilation-air-supply",
        href: "/services/ventilation-air-supply",
        title: "通風與送風系統工程",
        description:
          "鮮風抽氣系統、風喉風槽製作安裝、風咀定制，符合食環署及消防出牌標準。",
        keywords: ["風喉工程", "鮮風抽氣系統", "風喉安裝"],
      },
      {
        slug: "air-conditioning-engineering",
        href: "/services/air-conditioning-engineering",
        title: "冷氣系統工程",
        description:
          "水冷式中央冷氣（Chiller）、VRV多聯機、分體式冷氣、Fan Coil，一條龍。",
        keywords: ["冷氣安裝", "中央冷氣安裝", "VRV冷氣安裝"],
      },
    ],
  },
  {
    id: "installation",
    title: "分體式冷氣機安裝",
    items: [
      {
        slug: "dismantle-install",
        href: "/services/dismantle-install",
        title: "拆除及安裝",
        description:
          "冷氣機拆除、安裝、更換、搬遷，分體式／窗口機／天花機，安裝連搭棚。",
        keywords: ["冷氣安裝", "冷氣機拆除", "更換冷氣機"],
      },
      {
        slug: "cleaning-maintenance",
        href: "/services/cleaning-maintenance",
        title: "清洗保養",
        description:
          "洗冷氣、中央冷氣清洗、深層清洗，商用住宅明碼實價，支持夜間施工。",
        keywords: ["洗冷氣", "冷氣清洗", "冷氣深層清洗"],
      },
      {
        slug: "repair-maintenance",
        href: "/services/repair-maintenance",
        title: "維修保養",
        description:
          "24小時緊急維修、冷氣保養合約、定期檢測，漏水唔凍即日處理。",
        keywords: ["冷氣維修", "冷氣保養", "24小時冷氣維修"],
      },
    ],
  },
];

// ── 技術專長（頁尾區塊，不在 Navbar，維持 SEO 內部連結）────
export const specialtyServices: Service[] = [
  {
    slug: "no-drip-nozzle",
    href: "/services/no-drip-nozzle",
    title: "獨家無滴汗防滴水風咀技術",
    description:
      "消防處認證特製風咀，100%解決風咀滴水滴汗，專用於商場及高級餐廳。",
    keywords: ["無滴汗風咀", "防滴水風咀"],
  },
  {
    slug: "luxury-climate-system",
    href: "/services/luxury-climate-system",
    title: "超級豪宅特殊恆溫通風系統",
    description:
      "私人影院靜音送風、酒窖恆溫抽濕、高樓層風壓方案、隱藏式風喉設計。",
    keywords: ["豪宅恆溫通風系統", "恆溫抽濕"],
  },
  {
    slug: "education-fire-consulting",
    href: "/services/education-fire-consulting",
    title: "教育中心專屬消防與結構顧問",
    description:
      "1.5小時防火門、走火通道、消防通風高規格改造與合規評估。",
    keywords: ["教育機構消防", "1.5小時防火門"],
  },
  {
    slug: "hospital-grade-chiller",
    href: "/services/hospital-grade-chiller",
    title: "醫院級大型製冷工程經驗",
    description:
      "大型基建Chiller水冷系統、跨區散熱水喉接駁，24小時穩定運行。",
    keywords: ["大型製冷系統", "Chiller水冷系統"],
  },
];

// 方便需要平鋪全部頁面（sitemap 等）時使用
export const allServices: Service[] = [
  ...navCategories.flatMap((c) => c.items),
  ...specialtyServices,
];
