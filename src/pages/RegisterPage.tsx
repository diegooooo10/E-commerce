import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { getFromLocalstorage, saveToLocalstorage } from "../utils";
import type { User } from "../models";
import { RegisterForm } from "../components";
import { USER_KEY, USERS_KEY } from "../constants";
import { loadRegisterSchema, registerSchema, type registerSchemaType, type registerValues } from "../schema";
import { useEffect, useState } from "react";

const RegisterPage = () => {
  const navigate = useNavigate();
    const [schema, setSchema] = useState<registerSchemaType | null>(null);
  
    useEffect(() => {
      loadRegisterSchema().then((schema: registerSchemaType) =>
        setSchema(schema)
      );
    }, []);
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<registerValues>({
    resolver: schema ? zodResolver(registerSchema) : undefined,
    mode: "onBlur",
    defaultValues: {
      name: "",
      password: "",
      email: "",
      confirmPassword: "",
    },
  });
  const onSubmit: SubmitHandler<registerValues> = (values) => {
    const users = getFromLocalstorage<User[]>(USERS_KEY) ?? [];
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { confirmPassword, ...valuesUser } = values;
    users.push(valuesUser);
    saveToLocalstorage(users, USERS_KEY);
    saveToLocalstorage(valuesUser, USER_KEY);
    reset();
    navigate("/private/products");
  };
  if (!schema) return <p>Loading form...</p>;
  return (
    <article className="w-full min-h-dvh p-5 flex justify-center items-center flex-col">
      <RegisterForm
        control={control}
        errors={errors}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
      />
    </article>
  );
};
export default RegisterPage;
