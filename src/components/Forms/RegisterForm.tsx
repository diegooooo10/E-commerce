import type {
  Control,
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
} from "react-hook-form";
import { EyePassword, InputForm } from "../Common";
import { useState } from "react";
import type { registerValues } from "../../schema";

interface RegisterFormProps {
  control: Control<registerValues>;
  handleSubmit: UseFormHandleSubmit<registerValues>;
  errors: FieldErrors<registerValues>;
  onSubmit: SubmitHandler<registerValues>;
}

export const RegisterForm = ({
  control,
  errors,
  handleSubmit,
  onSubmit,
}: RegisterFormProps) => {
  const [visiblePassword, setVisiblePassword] = useState<boolean>(false);
  const [confirmVisiblePassword, setConfirmVisiblePassword] =
    useState<boolean>(false);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="lg:w-1/3 w-full border rounded-lg border-border dark:border-border-dark px-4 py-8  bg-card dark:bg-card-dark flex flex-col justify-between gap-5"
    >
      <h1 className="text-primary-theme text-2xl font-bold text-center">
        Register
      </h1>
      <section className="h-full flex flex-col gap-5 mb-4">
        <InputForm
          control={control}
          label="Name"
          id="name"
          error={errors.name}
          type="text"
          placeholder="Enter your name"
        />
        <InputForm
          control={control}
          label="Email"
          id="email"
          error={errors.email}
          type="email"
          placeholder="Enter your email"
        />
        <InputForm
          control={control}
          label="Password"
          id="password"
          error={errors.password}
          type={visiblePassword ? "text" : "password"}
          placeholder="Enter your password"
          className="relative"
          render={() => (
            <EyePassword
              id="eye-register"
              setVisiblePassword={setVisiblePassword}
              visiblePassword={visiblePassword}
            />
          )}
        />
        <InputForm
          control={control}
          label="Confirm password"
          id="confirmPassword"
          error={errors.confirmPassword}
          type={confirmVisiblePassword ? "text" : "password"}
          placeholder="Confirm password"
          className="relative"
          render={() => (
            <EyePassword
              id="eye-confirm-register"
              setVisiblePassword={setConfirmVisiblePassword}
              visiblePassword={confirmVisiblePassword}
            />
          )}
        />
      </section>
      <section className="flex flex-col gap-3">
        <button className=" h-10 accent-component px-5 py-2 ">Register</button>
      </section>
    </form>
  );
};
