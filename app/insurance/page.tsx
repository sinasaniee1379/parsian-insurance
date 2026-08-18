import type { Metadata } from "next";
import { InsuranceCard } from "@/components/InsuranceCard";
import { Reveal } from "@/components/Motion";
import { insuranceProducts } from "@/data/insurance";

export const metadata: Metadata = {
  title: "انواع بیمه",
  description:
    "معرفی بیمه‌های پارسیان شامل خودرو، زندگی، آتش‌سوزی، مسئولیت، باربری، حوادث، درمان تکمیلی، مهندسی، انرژی و بیمه‌های کشتی، هواپیما و خاص.",
  alternates: { canonical: "/insurance" },
};

export default function InsurancePage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-white">
        <div className="site-container py-14 sm:py-20">
          <Reveal>
            <p className="section-kicker">انواع بیمه پارسیان</p>
            <h1 className="section-title max-w-4xl">از نیازهای روزمره تا ریسک‌های تخصصی، مسیر مناسب را پیدا کنید</h1>
            <p className="section-copy">
              در این بخش، اطلاعات هر رشته بیمه‌ای بر اساس محتوای معرفی‌شده از سوی بیمه پارسیان دسته‌بندی شده است تا قبل از درخواست مشاوره، تصویر روشن‌تری از کاربرد و پوشش‌های هر بیمه داشته باشید.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="site-container py-12 sm:py-16">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {insuranceProducts.map((item) => (
            <InsuranceCard key={item.slug} item={item} />
          ))}
        </div>
      </section>
    </>
  );
}
