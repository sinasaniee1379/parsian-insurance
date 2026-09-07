"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, ShieldCheck, CalendarDays } from "lucide-react";
import personImage from "@/assets/afarinPerson.jpg";
export default function RepresentativeProfile() {
  return (
    <section
      dir="rtl"
      className="py-16 sm:py-20"
      aria-labelledby="representative-profile-title"
    >
      <div className="site-container">
        <div className="overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
          <div className="grid lg:grid-cols-[1fr_1.1fr]">
            {/* تصویر؛ در دسکتاپ سمت راست نمایش داده می‌شود */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative min-h-105 overflow-hidden lg:min-h-140"
            >
              <Image
                src={personImage}
                alt="آفرین صناعی، نماینده بیمه پارسیان"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-top"
              />

              <div className="absolute inset-0 bg-linear-to-t from-slate-950/35 via-transparent to-transparent" />
            </motion.div>

            {/* متن؛ در دسکتاپ سمت چپ نمایش داده می‌شود */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
              className="flex flex-col justify-center p-7 sm:p-10 lg:p-14"
            >
              <span className="mb-4 inline-flex w-fit rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-(--brand-blue)">
                درباره نماینده
              </span>

              <h2
                id="representative-profile-title"
                className="text-3xl font-black leading-tight text-slate-900 sm:text-4xl"
              >
                همراه شما برای انتخاب
                <span className="block text-(--brand-blue)">
                  پوشش بیمه‌ای مناسب
                </span>
              </h2>

              <div className="mt-6 space-y-4 text-base leading-8 text-slate-600 sm:text-lg">
                <p>
                  آفرین صناعی هستم؛ دانش‌آموخته دانشگاه اصفهان در رشته فیزیک
                  کاربردی. فعالیت حرفه‌ای خود را از اردیبهشت سال ۱۳۸۷ با شرکت
                  بیمه پارسیان آغاز کرده‌ام و در حوزه‌های مختلف بیمه فعالیت
                  دارم.
                </p>

                <p>
                  برای دریافت مشاوره، انتخاب پوشش مناسب و صدور انواع بیمه‌نامه،
                  از جمله بیمه عمر، مسئولیت، آتش‌سوزی، خودرو و سایر رشته‌های
                  بیمه‌ای، می‌توانید با من در تماس باشید.
                </p>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <InfoItem
                  icon={<CalendarDays size={20} />}
                  title="شروع فعالیت"
                  value="اردیبهشت ۱۳۸۷"
                />

                <InfoItem
                  icon={<GraduationCap size={20} />}
                  title="تحصیلات"
                  value="فیزیک کاربردی"
                />

                <InfoItem
                  icon={<ShieldCheck size={20} />}
                  title="حوزه فعالیت"
                  value="رشته‌های مختلف بیمه"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoItem({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl bg-slate-50 p-4">
      <div className="mb-2 flex items-center gap-2 text-(--brand-blue)">
        {icon}
        <span className="text-sm font-bold">{title}</span>
      </div>

      <p className="text-sm font-semibold text-slate-700">{value}</p>
    </div>
  );
}
