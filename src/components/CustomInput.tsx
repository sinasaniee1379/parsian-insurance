"use client";

import { cn } from "./lib/utils";
import { TInputProps } from "./types";

export function Input({
  type = "input",
  classname = "",
  inputClassname = "",
  label,
  Icon,
  error,
  inputProps,
  textareaProps,
}: TInputProps) {
  const fieldId =
    type === "input"
      ? (inputProps?.id ?? inputProps?.name)
      : (textareaProps?.id ?? textareaProps?.name);

  return (
    <div className={`w-full ${classname}`}>
      {label && (
        <label
          htmlFor={fieldId}
          className="mb-2 block text-sm font-bold text-slate-700"
        >
          {label}

          {(inputProps?.required || textareaProps?.required) && (
            <span className="mr-1 text-red-500">*</span>
          )}
        </label>
      )}

      <div className="relative">
        {Icon && (
          <span className="pointer-events-none absolute right-4 top-4 flex items-center justify-center text-slate-400">
            {Icon}
          </span>
        )}

        {type === "textarea" ? (
          <textarea
            {...textareaProps}
            id={fieldId}
            aria-invalid={Boolean(error)}
            aria-describedby={error && fieldId ? `${fieldId}-error` : undefined}
            className={cn(
              "min-h-32 w-full resize-y rounded-xl border bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 focus:ring-4 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:opacity-70",
              Icon ? "pr-11" : "",
              error
                ? "border-red-400 focus:border-red-500 focus:ring-red-100"
                : "border-slate-200 focus:border-(--brand-blue) focus:ring-blue-100",
              inputClassname,
            )}
          />
        ) : (
          <input
            {...inputProps}
            id={fieldId}
            aria-invalid={Boolean(error)}
            aria-describedby={error && fieldId ? `${fieldId}-error` : undefined}
            className={cn(
              "min-h-12 w-full rounded-xl border bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 focus:ring-4 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:opacity-70",
              Icon ? "pr-11" : "",
              error
                ? "border-red-400 focus:border-red-500 focus:ring-red-100"
                : "border-slate-200 focus:border-(--brand-blue) focus:ring-blue-100",
              inputClassname,
            )}
          />
        )}
      </div>

      {error && fieldId && (
        <p
          id={`${fieldId}-error`}
          className="mt-2 text-xs font-medium text-red-500"
        >
          {error}
        </p>
      )}
    </div>
  );
}
