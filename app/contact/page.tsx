import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Motion";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "تماس با ما",
  description:
    "راه‌های ارتباط با نمایندگی آفرین صناعی و فرم درخواست مشاوره بیمه پارسیان.",
  alternates: { canonical: "/contact" },
};

const contactItems = [
  { icon: "phone" as const, title: "تلفن", value: siteConfig.phone },
  { icon: "phone" as const, title: "همراه", value: siteConfig.mobile },
  { icon: "mail" as const, title: "ایمیل", value: siteConfig.email },
  { icon: "pin" as const, title: "آدرس", value: siteConfig.address },
  { icon: "clock" as const, title: "ساعات کاری", value: siteConfig.hours },
];

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-white">
        <div className="site-container py-14 sm:py-20">
          <p className="section-kicker">ارتباط با نمایندگی</p>
          <h1 className="section-title">
            برای مشاوره یا سوال بیمه‌ای پیام بگذارید
          </h1>
          <p className="section-copy">
            برای دریافت مشاوره، پیگیری خدمات بیمه‌ای یا کسب اطلاعات بیشتر، از
            طریق راه‌های زیر با نمایندگی آفرین صناعی در ارتباط باشید.
          </p>
        </div>
      </section>

      <section className="site-container grid gap-8 py-12 sm:py-16 lg:grid-cols-[.82fr_1.18fr]">
        <Reveal>
          <div className="grid gap-3">
            {contactItems.map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5"
              >
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue-50 text-[var(--brand-blue)]">
                  <Icon name={item.icon} className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm font-extrabold text-slate-900">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 grid min-h-52 place-items-center rounded-[2rem] border border-dashed border-slate-300 bg-slate-100/60 p-6 text-center">
            <div>
              <Icon name="pin" className="mx-auto h-7 w-7 text-slate-400" />
              <p className="mt-3 text-sm font-extrabold text-slate-700">
                نقشه نمایندگی
              </p>
              <p className="mt-2 text-xs leading-6 text-slate-500">
                اصفهان، شهرک صنعتی محمود آباد، فرعی ۱۴، ساختمان الماس، طبقه دوم
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <ContactForm />
        </Reveal>
      </section>
    </>
  );
}
