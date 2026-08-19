"use client";

import type { ReactNode, SelectHTMLAttributes } from "react";
import { cn } from "./lib/utils";

export type TSelectOption = {
  label: string;
  value: string | number;
};

export type TSelectProps = {
  classname?: string;
  selectClassname?: string;

  label?: string;
  Icon?: ReactNode;
  error?: string;

  placeholder?: string;

  options: TSelectOption[];

  selectProps?: SelectHTMLAttributes<HTMLSelectElement>;
};

export function Select({
  classname = "",
  selectClassname = "",
  label,
  Icon,
  error,
  placeholder = "انتخاب کنید",
  options,
  selectProps,
}: TSelectProps) {
  const selectId = selectProps?.id ?? selectProps?.name;

  return (
    <div className={`w-full ${classname}`}>
      {label && (
        <label
          htmlFor={selectId}
          className="mb-2 block text-sm font-bold text-slate-700"
        >
          {label}

          {selectProps?.required && (
            <span className="mr-1 text-red-500">*</span>
          )}
        </label>
      )}

      <div className="relative">
        {Icon && (
          <span className="pointer-events-none absolute right-4 top-1/2 z-10 flex -translate-y-1/2 items-center justify-center text-slate-400">
            {Icon}
          </span>
        )}

        <select
          {...selectProps}
          id={selectId}
          aria-invalid={Boolean(error)}
          aria-describedby={error && selectId ? `${selectId}-error` : undefined}
          className={cn(
            "min-h-12 w-full appearance-none rounded-xl border bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-200 focus:ring-4 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:opacity-70",
            Icon && "pr-11",
            error
              ? "border-red-400 focus:border-red-500 focus:ring-red-100"
              : "border-slate-200 focus:border-(--brand-blue) focus:ring-blue-100",
            selectClassname,
          )}
        >
          {placeholder && <option value="">{placeholder}</option>}

          {options.map((option) => (
            <option key={String(option.value)} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-xs text-slate-400">
          ▼
        </span>
      </div>

      {error && selectId && (
        <p
          id={`${selectId}-error`}
          className="mt-2 text-xs font-medium text-red-500"
        >
          {error}
        </p>
      )}
    </div>
  );
}
