export const siteConfig = {
  name: "بیمه پارسیان | نمایندگی آفرین صناعی",
  shortName: "نمایندگی آفرین صناعی",
  description:
    "معرفی خدمات بیمه پارسیان و دریافت مشاوره برای انتخاب بیمه مناسب از نمایندگی آفرین صناعی.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
  representative: "آفرین صناعی",
  phone: "شماره تماس تکمیل شود",
  mobile: "شماره همراه تکمیل شود",
  email: "ایمیل تکمیل شود",
  address: "آدرس نمایندگی تکمیل شود",
  hours: "ساعات کاری تکمیل شود",
} as const;
