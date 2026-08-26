import Link from "next/link";
import { navCategories, specialtyServices } from "@/lib/services";
import { siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          {/* 品牌 */}
          <div>
            <p className="text-lg font-bold text-white">富成工程公司</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              一站式冷氣通風工程服務：風喉工程、冷氣安裝、洗冷氣、冷氣保養、VRV多聯機、食肆通風出牌、無滴汗風咀。
            </p>
          </div>

          {/* 工程服務（內部連結，SEO 重要） */}
          <nav aria-label="服務連結">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              工程服務
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {navCategories.flatMap((c) => c.items).map((s) => (
                <li key={s.slug}>
                  <Link href={s.href} className="text-slate-300 transition hover:text-sky-400">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* 技術專長（SEO 內部連結） */}
          <nav aria-label="技術專長">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              技術專長
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {specialtyServices.map((s) => (
                <li key={s.slug}>
                  <Link href={s.href} className="text-slate-300 transition hover:text-sky-400">
                    {s.title}
                  </Link>
                </li>
              ))}
              <li className="mt-5">
                <p className="my-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  其他資訊
                </p>
                <Link href="/faq" className="text-slate-300 transition hover:text-sky-400">
                  常見問題
                </Link>
              </li>
              <li>
                <Link href="/book" className="text-slate-300 transition hover:text-sky-400">
                  如何預約維修？
                </Link>
              </li>
            </ul>
          </nav>

          {/* 聯絡資料 */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              聯絡我們
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <p className="text-slate-300">
                  {siteConfig.phonenumber}
                </p>
              </li>
              <li className="text-slate-400">{siteConfig.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName} 版權所有。｜
            關鍵服務：冷氣工程、風喉工程、冷氣維修、冷氣保養、洗冷氣、中央冷氣安裝、VRV冷氣安裝、食肆通風牌照顧問、無滴汗風咀工程
          </p>
        </div>
      </div>
    </footer>
  );
}
