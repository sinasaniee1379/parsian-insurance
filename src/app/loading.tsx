export default function Loading() {
  return (
    <div className="site-container py-20" aria-label="در حال بارگذاری">
      <div className="h-8 w-44 animate-pulse rounded-xl bg-slate-200" />
      <div className="mt-5 h-4 max-w-2xl animate-pulse rounded bg-slate-200" />
      <div className="mt-3 h-4 max-w-xl animate-pulse rounded bg-slate-200" />
    </div>
  );
}
