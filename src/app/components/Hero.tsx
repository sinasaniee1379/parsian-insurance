import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Motion";
import { Typewriter } from "@/components/ui/Typewriter";
import { quickServices } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="hero-grid relative overflow-hidden border-b border-slate-200/70 bg-white">
      <div className="hero-orb -left-20 top-16 h-72 w-72 bg-blue-100/70" />
      <div className="hero-orb -right-16 top-24 h-52 w-52 bg-amber-100/70" />
      <div className="site-container grid min-h-162.5 items-center gap-10 py-16 lg:grid-cols-[1.05fr_.95fr] lg:py-20">
        <Reveal className="relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/70 px-4 py-2 text-xs font-extrabold text-(--brand-blue)">
            <span className="h-2 w-2 rounded-full bg-(--brand-orange)" />
            بیمه پارسیان · نمایندگی آفرین صناعی
          </div>
          <h1 className="min-h-[2.4em] max-w-3xl text-[clamp(2.55rem,6vw,5.1rem)] font-black leading-[1.18] tracking-[-.055em] text-slate-950">
            <Typewriter
              texts={[
                {
                  text: "آرامش،امید و اطمینان",
                  className: "text-[var(--brand-blue)]",
                },
                {
                  text: "با بیمه پارسیان",
                  className: "text-[var(--brand-orange)]",
                },
              ]}
              typingSpeed={90}
              loop={true}
              direction="rtl"
            />
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
            برای انتخاب بیمه مناسب خود، خانواده یا کسب‌وکارتان، اطلاعات را ساده
            و روشن بررسی کنید و برای دریافت مشاوره با نمایندگی آفرین صناعی در
            ارتباط باشید.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary gap-2">
              <Icon name="phone" className="h-4 w-4" />
              دریافت مشاوره
            </Link>
            <Link href="/insurance" className="btn-secondary gap-2">
              مشاهده انواع بیمه
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-500">
            {["راهنمایی شفاف", "انتخاب متناسب با نیاز", "پیگیری مستقیم"].map(
              (item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-blue-50 text-(--brand-blue)">
                    <Icon name="check" className="h-3.5 w-3.5" />
                  </span>
                  {item}
                </span>
              ),
            )}
          </div>
        </Reveal>

        <Reveal className="relative mx-auto w-full max-w-130" delay={0.12}>
          <div className="absolute -right-4 top-9 h-40 w-40 rounded-full bg-(--brand-orange)/20 blur-2xl" />
          <div className="absolute -left-3 bottom-8 h-44 w-44 rounded-full bg-blue-200/50 blur-3xl" />
          <div className="glass-panel relative overflow-hidden rounded-[2.3rem] p-6 sm:p-8">
            <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-l from-(--brand-blue) via-blue-400 to-(--brand-orange)" />
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-extrabold text-(--brand-blue)">
                  راهنمای خدمات بیمه
                </p>
                <p className="mt-2 text-xl font-black text-slate-950">
                  از نیاز شما شروع می‌کنیم
                </p>
              </div>
              <Image
                src="/parsian-logo-2k.png"
                width={2048}
                height={2048}
                sizes="96px"
                priority
                alt="لوگوی بیمه پارسیان"
                className="h-24 w-24 object-contain"
              />
            </div>
            <div className="mt-7 grid grid-cols-2 gap-3">
              {quickServices.slice(0, 4).map(([title, icon, desc]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/80 bg-white/70 p-4"
                >
                  <Icon
                    name={icon}
                    className="mb-4 h-6 w-6 text-(--brand-blue)"
                  />
                  <p className="text-sm font-extrabold text-slate-950">
                    {title}
                  </p>
                  <p className="mt-1 text-xs leading-6 text-slate-500">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-2xl border border-amber-200/70 bg-amber-50/75 p-4 text-sm leading-7 text-amber-900">
              جزئیات پوشش‌ها، شرایط و تعهدات پس از مشخص شدن نوع بیمه و اطلاعات
              شما بررسی می‌شود.
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
