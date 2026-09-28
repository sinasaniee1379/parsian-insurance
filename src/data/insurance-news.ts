import News1 from "@/assets/insurance/news1.png";
import News2 from "@/assets/insurance/news2.png";
import { StaticImageData } from "next/image";
export type InsuranceNewsItem = {
  id: string;
  title: string;
  summary: string;
  image: StaticImageData;
  imageAlt: string;
  publisher?: string;
  date?: string;
  href?: string;
};

export const insuranceNews: InsuranceNewsItem[] = [
  {
    id: "autumn-liability-insurance-festival",
    title: "جشنواره پاییزه بیمه‌های مسئولیت؛ از اول مهر تا پایان آذر",
    summary:
      "جشنواره پاییزه بیمه‌های مسئولیت بیمه پارسیان از اول مهر تا پایان آذرماه با تخفیف‌های ویژه برگزار می‌شود.",
    image: News1,
    imageAlt: "جشنواره پاییزه بیمه‌های مسئولیت بیمه پارسیان با تخفیف ویژه",
    publisher: "بیمه پارسیان · نمایندگی صناعی",
    date: "اول مهر تا پایان آذرماه",
  },
  {
    id: "parsian-financial-solvency-first-level",
    title: "بیمه پارسیان همچنان در سطح اول توانگری مالی روندی صعودی دارد",
    summary:
      "بیمه پارسیان با حفظ جایگاه خود در سطح اول توانگری مالی، روندی صعودی و عملکردی مطلوب در شاخص‌های مالی داشته است.",
    image: News2,
    imageAlt: "بیمه پارسیان همچنان در سطح اول توانگری مالی روندی صعودی دارد",
    publisher: "بیمه پارسیان · نمایندگی صناعی",
    date: "۱۴۰۵",
  },
];
