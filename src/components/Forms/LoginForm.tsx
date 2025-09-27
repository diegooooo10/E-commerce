import { NavLink } from "react-router-dom";
import { EyePassword, InputForm } from "../Common";
import type {
  Control,
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
} from "react-hook-form";
import type { loginValues } from "../../schema";

interface LoginFormProps {
  control: Control<loginValues>;
  handleSubmit: UseFormHandleSubmit<loginValues>;
  errors: FieldErrors<loginValues>;
  onSubmit: SubmitHandler<loginValues>;
  visiblePassword: boolean;
  setVisiblePassword: React.Dispatch<React.SetStateAction<boolean>>;
  userNotFound: boolean;
}

export const LoginForm = ({
  control,
  errors,
  handleSubmit,
  onSubmit,
  setVisiblePassword,
  userNotFound,
  visiblePassword,
}: LoginFormProps) => {
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="xl:w-2/4 2xl:w-1/4 w-full border rounded-lg border-border dark:border-border-dark px-4 py-8  bg-card dark:bg-card-dark flex flex-col justify-between gap-5"
    >
      <section className="flex flex-col justify-center items-center gap-2 -mb-4">
        <h1 className="text-primary-theme text-2xl font-bold">Login</h1>
        {
          <span className={`text-error ${userNotFound && "fade-animation"}`}>
            {userNotFound && "Account does not exist."}
          </span>
        }
      </section>
      <section className="h-full flex flex-col gap-5">
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
              id="eye-login"
              setVisiblePassword={setVisiblePassword}
              visiblePassword={visiblePassword}
            />
          )}
        />
      </section>
      <section className="flex flex-col gap-3">
        <button className="h-10 accent-component px-5 py-2">Login</button>
        <p className="text-sm text-secondary-theme flex gap-1">
          Don't have an account?
          <NavLink to="/register" className="hover:underline dark:text-blue-400 text-blue-600">
            Sign up
          </NavLink>
        </p>
      </section>
    </form>
  );
};
