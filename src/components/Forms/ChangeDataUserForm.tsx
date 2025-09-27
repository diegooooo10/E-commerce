import type {
  Control,
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
} from "react-hook-form";
import { EyePassword, InputForm } from "../Common";
import type { changeDataUserValues } from "../../schema";

interface ChangeDataUserFormProps {
  control: Control<changeDataUserValues>;
  handleSubmit: UseFormHandleSubmit<changeDataUserValues>;
  errors: FieldErrors<changeDataUserValues>;
  onSubmit: SubmitHandler<changeDataUserValues>;
  visiblePassword: boolean;
  setVisiblePassword: React.Dispatch<React.SetStateAction<boolean>>;
}
export const ChangeDataUserForm = ({
  control,
  errors,
  handleSubmit,
  onSubmit,
  setVisiblePassword,
  visiblePassword,
}: ChangeDataUserFormProps) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputForm
        control={control}
        label="Name"
        id="name"
        error={errors.name}
        placeholder="Enter your name"
      />
      <InputForm
        control={control}
        label="Password"
        id="password"
        error={errors.password}
        placeholder="Enter your password"
        type={visiblePassword ? "text" : "password"}
        className="relative"
        render={() => (
          <EyePassword
            id="passwordEye"
            setVisiblePassword={setVisiblePassword}
            visiblePassword={visiblePassword}
          />
        )}
      />
      <button type="submit" className="button accent-component">
        Save Changes
      </button>
    </form>
  );
};
