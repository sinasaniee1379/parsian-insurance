import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { InsuranceCard } from "@/components/InsuranceCard";
import { Reveal } from "@/components/Motion";
import { featuredInsuranceProducts } from "@/data/insurance";

const quickServices = [
  ["خودرو", "car", "شخص ثالث، حوادث راننده و بدنه"],
  ["زندگی", "spark", "پوشش و برنامه‌ریزی مالی"],
  ["درمان", "heart", "بیمه تکمیلی درمان"],
  ["مسئولیت", "briefcase", "حرفه‌ای، کارفرما و عمومی"],
  ["آتش‌سوزی", "home", "خانه و خانواده"],
  ["باربری", "box", "حمل داخلی و بین‌المللی"],
] as const;

export default function HomePage() {
  return (
    <>
      <section className="hero-grid relative overflow-hidden border-b border-slate-200/70 bg-white">
        <div className="hero-orb -left-20 top-16 h-72 w-72 bg-blue-100/70" />
        <div className="hero-orb -right-16 top-24 h-52 w-52 bg-amber-100/70" />
        <div className="site-container grid min-h-[650px] items-center gap-10 py-16 lg:grid-cols-[1.05fr_.95fr] lg:py-20">
          <Reveal className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/70 px-4 py-2 text-xs font-extrabold text-[var(--brand-blue)]">
              <span className="h-2 w-2 rounded-full bg-[var(--brand-orange)]" />
              بیمه پارسیان · نمایندگی آفرین صناعی
            </div>
            <h1 className="max-w-3xl text-[clamp(2.55rem,6vw,5.1rem)] font-black leading-[1.18] tracking-[-.055em] text-slate-950">
              آرامش امروز،<br /><span className="text-[var(--brand-blue)]">اطمینان فردا</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
              برای انتخاب بیمه مناسب خود، خانواده یا کسب‌وکارتان، اطلاعات را ساده و روشن بررسی کنید و برای دریافت مشاوره با نمایندگی آفرین صناعی در ارتباط باشید.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary gap-2"><Icon name="phone" className="h-4 w-4" />دریافت مشاوره</Link>
              <Link href="/insurance" className="btn-secondary gap-2">مشاهده انواع بیمه<Icon name="arrow" className="h-4 w-4" /></Link>
            </div>
            <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-500">
              {['راهنمایی شفاف', 'انتخاب متناسب با نیاز', 'پیگیری مستقیم'].map((item) => (
                <span key={item} className="inline-flex items-center gap-2"><span className="grid h-5 w-5 place-items-center rounded-full bg-blue-50 text-[var(--brand-blue)]"><Icon name="check" className="h-3.5 w-3.5" /></span>{item}</span>
              ))}
            </div>
          </Reveal>

          <Reveal className="relative mx-auto w-full max-w-[520px]" delay={0.12}>
            <div className="absolute -right-4 top-9 h-40 w-40 rounded-full bg-[var(--brand-orange)]/20 blur-2xl" />
            <div className="absolute -left-3 bottom-8 h-44 w-44 rounded-full bg-blue-200/50 blur-3xl" />
            <div className="glass-panel relative overflow-hidden rounded-[2.3rem] p-6 sm:p-8">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-l from-[var(--brand-blue)] via-blue-400 to-[var(--brand-orange)]" />
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-extrabold text-[var(--brand-blue)]">راهنمای خدمات بیمه</p>
                  <p className="mt-2 text-xl font-black text-slate-950">از نیاز شما شروع می‌کنیم</p>
                </div>
                <Image src="/parsian-logo-2k.png" width={2048} height={2048} sizes="96px" priority alt="لوگوی بیمه پارسیان" className="h-24 w-24 object-contain" />
              </div>
              <div className="mt-7 grid grid-cols-2 gap-3">
                {quickServices.slice(0, 4).map(([title, icon, desc]) => (
                  <div key={title} className="rounded-2xl border border-white/80 bg-white/70 p-4">
                    <Icon name={icon} className="mb-4 h-6 w-6 text-[var(--brand-blue)]" />
                    <p className="text-sm font-extrabold text-slate-950">{title}</p>
                    <p className="mt-1 text-xs leading-6 text-slate-500">{desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-2xl border border-amber-200/70 bg-amber-50/75 p-4 text-sm leading-7 text-amber-900">
                جزئیات پوشش‌ها، شرایط و تعهدات پس از مشخص شدن نوع بیمه و اطلاعات شما بررسی می‌شود.
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="site-container py-14 sm:py-18">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {quickServices.map(([title, icon, desc]) => (
            <Link key={title} href="/insurance" className="group rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-blue-200 hover:shadow-sm">
              <Icon name={icon} className="h-6 w-6 text-[var(--brand-blue)]" />
              <p className="mt-4 text-sm font-extrabold text-slate-900">{title}</p>
              <p className="mt-1 text-xs leading-6 text-slate-500">{desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="site-container py-14 sm:py-20">
        <div className="mb-9 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="section-kicker">خدمات بیمه</p>
            <h2 className="section-title">بیمه‌ای را انتخاب کنید که با نیازتان هم‌خوان باشد</h2>
            <p className="section-copy">هر نوع بیمه شرایط و جزئیات خودش را دارد. این بخش کمک می‌کند مسیر مناسب را سریع‌تر پیدا کنید.</p>
          </div>
          <Link href="/insurance" className="inline-flex items-center gap-2 text-sm font-extrabold text-[var(--brand-blue)]">مشاهده همه بیمه‌ها<Icon name="arrow" className="h-4 w-4" /></Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {featuredInsuranceProducts.map((item) => <InsuranceCard key={item.slug} item={item} />)}
        </div>
      </section>

      <section className="site-container py-14 sm:py-20">
        <div className="grid overflow-hidden rounded-[2.2rem] border border-slate-200 bg-white lg:grid-cols-[.9fr_1.1fr]">
          <div className="relative min-h-72 overflow-hidden bg-[var(--brand-blue)] p-8 text-white sm:p-10">
            <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full border-[36px] border-white/10" />
            <div className="absolute -bottom-20 -right-12 h-64 w-64 rounded-full bg-[var(--brand-orange)]/20" />
            <p className="relative text-xs font-extrabold text-blue-100">چرا مشاوره قبل از انتخاب مهم است؟</p>
            <h2 className="relative mt-4 max-w-md text-3xl font-black leading-[1.5]">پوشش درست از شناخت نیاز واقعی شروع می‌شود.</h2>
            <p className="relative mt-5 max-w-md text-sm leading-8 text-blue-100">به‌جای انتخاب عجولانه، ابتدا نوع نیاز، شرایط و اطلاعات اصلی بررسی می‌شود تا مسیر درخواست روشن‌تر باشد.</p>
          </div>
          <div className="grid gap-6 p-8 sm:grid-cols-2 sm:p-10">
            {[
              ["راهنمایی در انتخاب", "تفاوت بین گزینه‌ها را ساده و قابل فهم بررسی می‌کنیم."],
              ["پاسخ‌گویی و پیگیری", "برای سوال‌ها و مراحل بعدی، مسیر ارتباط مشخص و مستقیم دارید."],
              ["تنوع خدمات پارسیان", "از بیمه‌های خودرو و اشخاص تا اموال و مسئولیت را در یک مسیر بررسی کنید."],
              ["اطلاعات شفاف", "هیچ قیمت، تعهد یا پوشش غیرقطعی به‌عنوان واقعیت نمایش داده نمی‌شود."],
            ].map(([title, copy], i) => (
              <div key={title}>
                <div className="mb-4 grid h-9 w-9 place-items-center rounded-xl bg-blue-50 text-sm font-black text-[var(--brand-blue)]">۰{i+1}</div>
                <h3 className="font-extrabold text-slate-950">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="site-container py-14 sm:py-20">
        <div className="relative overflow-hidden rounded-[2.2rem] border border-blue-100 bg-blue-50/60 p-8 sm:p-10 lg:p-12">
          <div className="absolute left-6 top-6 h-28 w-28 rounded-full bg-[var(--brand-orange)]/20 blur-2xl" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <div className="mb-4 inline-flex rounded-full bg-white px-3 py-1.5 text-xs font-extrabold text-[var(--brand-blue)]">به‌زودی</div>
              <h2 className="text-2xl font-black text-slate-950 sm:text-3xl">استعلام آنلاین بیمه</h2>
              <p className="mt-4 max-w-2xl text-sm leading-8 text-slate-600">زیرساخت سایت برای اضافه شدن استعلام و درخواست آنلاین در آینده آماده شده است. فعلاً برای بررسی شرایط، از مسیر مشاوره استفاده کنید.</p>
            </div>
            <span className="inline-flex min-h-12 cursor-not-allowed items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 text-sm font-extrabold text-slate-400" aria-disabled="true">استعلام آنلاین · به‌زودی</span>
          </div>
        </div>
      </section>

      <section className="site-container py-14 sm:py-20">
        <div className="rounded-[2.2rem] bg-slate-950 px-7 py-10 text-white sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:px-12">
          <div>
            <p className="text-xs font-extrabold text-[var(--brand-orange)]">برای انتخاب بهتر</p>
            <h2 className="mt-3 text-2xl font-black sm:text-3xl">برای انتخاب بیمه مناسب نیاز به راهنمایی دارید؟</h2>
            <p className="mt-4 max-w-2xl text-sm leading-8 text-slate-300">درخواست خود را ثبت کنید تا بعد از تکمیل اطلاعات تماس واقعی نمایندگی، مسیر مشاوره مستقیماً از همین سایت قابل استفاده باشد.</p>
          </div>
          <Link href="/contact" className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-white px-6 text-sm font-extrabold text-slate-950 lg:mt-0"><Icon name="phone" className="h-4 w-4" />تماس با نمایندگی</Link>
        </div>
      </section>
    </>
  );
}
