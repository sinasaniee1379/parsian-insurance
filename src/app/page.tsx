import Link from "next/link";
import { Icon } from "@/components/Icon";
import { ThirdPartyCalculatorUI } from "@/components/ThirdPartyCalculatorUI";
import Hero from "./components/Hero";
import QuickServices from "./components/QuickServices";
import Insurance from "./components/Insurance";
import WhyParsian from "./components/WhyParsian";
import ContactCTA from "./components/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="section-shell overflow-hidden">
        <div className="container-shell">
          <div className="mx-auto max-w-5xl">
            <div className="mb-6 text-center sm:mb-8">
              <span className="eyebrow">استعلام سریع</span>

              <h2 className="section-title mt-3">
                حق بیمه شخص ثالث خود را محاسبه کنید
              </h2>

              <p className="section-copy mx-auto mt-3 max-w-2xl">
                گروه خودرو، تعهد مالی و درصد تخفیف را انتخاب کنید تا مبلغ حق
                بیمه نمایش داده شود.
              </p>
            </div>

            <ThirdPartyCalculatorUI />
          </div>
        </div>
      </section>

      <QuickServices />

      <Insurance />
      <WhyParsian />

      {/* <section className="site-container py-14 sm:py-20">
        <div className="relative overflow-hidden rounded-[2.2rem] border border-blue-100 bg-blue-50/60 p-8 sm:p-10 lg:p-12">
          <div className="absolute left-6 top-6 h-28 w-28 rounded-full bg-(--brand-orange)/20 blur-2xl" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <div className="mb-4 inline-flex rounded-full bg-white px-3 py-1.5 text-xs font-extrabold text-(--brand-blue)">
                به‌زودی
              </div>
              <h2 className="text-2xl font-black text-slate-950 sm:text-3xl">
                استعلام آنلاین بیمه
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-8 text-slate-600">
                زیرساخت سایت برای اضافه شدن استعلام و درخواست آنلاین در آینده
                آماده شده است. فعلاً برای بررسی شرایط، از مسیر مشاوره استفاده
                کنید.
              </p>
            </div>
            <span
              className="inline-flex min-h-12 cursor-not-allowed items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 text-sm font-extrabold text-slate-400"
              aria-disabled="true"
            >
              استعلام آنلاین · به‌زودی
            </span>
          </div>
        </div>
      </section> */}

      <ContactCTA />
    </>
  );
}
