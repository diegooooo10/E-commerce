import {
  Controller,
  type Control,
  type FieldError,
  type FieldValues,
  type Path,
  type PathValue,
} from "react-hook-form";

interface InputProps<T extends FieldValues> {
  label: string;
  id: Path<T>;
  control: Control<T>;
  error?: FieldError;
  options: string[];
}
export const SelectForm = <T extends FieldValues>({
  control,
  id,
  label,
  error,
  options,
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
        defaultValue={"" as PathValue<T, typeof id>}
        render={({ field }) => (
          <select
            id={id}
            {...field}
            className={`outline-2 ${
              error
                ? "outline-red-500 dark:outline-red-700"
                : "outline-border dark:outline-border-dark focus:outline-blue-500 dark:focus:outline-blue-700"
            } px-2 py-1 flex items-center rounded-md w-full`}
          >
            <option value="" hidden>
              Select an option
            </option>
            {options.map((opt) => (
              <option
                value={opt}
                key={opt}
                className="bg-background dark:bg-background-dark text-primary-theme"
              >
                {opt}
              </option>
            ))}
          </select>
        )}
      />
      <span className="text-error">{error && error.message}</span>
    </div>
  );
};
