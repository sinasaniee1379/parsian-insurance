"use client";

import { Loader2 } from "lucide-react";
import { cn } from "./lib/utils";
import { TButtonProps } from "./types";

export function Button({
  classname = "",
  title,
  onClick,
  Icon,
  type = "button",
  loading = false,
  form,
}: TButtonProps) {
  return (
    <button
      type={type}
      form={form}
      onClick={onClick}
      disabled={loading}
      aria-busy={loading}
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-(--brand-blue) px-5 py-3 text-sm font-bold text-white transition-all duration-200 hover:brightness-110 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60",
        classname,
      )}
    >
      {loading ? (
        <>
          <Loader2 className="h-5 w-5 animate-spin" />
          <span>در حال ارسال...</span>
        </>
      ) : (
        <>
          {Icon && (
            <span className="flex shrink-0 items-center justify-center">
              {Icon}
            </span>
          )}

          {title && <span>{title}</span>}
        </>
      )}
    </button>
  );
}
