"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { Icon } from "@/components/Icon";
import { discountOptions, thirdPartyGroups } from "@/data/third-party-ui";
import { calculateThirdPartyPremium } from "@/data/third-party-rates";
export function ThirdPartyCalculatorUI() {
  const reduceMotion = useReducedMotion();

  const [groupId, setGroupId] = useState(thirdPartyGroups[0].id);
  const [financial, setFinancial] = useState(
    thirdPartyGroups[0].financialOptions[0],
  );
  const [discount, setDiscount] = useState(5);
  const [premium, setPremium] = useState<number | null>(null);
  const selectedGroup =
    thirdPartyGroups.find((item) => item.id === groupId) ?? thirdPartyGroups[0];

  function handleGroupChange(nextGroupId: string) {
    const nextGroup =
      thirdPartyGroups.find((item) => item.id === nextGroupId) ??
      thirdPartyGroups[0];

    setGroupId(nextGroup.id);
    setFinancial(nextGroup.financialOptions[0]);
  }

  function handleCalculate() {
    const result = calculateThirdPartyPremium(groupId, financial, discount);

    setPremium(result);
  }
  return (
    <motion.section
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={
        reduceMotion
          ? undefined
          : {
              opacity: 1,
              y: 0,
            }
      }
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="overflow-hidden rounded-4xl border border-blue-100 bg-white shadow-[0_24px_80px_rgba(15,23,42,.08)]"
    >
      {/* Header */}
      <div className="relative overflow-hidden border-b border-blue-100 bg-linear-to-l from-blue-50 via-white to-amber-50 px-6 py-7 sm:px-8">
        <div
          className="absolute -left-12 -top-12 h-40 w-40 rounded-full bg-blue-200/40 blur-3xl"
          aria-hidden="true"
        />

        <div
          className="absolute -bottom-16 right-10 h-36 w-36 rounded-full bg-amber-200/40 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative flex items-start gap-4">
          <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-(--brand-blue) text-white shadow-lg shadow-blue-900/10">
            <Icon name="calculator" className="h-7 w-7" />
          </div>

          <div>
            <p className="text-xs font-extrabold text-(--brand-blue)">
              محاسبه آنلاین
            </p>

            <h2 className="mt-1 text-xl font-black leading-8 text-slate-950 sm:text-2xl">
              محاسبه حق بیمه شخص ثالث
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">
              اطلاعات خودرو و سطح تعهد موردنظر را انتخاب کنید.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-8 p-5 sm:p-8 lg:grid-cols-[minmax(0,1fr)_320px]">
        {/* Inputs */}
        <div className="grid content-start gap-5">
          {/* Group */}
          <motion.div
            whileHover={reduceMotion ? undefined : { y: -2 }}
            transition={{ duration: 0.2 }}
            className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 sm:p-5"
          >
            <label htmlFor="third-party-group" className="block">
              <span className="mb-3 flex items-center gap-2 text-sm font-extrabold text-slate-800">
                <span className="grid h-8 w-8 place-items-center rounded-xl bg-blue-100 text-(--brand-blue)">
                  <Icon name="car" className="h-4 w-4" />
                </span>
                گروه خودرو
              </span>

              <select
                id="third-party-group"
                value={groupId}
                onChange={(event) => handleGroupChange(event.target.value)}
                className="field-input min-h-12 w-full min-w-0 cursor-pointer sm:min-h-14"
              >
                {thirdPartyGroups.map((group) => (
                  <option key={group.id} value={group.id}>
                    {group.label}
                  </option>
                ))}
              </select>
            </label>
          </motion.div>

          {/* Financial */}
          <motion.div
            whileHover={reduceMotion ? undefined : { y: -2 }}
            transition={{ duration: 0.2 }}
            className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 sm:p-5"
          >
            <label htmlFor="third-party-financial" className="block">
              <span className="mb-3 flex items-center gap-2 text-sm font-extrabold text-slate-800">
                <span className="grid h-8 w-8 place-items-center rounded-xl bg-amber-100 text-amber-700">
                  <Icon name="wallet" className="h-4 w-4" />
                </span>
                تعهد مالی
              </span>

              <select
                id="third-party-financial"
                value={financial}
                onChange={(event) => {
                  setFinancial(Number(event.target.value));
                  setPremium(null);
                }}
                className="field-input min-h-12 w-full min-w-0 cursor-pointer sm:min-h-14"
              >
                {selectedGroup.financialOptions.map((value) => (
                  <option key={value} value={value}>
                    {value.toLocaleString("fa-IR")}
                  </option>
                ))}
              </select>
            </label>
          </motion.div>

          {/* Discount */}
          <motion.div
            whileHover={reduceMotion ? undefined : { y: -2 }}
            transition={{ duration: 0.2 }}
            className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 sm:p-5"
          >
            <div className="flex items-center justify-between gap-4">
              <span className="flex items-center gap-2 text-sm font-extrabold text-slate-800">
                <span className="grid h-8 w-8 place-items-center rounded-xl bg-emerald-100 text-emerald-700">
                  <Icon name="percent" className="h-4 w-4" />
                </span>
                درصد تخفیف
              </span>

              <motion.span
                key={discount}
                initial={reduceMotion ? false : { scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="min-w-0 rounded-xl bg-(--brand-blue) px-3 py-2 text-xs font-extrabold text-white"
              >
                {discount.toLocaleString("fa-IR")}٪
              </motion.span>
            </div>

            <input
              aria-label="درصد تخفیف"
              type="range"
              min={5}
              max={70}
              step={5}
              value={discount}
              onChange={(event) => {
                setDiscount(Number(event.target.value));
                setPremium(null);
              }}
              className="third-party-range mt-6 w-full"
            />

            <div className="mt-2 flex justify-between text-xs font-bold text-slate-400">
              <span>۵٪</span>
              <span>۷۰٪</span>
            </div>

            <div className="mt-4 hidden grid-cols-5 gap-2 sm:grid md:grid-cols-7">
              {discountOptions.map((value) => {
                const active = discount === value;

                return (
                  <button
                    key={value}
                    type="button"
                    onClick={() => {
                      setDiscount(value);
                      setPremium(null);
                    }}
                    className={
                      active
                        ? "rounded-xl bg-(--brand-blue) px-3 py-2 text-xs font-extrabold text-white"
                        : "rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-500 transition hover:border-blue-200 hover:text-(--brand-blue)"
                    }
                  >
                    {value.toLocaleString("fa-IR")}٪
                  </button>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Result preview */}
        <motion.aside
          layout
          className="relative overflow-hidden rounded-[1.75rem] bg-slate-950 p-6 text-white"
        >
          <div
            className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-(--brand-orange)">
              <Icon name="shield" className="h-6 w-6" />
            </div>

            <p className="mt-5 text-xs font-extrabold text-(--brand-orange)">
              خلاصه انتخاب شما
            </p>

            <div className="mt-5 grid gap-3">
              <SummaryRow label="گروه" value={selectedGroup.label} />

              <SummaryRow
                label="تعهد مالی"
                value={financial.toLocaleString("fa-IR")}
              />

              <SummaryRow
                label="درصد"
                value={`${discount.toLocaleString("fa-IR")}٪`}
              />
            </div>

            <div className="my-6 h-px bg-white/10" />

            <p className="text-xs text-slate-400">مبلغ حق بیمه</p>

            <motion.div
              key={premium ?? "empty"}
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 8,
                    }
              }
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="mt-2"
            >
              {premium !== null ? (
                <>
                  <p
                    dir="ltr"
                    className="text-right text-3xl font-black tracking-tight text-white"
                  >
                    {premium.toLocaleString("fa-IR")}
                  </p>

                  <p className="mt-2 text-xs leading-6 text-slate-400">
                    مبلغ محاسبه‌شده براساس جدول نرخ بارگذاری‌شده
                  </p>
                </>
              ) : (
                <p className="text-xl font-black leading-8 text-white">
                  اطلاعات را انتخاب کرده و محاسبه را بزنید
                </p>
              )}
            </motion.div>

            <motion.button
              type="button"
              onClick={handleCalculate}
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -2,
                      scale: 1.01,
                    }
              }
              whileTap={
                reduceMotion
                  ? undefined
                  : {
                      scale: 0.98,
                    }
              }
              className="mt-6 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl bg-(--brand-orange) px-5 text-sm font-black text-slate-950 shadow-lg shadow-orange-500/20 transition hover:brightness-105"
            >
              <Icon name="calculator" className="h-5 w-5" />

              {premium === null ? "محاسبه حق بیمه" : "محاسبه مجدد"}
            </motion.button>

            <p className="mt-3 text-center text-[11px] leading-5 text-slate-500">
              مبلغ بر اساس گروه خودرو، تعهد مالی و درصد انتخاب‌شده محاسبه
              می‌شود.
            </p>
          </div>
        </motion.aside>
      </div>
    </motion.section>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-xl bg-white/5 px-4 py-3">
      <span className="text-xs text-slate-400">{label}</span>

      <span className="text-left text-xs font-extrabold leading-6 text-white">
        {value}
      </span>
    </div>
  );
}
