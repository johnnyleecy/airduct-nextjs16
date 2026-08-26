import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center px-4 py-24 text-center">
      <p className="text-6xl font-bold text-sky-600">404</p>
      <h1 className="mt-4 text-2xl font-bold text-slate-900">搵唔到呢一頁</h1>
      <p className="mt-3 text-slate-500">
        你瀏覽嘅頁面可能已經移除或輸入錯誤。歡迎返回主頁瀏覽我哋嘅冷氣工程服務。
      </p>
      <Link
        href="/"
        className="mt-6 rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
      >
        返回主頁
      </Link>
    </div>
  );
}
