import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Motion";
import {
  getInsuranceBySlug,
  insuranceProducts,
  type InsuranceSection,
} from "@/data/insurance";
import { siteConfig } from "@/lib/site";
import { ThirdPartyCalculatorUI } from "@/components/ThirdPartyCalculatorUI";

export function generateStaticParams() {
  return insuranceProducts.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getInsuranceBySlug(slug);
  if (!item) return {};

  return {
    title: item.title,
    description: item.description,
    alternates: { canonical: `/insurance/${item.slug}` },
    openGraph: {
      title: `${item.title} | بیمه پارسیان - نمایندگی آفرین صناعی`,
      description: item.description,
      type: "article",
      images: item.image
        ? [{ url: item.image.src, alt: item.image.alt }]
        : undefined,
    },
  };
}

function SectionBlock({ section }: { section: InsuranceSection }) {
  const variantClass =
    section.variant === "warning"
      ? "border-amber-200 bg-amber-50/70"
      : section.variant === "important"
        ? "border-blue-200 bg-blue-50/55"
        : "border-slate-200 bg-white";

  return (
    <section className={`rounded-[1.75rem] border p-6 sm:p-8 ${variantClass}`}>
      <h2 className="text-xl font-black leading-8 text-slate-950 sm:text-2xl">
        {section.title}
      </h2>

      {section.paragraphs?.length ? (
        <div className="mt-5 space-y-4">
          {section.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="text-sm leading-8 text-slate-700 sm:text-[15px]"
            >
              {paragraph}
            </p>
          ))}
        </div>
      ) : null}

      {section.bullets?.length ? (
        <ul className="mt-5 grid gap-3">
          {section.bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex items-start gap-3 text-sm leading-8 text-slate-700 sm:text-[15px]"
            >
              <span className="mt-1.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white text-(--brand-blue) shadow-sm ring-1 ring-slate-200">
                <Icon name="check" className="h-3.5 w-3.5" />
              </span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}

export default async function InsuranceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getInsuranceBySlug(slug);
  if (!item) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "خانه", item: siteConfig.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "انواع بیمه",
        item: `${siteConfig.url}/insurance`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: item.title,
        item: `${siteConfig.url}/insurance/${item.slug}`,
      },
    ],
  };

  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div
          className="absolute -left-20 top-16 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute -right-16 top-24 h-56 w-56 rounded-full bg-amber-100/60 blur-3xl"
          aria-hidden="true"
        />

        <div className="site-container relative py-10 sm:py-14 lg:py-16">
          <nav
            aria-label="مسیر صفحه"
            className="mb-8 flex flex-wrap items-center gap-2 text-xs text-slate-500"
          >
            <Link href="/">خانه</Link>
            <span>/</span>
            <Link href="/insurance">انواع بیمه</Link>
            <span>/</span>
            <span className="text-slate-800">{item.shortTitle}</span>
          </nav>

          <div className="grid items-center gap-10 lg:grid-cols-[1fr_.9fr]">
            <Reveal>
              <span className="inline-flex rounded-full bg-blue-50 px-3 py-1.5 text-xs font-extrabold text-(--brand-blue)">
                {item.category}
              </span>
              <h1 className="mt-5 max-w-3xl text-4xl font-black leading-[1.35] tracking-[-.04em] text-slate-950 sm:text-5xl lg:text-[3.5rem]">
                {item.title}
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-9 text-slate-600">
                {item.intro}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary gap-2">
                  <Icon name="phone" className="h-4 w-4" />
                  دریافت مشاوره
                </Link>
                <Link href="/insurance" className="btn-secondary gap-2">
                  همه بیمه‌ها
                  <Icon name="arrow" className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.12} className="relative">
              {item.image ? (
                <div className="group relative aspect-16/10 overflow-hidden rounded-4xl border border-white/80 bg-slate-100 shadow-[0_24px_80px_rgba(15,23,42,.12)]">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 44vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/30 via-transparent to-transparent" />
                  <div className="absolute bottom-4 right-4 grid h-12 w-12 place-items-center rounded-2xl border border-white/50 bg-white/85 text-(--brand-blue) backdrop-blur-xl">
                    <Icon name={item.icon} className="h-6 w-6" />
                  </div>
                </div>
              ) : (
                <div className="relative grid min-h-80 place-items-center overflow-hidden rounded-4xl border border-blue-100 bg-linear-to-br from-blue-50 via-white to-amber-50 shadow-[0_24px_80px_rgba(15,23,42,.08)]">
                  <div className="absolute -left-10 top-4 h-40 w-40 rounded-full bg-blue-200/45 blur-2xl" />
                  <div className="absolute -right-6 bottom-2 h-36 w-36 rounded-full bg-amber-200/55 blur-2xl" />
                  <div className="relative grid h-32 w-32 place-items-center rounded-[2.5rem] border border-white bg-white/75 text-(--brand-blue) shadow-xl backdrop-blur-xl">
                    <Icon name={item.icon} className="h-16 w-16" />
                  </div>
                </div>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      <section className="site-container grid gap-8 py-12 sm:py-16 lg:grid-cols-[minmax(0,1fr)_340px]">
        <main className="min-w-0">
          {item.slug === "car" ? (
            <div className="mb-8">
              <ThirdPartyCalculatorUI />
            </div>
          ) : null}
          <Reveal>
            <section className="rounded-[1.75rem] border border-slate-200 bg-white p-6 sm:p-8">
              <p className="text-xs font-extrabold text-(--brand-blue)">
                خلاصه پوشش و کاربرد
              </p>
              <h2 className="mt-3 text-2xl font-black text-slate-950">
                این بیمه چه نیازهایی را پوشش می‌دهد؟
              </h2>
              <p className="mt-5 text-sm leading-8 text-slate-700 sm:text-[15px]">
                {item.description}
              </p>

              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {item.highlights.map((text) => (
                  <div
                    key={text}
                    className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 text-sm leading-7 text-slate-700"
                  >
                    <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-blue-100 text-(--brand-blue)">
                      <Icon name="check" className="h-4 w-4" />
                    </span>
                    {text}
                  </div>
                ))}
              </div>
            </section>
          </Reveal>

          <div className="mt-6 grid gap-6">
            {item.sections.map((section, index) => (
              <Reveal key={section.title} delay={Math.min(index * 0.04, 0.16)}>
                <SectionBlock section={section} />
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-6">
            <div className="rounded-[1.75rem] border border-amber-200 bg-amber-50 p-5 text-sm leading-8 text-amber-950 sm:p-6">
              جزئیات قطعی پوشش‌ها، تعهدات، استثناها، مدارک، حق‌بیمه و شرایط صدور
              بر اساس اطلاعات بیمه‌گذار و متن نهایی بیمه‌نامه تعیین می‌شود.
            </div>
          </Reveal>
        </main>

        <Reveal className="h-fit lg:sticky lg:top-28" delay={0.08}>
          <aside className="rounded-4xl bg-slate-950 p-7 text-white">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-(--brand-orange)">
              <Icon name={item.icon} className="h-6 w-6" />
            </div>
            <p className="mt-5 text-xs font-extrabold text-(--brand-orange)">
              مشاوره این بیمه
            </p>
            <h2 className="mt-3 text-xl font-black leading-8">
              برای بررسی شرایط متناسب با نیازتان درخواست مشاوره ثبت کنید.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              نوع پوشش مناسب به اطلاعات واقعی شما، موضوع بیمه و شرایط رسمی
              بیمه‌نامه بستگی دارد.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 text-sm font-extrabold text-slate-950"
            >
              ثبت درخواست
              <Icon name="arrow" className="h-4 w-4" />
            </Link>

            {item.sourceUrl ? (
              <a
                href={item.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/15 px-4 py-3 text-xs font-bold text-slate-300 transition hover:bg-white/5 hover:text-white"
              >
                صفحه رسمی این بیمه در پارسیان
                <Icon name="arrow" className="h-3.5 w-3.5" />
              </a>
            ) : null}
          </aside>
        </Reveal>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
