import { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
export type TButtonType = "button" | "submit" | "reset";

export type TButtonProps = {
  classname?: string;
  title?: string;
  onClick?: VoidFunction;
  Icon?: ReactNode;
  type?: TButtonType;
  loading?: boolean;
  form?: string;
};

export type TFieldType = "input" | "textarea";

export type TInputProps = {
  type?: TFieldType;

  classname?: string;
  inputClassname?: string;

  label?: string;
  Icon?: ReactNode;
  error?: string;
  register?: UseFormRegisterReturn;

  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  textareaProps?: TextareaHTMLAttributes<HTMLTextAreaElement>;
};
