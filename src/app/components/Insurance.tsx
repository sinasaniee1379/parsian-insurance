import { Icon } from "@/components/Icon";
import { InsuranceCard } from "@/components/InsuranceCard";
import { featuredInsuranceProducts } from "@/data/insurance";
import Link from "next/link";

const Insurance = () => {
  return (
    <section className="site-container py-14 sm:py-20">
      <div className="mb-9 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <p className="section-kicker">خدمات بیمه</p>
          <h2 className="section-title">
            بیمه‌ای را انتخاب کنید که با نیازتان هم‌خوان باشد
          </h2>
          <p className="section-copy">
            هر نوع بیمه شرایط و جزئیات خودش را دارد. این بخش کمک می‌کند مسیر
            مناسب را سریع‌تر پیدا کنید.
          </p>
        </div>
        <Link
          href="/insurance"
          className="inline-flex items-center gap-2 text-sm font-extrabold text-(--brand-blue)"
        >
          مشاهده همه بیمه‌ها
          <Icon name="arrow" className="h-4 w-4" />
        </Link>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {featuredInsuranceProducts.map((item) => (
          <InsuranceCard key={item.slug} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Insurance;
