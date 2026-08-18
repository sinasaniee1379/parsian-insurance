import Link from "next/link";

export default function NotFound() {
  return (
    <section className="site-container grid min-h-[55vh] place-items-center py-20 text-center">
      <div>
        <p className="text-7xl font-black text-blue-100">404</p>
        <h1 className="mt-4 text-2xl font-black text-slate-950">این صفحه پیدا نشد</h1>
        <p className="mt-3 text-sm text-slate-500">ممکن است آدرس تغییر کرده باشد یا صفحه وجود نداشته باشد.</p>
        <Link href="/" className="btn-primary mt-7">بازگشت به خانه</Link>
      </div>
    </section>
  );
}
