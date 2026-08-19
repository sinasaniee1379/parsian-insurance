"use client";

import { FormEvent, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { insuranceProducts } from "@/data/insurance";
import { Icon } from "@/components/Icon";

interface FormState {
  name: string;
  phone: string;
  insurance: string;
  message: string;
}

const initialState: FormState = { name: "", phone: "", insurance: "", message: "" };

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "error" | "ready">("idle");
  const reduceMotion = useReducedMotion();

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!form.name.trim() || !/^09\d{9}$/.test(form.phone.replace(/\s/g, "")) || !form.insurance) {
      setStatus("error");
      return;
    }
    setStatus("ready");
  }

  return (
    <form onSubmit={submit} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_70px_rgba(15,23,42,.07)] sm:p-8" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="field-label">
          نام و نام خانوادگی
          <input className="field-input" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="مثلاً علی رضایی" autoComplete="name" />
        </label>
        <label className="field-label">
          شماره تماس
          <input className="field-input" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="0912xxxxxxx" inputMode="tel" autoComplete="tel" dir="ltr" />
        </label>
      </div>
      <label className="field-label mt-5">
        نوع بیمه
        <select className="field-input" value={form.insurance} onChange={(e) => setForm({ ...form, insurance: e.target.value })}>
          <option value="">انتخاب کنید</option>
          {insuranceProducts.map((item) => <option key={item.slug} value={item.title}>{item.title}</option>)}
        </select>
      </label>
      <label className="field-label mt-5">
        توضیحات
        <textarea className="field-input min-h-32 resize-y" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="اگر توضیحی دارید اینجا بنویسید" />
      </label>

      {status === "error" ? (
        <p role="alert" className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm font-bold text-red-700">نام، نوع بیمه و یک شماره همراه معتبر وارد کنید.</p>
      ) : null}
      {status === "ready" ? (
        <p role="status" className="mt-4 rounded-xl bg-amber-50 px-4 py-3 text-sm leading-7 text-amber-800">
          فرم آماده است، اما هنوز به سرور یا ایمیل متصل نشده. پس از تعیین مقصد فرم، ارسال واقعی فعال می‌شود.
        </p>
      ) : null}

      <motion.button
        type="submit"
        className="btn-primary mt-6 w-full gap-2 sm:w-auto"
        whileHover={reduceMotion ? undefined : { y: -2 }}
        whileTap={reduceMotion ? undefined : { scale: 0.97 }}
        transition={{ duration: 0.18 }}
      >
        <Icon name="send" className="h-4 w-4" />
        ارسال درخواست
      </motion.button>
    </form>
  );
}
