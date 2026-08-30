"use client";

import Image from "next/image";
import Link from "next/link";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import type { InsuranceNewsItem } from "@/data/insurance-news";

type InsuranceNewsSliderProps = {
  items: InsuranceNewsItem[];
};

function NewsCard({
  item,
  priority = false,
}: {
  item: InsuranceNewsItem;
  priority?: boolean;
}) {
  const card = (
    <article className="group h-full overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white shadow-[0_20px_60px_rgba(15,23,42,.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,.14)] sm:grid sm:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)]">
      <div className="relative min-h-64 overflow-hidden bg-slate-100 sm:min-h-full">
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, 45vw"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
        <div className="flex flex-wrap items-center gap-2 text-xs font-extrabold text-(--brand-blue)">
          <span className="rounded-full bg-blue-50 px-3 py-1.5">خبر بیمه</span>

          {item.date ? (
            <span className="text-slate-400">{item.date}</span>
          ) : null}
        </div>

        <h3 className="mt-5 text-2xl font-black leading-[1.55] tracking-[-.025em] text-slate-950 sm:text-3xl">
          {item.title}
        </h3>

        <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
          {item.summary}
        </p>

        {item.publisher ? (
          <p className="mt-6 text-xs font-bold text-slate-400">
            {item.publisher}
          </p>
        ) : null}
      </div>
    </article>
  );

  if (item.href) {
    return (
      <Link
        href={item.href}
        className="block h-full"
        aria-label={`مشاهده خبر: ${item.title}`}
      >
        {card}
      </Link>
    );
  }

  return card;
}

export default function InsuranceNewsSlider({
  items,
}: InsuranceNewsSliderProps) {
  if (items.length === 0) {
    return null;
  }

  const hasSlider = items.length > 1;

  return (
    <section
      className="site-container py-14 sm:py-20"
      aria-labelledby="insurance-news-title"
    >
      <div className="mb-8 flex flex-col justify-between gap-4 sm:mb-10 md:flex-row md:items-end">
        <div>
          <p className="section-kicker">اخبار و اطلاعیه‌ها</p>

          <h2 id="insurance-news-title" className="section-title">
            داغ‌ترین خبرهای بیمه
          </h2>

          <p className="section-copy">
            مهم‌ترین اطلاعیه‌ها و خبرهای بیمه را کوتاه و روشن دنبال کنید.
          </p>
        </div>

        {hasSlider ? (
          <span className="text-xs font-bold text-slate-400">
            برای مشاهده خبرهای بیشتر ورق بزنید
          </span>
        ) : null}
      </div>

      {hasSlider ? (
        <Swiper
          dir="rtl"
          className="insurance-news-swiper"
          modules={[Navigation, Pagination, Autoplay, A11y]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={items.length > 1}
          spaceBetween={18}
          slidesPerView={1}
          a11y={{ enabled: true }}
        >
          {items.map((item, index) => (
            <SwiperSlide key={item.id}>
              <NewsCard item={item} priority={index === 0} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <NewsCard item={items[0]} priority />
      )}
    </section>
  );
}
