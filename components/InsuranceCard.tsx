"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { InsuranceProduct } from "@/data/insurance";
import { Icon } from "@/components/Icon";

export function InsuranceCard({ item }: { item: InsuranceProduct }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.14 }}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="group rounded-[1.6rem] border border-slate-200 bg-white p-6 transition-colors duration-300 hover:border-blue-200 hover:shadow-[0_18px_50px_rgba(15,23,42,.08)]"
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[var(--brand-blue)]">
        <Icon name={item.icon} className="h-6 w-6" />
      </div>
      <div className="mb-3 flex items-center gap-2">
        <h3 className="text-lg font-extrabold text-slate-950">{item.title}</h3>
      </div>
      <p className="min-h-16 text-sm leading-7 text-slate-600">{item.description}</p>
      <Link href={`/insurance/${item.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-[var(--brand-blue)]">
        اطلاعات بیشتر
        <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
      </Link>
    </motion.article>
  );
}
