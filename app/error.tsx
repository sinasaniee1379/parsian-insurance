"use client";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <section className="site-container grid min-h-[55vh] place-items-center py-20 text-center">
      <div>
        <h1 className="text-2xl font-black text-slate-950">مشکلی در نمایش صفحه پیش آمده</h1>
        <p className="mt-3 text-sm leading-7 text-slate-500">می‌توانید دوباره تلاش کنید. اگر مشکل ادامه داشت، صفحه را تازه‌سازی کنید.</p>
        <button type="button" onClick={() => reset()} className="btn-primary mt-7">تلاش دوباره</button>
      </div>
    </section>
  );
}
