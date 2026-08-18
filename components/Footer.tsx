import Image from "next/image";
import Link from "next/link";
import { insuranceProducts } from "@/data/insurance";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200 bg-white">
      <div className="site-container grid gap-10 py-12 md:grid-cols-[1.4fr_.8fr_1fr]">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <Image src="/parsian-logo-2k.png" width={2048} height={2048} sizes="56px" alt="لوگوی بیمه پارسیان" className="h-14 w-14 object-contain" />
            <div>
              <p className="font-extrabold text-slate-950">بیمه پارسیان</p>
              <p className="text-sm text-slate-500">نمایندگی آفرین صناعی</p>
            </div>
          </div>
          <p className="max-w-md text-sm leading-7 text-slate-600">
            معرفی خدمات بیمه پارسیان و راهنمایی برای انتخاب بیمه متناسب با نیازهای شخصی، خانوادگی و کسب‌وکار.
          </p>
        </div>
        <div>
          <p className="mb-4 text-sm font-extrabold text-slate-950">دسترسی سریع</p>
          <div className="grid gap-3 text-sm text-slate-600">
            <Link href="/">خانه</Link>
            <Link href="/insurance">انواع بیمه</Link>
            <Link href="/contact">تماس با ما</Link>
          </div>
        </div>
        <div>
          <p className="mb-4 text-sm font-extrabold text-slate-950">بیمه‌های پرکاربرد</p>
          <div className="grid gap-3 text-sm text-slate-600">
            {insuranceProducts.slice(0, 5).map((item) => (
              <Link key={item.slug} href={`/insurance/${item.slug}`}>{item.shortTitle}</Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-slate-100">
        <div className="site-container py-5 text-xs leading-6 text-slate-500">
          © {new Date().getFullYear()} نمایندگی آفرین صناعی. اطلاعات این وب‌سایت جنبه معرفی خدمات دارد و جزئیات هر پوشش تابع شرایط رسمی بیمه‌نامه است.
        </div>
      </div>
    </footer>
  );
}
