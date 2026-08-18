# بیمه پارسیان — نمایندگی آفرین صناعی

وب‌سایت فارسی و RTL با Next.js App Router، TypeScript و Tailwind CSS v4.

## اجرا

```bash
npm install
npm run dev
```

سپس `http://localhost:3000` را باز کنید.

## بررسی نهایی

```bash
npm run lint
npm run build
```

## مواردی که باید قبل از انتشار تکمیل شوند

اطلاعات واقعی در `lib/site.ts`:

- شماره تلفن
- شماره همراه
- ایمیل
- آدرس
- ساعات کاری

همچنین در `.env.local` در صورت نیاز:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.ir
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_GTM_ID=
NEXT_PUBLIC_META_PIXEL_ID=
```

فرم تماس فعلاً فقط اعتبارسنجی سمت کاربر دارد و عمداً پیام موفقیت ارسال واقعی نشان نمی‌دهد؛ برای فعال‌سازی باید به API، ایمیل یا CRM متصل شود.


## UI libraries

- `framer-motion@^13.1.0` for subtle entrance, hover, and mobile-menu motion.
- `lucide-react@^1.31.0` for all interface icons.
- The Parsian logo is stored as a transparent 2048×2048 PNG in `public/parsian-logo-2k.png`.
- Favicon/app icon assets are generated from the same logo in `app/favicon.ico`, `app/icon.png`, and `app/apple-icon.png`.
