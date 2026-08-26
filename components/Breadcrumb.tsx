import Link from "next/link";
import { siteConfig } from "@/lib/site";

export type Crumb = { name: string; href?: string };

export default function Breadcrumb({ items }: { items: Crumb[] }) {
  const crumbs = [{ name: "主頁", href: "/" }, ...items];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      ...(c.href ? { item: `${siteConfig.url}${c.href}` } : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="麵包屑" className="mx-auto max-w-7xl px-4 pt-6 sm:px-6">
        <ol className="flex flex-wrap items-center gap-1 text-sm text-slate-500">
          {crumbs.map((c, i) => (
            <li key={i} className="flex items-center gap-1">
              {i > 0 && <span aria-hidden="true">/</span>}
              {c.href && i < crumbs.length - 1 ? (
                <Link href={c.href} className="transition hover:text-sky-600">
                  {c.name}
                </Link>
              ) : (
                <span className="text-slate-700">{c.name}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
