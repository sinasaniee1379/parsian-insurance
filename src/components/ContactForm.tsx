"use client";

import { insuranceProducts } from "@/data/insurance";
import { useCreateLead } from "@/api";
import { LeadFormData, leadSchema } from "@/validation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./Button";
import { Send } from "lucide-react";
import { Input } from "./CustomInput";
import { Select } from "./Select";

export function ContactForm() {
  const insuranceOptions = insuranceProducts.map((item) => ({
    label: item.title,
    value: item.title,
  }));
  const { mutate, isPending } = useCreateLead();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      insuranceType: "",
      description: "",
    },
  });
  console.log(errors);
  function onSubmit(data: LeadFormData) {
    mutate(data, {
      onSuccess: () => {
        reset();
      },
    });
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-4xl border border-slate-200 bg-white p-6 shadow-[0_20px_70px_rgba(15,23,42,.07)] sm:p-8"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Input
          label="نام و نام خانوادگی"
          error={errors.fullName?.message}
          inputProps={{
            ...register("fullName"),
            placeholder: "نام خود را وارد کنید",
          }}
        />

        <Input
          label=" شماره تماس"
          error={errors.phone?.message}
          inputProps={{
            ...register("phone"),
            placeholder: "0912xxxxxxx",
            inputMode: "tel",
            autoComplete: "tel",
            dir: "ltr",
          }}
        />
      </div>
      <Select
        classname="mt-5"
        label="نوع بیمه"
        placeholder="انتخاب کنید"
        options={insuranceOptions}
        error={errors.insuranceType?.message}
        selectProps={{
          ...register("insuranceType"),
        }}
      />

      <Input
        label="توضیحات"
        error={errors.description?.message}
        textareaProps={{
          ...register("description"),
          placeholder: "اگر توضیحی دارید اینجا بنویسید",
          inputMode: "tel",
          autoComplete: "tel",
        }}
        type="textarea"
        classname="mt-5"
      />

      <Button
        type="submit"
        title="ارسال درخواست"
        loading={isPending}
        Icon={<Send className="h-5 w-5" />}
        classname="mt-6"
      />
    </form>
  );
}
