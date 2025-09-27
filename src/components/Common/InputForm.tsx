import type { ReactNode } from "react";
import {
  Controller,
  type Control,
  type FieldError,
  type FieldValues,
  type Path,
} from "react-hook-form";

interface InputProps<T extends FieldValues> {
  label: string;
  id: Path<T>;
  control: Control<T>;
  type?: React.HTMLInputTypeAttribute;
  error?: FieldError;
  placeholder: string;
  render?: () => ReactNode;
  className?: string;
}
export const InputForm = <T extends FieldValues>({
  control,
  id,
  label,
  placeholder,
  error,
  type,
  render,
  className,
}: InputProps<T>) => {
  return (
    <div className="w-full flex flex-col gap-1">
      <label
        htmlFor={id}
        className="font-medium text-text-primary dark:text-text-primary-dark"
      >
        {label}:
      </label>
      <Controller
        name={id}
        control={control}
        render={({ field }) => (
          <div className={className}>
            <input
              id={id}
              type={type}
              {...field}
              placeholder={placeholder}
              className={`outline-2 ${
                error
                  ? "outline-red-500 dark:outline-red-700"
                  : "outline-border dark:outline-border-dark focus:outline-blue-500 dark:focus:outline-blue-700"
              } px-2 py-1 flex items-center rounded-md w-full ${
                render && "pr-10"
              }`}
            />
            {render && render()}
          </div>
        )}
      />
      <span className="text-error">{error && error.message}</span>
    </div>
  );
};
