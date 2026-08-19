import { z } from "zod";

export const leadSchema = z.object({
  fullName: z.string().min(3, "نام و نام خانوادگی را وارد کنید"),

  phone: z.string().regex(/^09\d{9}$/, "شماره موبایل معتبر نیست"),

  insuranceType: z.string().min(1, "نوع بیمه را انتخاب کنید"),

  description: z.string().max(1000, "توضیحات زیاد است").optional(),
});

export type LeadFormData = z.infer<typeof leadSchema>;
