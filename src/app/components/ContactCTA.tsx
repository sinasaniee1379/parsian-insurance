import { Icon } from "./../../components/Icon";
import Link from "next/link";
import React from "react";

const ContactCTA = () => {
  return (
    <section className="site-container py-14 sm:py-20">
      <div className="rounded-[2.2rem] bg-slate-950 px-7 py-10 text-white sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:px-12">
        <div>
          <p className="text-xs font-extrabold text-(--brand-orange)">
            برای انتخاب بهتر
          </p>
          <h2 className="mt-3 text-2xl font-black sm:text-3xl">
            برای انتخاب بیمه مناسب نیاز به راهنمایی دارید؟
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-8 text-slate-300">
            درخواست خود را ثبت کنید تا بعد از تکمیل اطلاعات تماس واقعی نمایندگی،
            مسیر مشاوره مستقیماً از همین سایت قابل استفاده باشد.
          </p>
        </div>
        <Link
          href="/contact"
          className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-white px-6 text-sm font-extrabold text-slate-950 lg:mt-0"
        >
          <Icon name="phone" className="h-4 w-4" />
          تماس با نمایندگی
        </Link>
      </div>
    </section>
  );
};

export default ContactCTA;
