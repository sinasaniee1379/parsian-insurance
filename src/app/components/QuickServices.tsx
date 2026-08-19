import { Icon } from "@/components/Icon";
import { quickServices } from "@/constants";
import Link from "next/link";

const QuickServices = () => {
  return (
    <section className="site-container py-14 sm:py-18">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
        {quickServices.map(([title, icon, desc]) => (
          <Link
            key={title}
            href="/insurance"
            className="group rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-blue-200 hover:shadow-sm"
          >
            <Icon name={icon} className="h-6 w-6 text-(--brand-blue)" />
            <p className="mt-4 text-sm font-extrabold text-slate-900">
              {title}
            </p>
            <p className="mt-1 text-xs leading-6 text-slate-500">{desc}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default QuickServices;
