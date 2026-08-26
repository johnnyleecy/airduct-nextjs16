import type { Metadata } from "next";
import Link from "next/link";

// 此頁面已被 /services/cleaning-maintenance 及 /services/repair-maintenance 取代
// noindex + 自動跳轉，避免 SEO 重複內容
export const metadata: Metadata = {
  title: "清洗、維修與保養服務",
  robots: { index: false, follow: false },
  alternates: { canonical: "/services/cleaning-maintenance" },
};

export default function OldCleaningPage() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center px-4 py-24 text-center">
      <meta httpEquiv="refresh" content="0; url=/services/cleaning-maintenance" />
      <h1 className="text-2xl font-bold text-slate-900">此頁面已更新</h1>
      <p className="mt-3 text-slate-500">
        清洗、維修與保養服務已拆分為獨立頁面，正在為你跳轉……
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/services/cleaning-maintenance"
          className="rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
        >
          清洗保養服務
        </Link>
        <Link
          href="/services/repair-maintenance"
          className="rounded-full border border-sky-600 px-6 py-3 text-sm font-semibold text-sky-700 transition hover:bg-sky-100"
        >
          維修保養服務
        </Link>
      </div>
    </div>
  );
}
