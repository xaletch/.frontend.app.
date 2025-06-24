import React from "react"
import { FieldWrapper, type FieldWrapperPassThroughProps } from "./field-wrapper"
import type { UseFormRegisterReturn } from "react-hook-form";
import { cn } from "@/shared/lib";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & 
FieldWrapperPassThroughProps & {
  className?: string;
  register: Partial<UseFormRegisterReturn>;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, error, register, ...props }, ref) => {
    return (
      <FieldWrapper label={label} error={error}>
        <input
          ref={ref}
          type={type}
          {...register}
          {...props}
          className={cn("h-9 w-full flex border px-3 py-1 disabled:cursor-not-allowed disabled:opacity-50", className)}
        />
      </FieldWrapper>
    );
  },
);
Input.displayName = "Input";

export { Input }