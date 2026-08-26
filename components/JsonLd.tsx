// JSON-LD 結構化資料元件（Server Component）
// 用於輸出 Schema.org 結構化資料，提升 Rich Snippet 機會
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
