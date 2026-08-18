"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { Icon } from "@/components/Icon";

const links = [
  { href: "/", label: "خانه" },
  { href: "/insurance", label: "انواع بیمه" },
  { href: "/contact", label: "تماس با ما" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
      <div className="site-container flex h-20 items-center justify-between gap-6">
        <Link href="/" className="flex min-w-0 items-center gap-3" aria-label="صفحه اصلی بیمه پارسیان نمایندگی آفرین صناعی">
          <Image
            src="/parsian-logo-2k.png"
            width={2048}
            height={2048}
            sizes="56px"
            priority
            alt="لوگوی بیمه پارسیان"
            className="h-14 w-14 object-contain"
          />
          <div className="hidden min-w-0 sm:block">
            <p className="truncate text-sm font-extrabold text-slate-900">بیمه پارسیان</p>
            <p className="truncate text-xs text-slate-500">نمایندگی آفرین صناعی</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="ناوبری اصلی">
          {links.map((link) => {
            const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-xl px-4 py-2.5 text-sm font-bold transition ${active ? "bg-blue-50 text-[var(--brand-blue)]" : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link href="/contact" className="btn-primary gap-2"><Icon name="phone" className="h-4 w-4" />مشاوره بیمه</Link>
        </div>

        <motion.button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 text-slate-800 lg:hidden"
          aria-label={open ? "بستن منو" : "باز کردن منو"}
          aria-expanded={open}
          whileTap={reduceMotion ? undefined : { scale: 0.94 }}
          onClick={() => setOpen((value) => !value)}
        >
          <Icon name={open ? "close" : "menu"} className="h-5 w-5" />
        </motion.button>
      </div>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-slate-200 bg-white lg:hidden"
          >
            <nav className="site-container grid gap-2 py-4" aria-label="ناوبری موبایل">
              {links.map((link) => (
                <Link key={link.href} href={link.href} className="rounded-xl px-4 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50">
                  {link.label}
                </Link>
              ))}
              <Link href="/contact" className="btn-primary mt-2 gap-2 text-center"><Icon name="phone" className="h-4 w-4" />مشاوره بیمه</Link>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
