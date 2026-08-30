import News1 from "@/assets/insurance/insurance-news-sanayi.png";
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
    id: "third-party-delay-penalty-waiver",
    title: "جرائم دیرکرد بیمه شخص ثالث بخشیده شد",
    summary:
      "از ۲ تا ۱۳ شهریورماه، جرائم دیرکرد بیمه شخص ثالث کلیه وسایل نقلیه بخشیده شد.",
    image: News1,
    imageAlt: "اطلاعیه بخشودگی جرائم دیرکرد بیمه شخص ثالث بیمه پارسیان",
    publisher: "بیمه پارسیان · نمایندگی صناعی",
    date: "۲ تا ۱۳ شهریورماه",
  },
];
