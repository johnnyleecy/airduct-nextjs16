// components/Header.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { navCategories, specialtyServices } from "@/lib/services";
import { siteConfig } from "@/lib/site";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
            <Image
              src="/logo-icon.png"
              alt="富成工程公司 Logo"
              width={50}
              height={50}
              className="shrink-0 object-contain"
            />
            <span className="text-base font-bold tracking-tight text-slate-900 sm:text-lg">
              富成工程公司
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav aria-label="主導覽" className="hidden items-center gap-0.5 lg:flex">
            <Link href="/" className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">
              主頁
            </Link>

            {navCategories.map((cat) => (
              <div key={cat.id} className="relative">
                <button
                  type="button"
                  onClick={() => setOpenMenu(openMenu === cat.id ? null : cat.id)}
                  className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
                  aria-expanded={openMenu === cat.id}
                >
                  {cat.title}
                  <span aria-hidden="true" className="text-xs">▾</span>
                </button>
                {openMenu === cat.id && (
                  <div className="absolute left-0 top-full mt-1 w-72 rounded-xl border border-slate-200 bg-white p-2 shadow-lg">
                    {cat.items.map((s) => (
                      <Link
                        key={s.slug}
                        href={s.href}
                        onClick={() => setOpenMenu(null)}
                        className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-700"
                      >
                        {s.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="relative">
              <button
                type="button"
                onClick={() => setOpenMenu(openMenu === "specialty" ? null : "specialty")}
                className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
                aria-expanded={openMenu === "specialty"}
              >
                技術專長
                <span aria-hidden="true" className="text-xs">▾</span>
              </button>
              {openMenu === "specialty" && (
                <div className="absolute left-0 top-full mt-1 w-72 rounded-xl border border-slate-200 bg-white p-2 shadow-lg">
                  {specialtyServices.map((s) => (
                    <Link
                      key={s.slug}
                      href={s.href}
                      onClick={() => setOpenMenu(null)}
                      className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-700"
                    >
                      {s.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/book" className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">
              如何預約維修？
            </Link>
            <Link href="/faq" className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">
              常見問題
            </Link>
            <Link href="/about" className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">
              關於我們
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="開啟選單"
            aria-expanded={mobileOpen}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <nav aria-label="流動選單" className="border-t border-slate-200 bg-white px-4 py-3 lg:hidden">
            <Link href="/" onClick={() => setMobileOpen(false)} className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">
              主頁
            </Link>
            {navCategories.map((cat) => (
              <div key={cat.id} className="my-3">
                <p className="px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-400">
                  {cat.title}
                </p>
                {cat.items.map((s) => (
                  <Link
                    key={s.slug}
                    href={s.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-700"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            ))}
            <div className="my-3">
              <p className="px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-400">
                技術專長
              </p>
              {specialtyServices.map((s) => (
                <Link
                  key={s.slug}
                  href={s.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-700"
                >
                  {s.title}
                </Link>
              ))}
            </div>
            <Link href="/book" onClick={() => setMobileOpen(false)} className="mt-2 block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">
              如何預約維修？
            </Link>
            <Link href="/faq" onClick={() => setMobileOpen(false)} className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">
              常見問題
            </Link>
            <Link href="/about" onClick={() => setMobileOpen(false)} className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">
              關於我們
            </Link>
          </nav>
        )}
      </header>

      {/* 固定右下角 WhatsApp 懸浮按鈕，使用 react-icons FaWhatsapp */}
      <a
        href={siteConfig.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-110 hover:bg-[#20bd5b]"
        aria-label="WhatsApp 聯絡我們"
      >
        <FaWhatsapp size={28} />
      </a>
    </>
  );
}
