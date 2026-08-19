import { Inter } from "next/font/google";
import LocalFont from "next/font/local";

export const IranSans = LocalFont({
  src: [
    {
      path: "./../../public/fonts/IRANSansWeb(FaNum).woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--iranSans",
  style: "normal",
  display: "block",
});

export const inter = Inter({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
