import React from "react";

const WhyParsian = () => {
  return (
    <section className="site-container py-14 sm:py-20">
      <div className="grid overflow-hidden rounded-[2.2rem] border border-slate-200 bg-white lg:grid-cols-[.9fr_1.1fr]">
        <div className="relative min-h-72 overflow-hidden bg-(--brand-blue) p-8 text-white sm:p-10">
          <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full border-36 border-white/10" />
          <div className="absolute -bottom-20 -right-12 h-64 w-64 rounded-full bg-(--brand-orange)/20" />
          <p className="relative text-xs font-extrabold text-blue-100">
            چرا مشاوره قبل از انتخاب مهم است؟
          </p>
          <h2 className="relative mt-4 max-w-md text-3xl font-black leading-normal">
            پوشش درست از شناخت نیاز واقعی شروع می‌شود.
          </h2>
          <p className="relative mt-5 max-w-md text-sm leading-8 text-blue-100">
            به‌جای انتخاب عجولانه، ابتدا نوع نیاز، شرایط و اطلاعات اصلی بررسی
            می‌شود تا مسیر درخواست روشن‌تر باشد.
          </p>
        </div>
        <div className="grid gap-6 p-8 sm:grid-cols-2 sm:p-10">
          {[
            [
              "راهنمایی در انتخاب",
              "تفاوت بین گزینه‌ها را ساده و قابل فهم بررسی می‌کنیم.",
            ],
            [
              "پاسخ‌گویی و پیگیری",
              "برای سوال‌ها و مراحل بعدی، مسیر ارتباط مشخص و مستقیم دارید.",
            ],
            [
              "تنوع خدمات پارسیان",
              "از بیمه‌های خودرو و اشخاص تا اموال و مسئولیت را در یک مسیر بررسی کنید.",
            ],
            [
              "اطلاعات شفاف",
              "هیچ قیمت، تعهد یا پوشش غیرقطعی به‌عنوان واقعیت نمایش داده نمی‌شود.",
            ],
          ].map(([title, copy], i) => (
            <div key={title}>
              <div className="mb-4 grid h-9 w-9 place-items-center rounded-xl bg-blue-50 text-sm font-black text-(--brand-blue)">
                ۰{i + 1}
              </div>
              <h3 className="font-extrabold text-slate-950">{title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyParsian;
