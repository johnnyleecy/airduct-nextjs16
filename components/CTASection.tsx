import Link from "next/link";
import { siteConfig } from "@/lib/site";

export default function CTASection() {
  return (
    <section className="bg-sky-600">
      <div className="mx-auto max-w-7xl px-4 py-14 text-center sm:px-6">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          需要冷氣工程報價？立即上門度呎
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sky-100">
          無論係風喉工程、冷氣安裝、洗冷氣保養定出牌顧問，我哋親身上門度呎報價，專人即日回覆。
        </p>
        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-full bg-white px-8 py-3 text-sm font-bold text-sky-700 shadow transition hover:bg-sky-50 sm:w-auto"
          >
            WhatsApp 報價
          </a>
          <Link
            href="/book"
            className="w-full rounded-full border-2 border-white/70 px-8 py-3 text-sm font-bold text-white transition hover:bg-white/10 sm:w-auto"
          >
            了解約師傅流程
          </Link>
        </div>
      </div>
    </section>
  );
}
