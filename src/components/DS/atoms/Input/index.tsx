"use client";

import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/components/DS/utils/cn";

export type InputSize = "sm" | "md" | "lg";
export type InputVariant = "default" | "error" | "success";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  size?: InputSize;
  variant?: InputVariant;
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const sizeStyles: Record<InputSize, string> = {
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4 text-base",
  lg: "h-12 px-4 text-lg",
};

const variantStyles: Record<InputVariant, string> = {
  default:
    "border-zinc-300 focus:border-zinc-500 focus:ring-zinc-500 dark:border-zinc-700 dark:focus:border-zinc-500",
  error:
    "border-red-500 focus:border-red-600 focus:ring-red-500 dark:border-red-600",
  success:
    "border-green-500 focus:border-green-600 focus:ring-green-500 dark:border-green-600",
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = "md",
      variant = "default",
      label,
      error,
      helperText,
      fullWidth = false,
      leftIcon,
      rightIcon,
      className,
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
    const inputVariant = error ? "error" : variant;
    const hasIcon = leftIcon || rightIcon;

    return (
      <div className={cn("flex flex-col gap-1", fullWidth && "w-full")}>
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-zinc-900 dark:text-zinc-50"
          >
            {label}
            {props.required && (
              <span className="text-red-500 ml-1" aria-label="required">
                *
              </span>
            )}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 dark:text-zinc-400">
              {leftIcon}
            </div>
          )}
          <input
            ref={ref}
            id={inputId}
            className={cn(
              "w-full rounded-lg border bg-white text-zinc-900",
              "placeholder:text-zinc-400 dark:placeholder:text-zinc-600",
              "focus:outline-none focus:ring-2 focus:ring-offset-1",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              "dark:bg-zinc-900 dark:text-zinc-50 dark:border-zinc-700",
              sizeStyles[size],
              variantStyles[inputVariant],
              hasIcon && leftIcon && "pl-10",
              hasIcon && rightIcon && "pr-10",
              className
            )}
            aria-invalid={error ? "true" : "false"}
            aria-describedby={
              error || helperText
                ? `${inputId}-${error ? "error" : "helper"}`
                : undefined
            }
            {...props}
          />
          {rightIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 dark:text-zinc-400">
              {rightIcon}
            </div>
          )}
        </div>
        {error && (
          <span
            id={`${inputId}-error`}
            className="text-sm text-red-600 dark:text-red-400"
            role="alert"
          >
            {error}
          </span>
        )}
        {helperText && !error && (
          <span
            id={`${inputId}-helper`}
            className="text-sm text-zinc-600 dark:text-zinc-400"
          >
            {helperText}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

