import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { saveToLocalstorage, validateUser } from "../utils";
import { LoginForm } from "../components/";
import { USER_KEY } from "../constants";
import {
  loadLoginSchema,
  type loginSchemaType,
  type loginValues,
} from "../schema";

const LoginPage = () => {
  const [visiblePassword, setVisiblePassword] = useState<boolean>(false);
  const [userNotFound, setUserNotFound] = useState(false);
  const navigate = useNavigate();
  const [schema, setSchema] = useState<loginSchemaType | null>(null);

  useEffect(() => {
    loadLoginSchema().then((schema: loginSchemaType) => setSchema(schema));
  }, []);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<loginValues>({
    resolver: schema ? zodResolver(schema) : undefined,
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<loginValues> = (values) => {
    const { isValidUser, user } = validateUser({
      userString: JSON.stringify(values),
    });
    reset();
    if (isValidUser === -1) {
      setUserNotFound(true);
      setTimeout(() => setUserNotFound(false), 3000);
      return;
    }
    saveToLocalstorage(user, USER_KEY);
    navigate("/private/products");
  };
  
  if (!schema) return <p>Loading form...</p>;

  return (
    <article className="w-full min-h-dvh p-5 flex justify-center items-center flex-col">
      <LoginForm
        control={control}
        handleSubmit={handleSubmit}
        errors={errors}
        onSubmit={onSubmit}
        visiblePassword={visiblePassword}
        setVisiblePassword={setVisiblePassword}
        userNotFound={userNotFound}
      />
    </article>
  );
};
export default LoginPage;
