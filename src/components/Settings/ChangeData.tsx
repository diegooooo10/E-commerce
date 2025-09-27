import { useEffect, useState } from "react";
import { ChangeDataUserForm } from "../Forms";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { getFromLocalstorage, saveToLocalstorage } from "../../utils";
import type { User } from "../../models";
import { USER_KEY, USERS_KEY } from "../../constants";
import {
  changeDataUserSchema,
  loadChangeDataSchema,
  type changeDataUserSchemaType,
  type changeDataUserValues,
} from "../../schema";

export const ChangeData = () => {
  const [visiblePassword, setVisiblePassword] = useState<boolean>(false);
  const user = getFromLocalstorage<User>(USER_KEY);
  const [schema, setSchema] = useState<changeDataUserSchemaType | null>(null);

  useEffect(() => {
    loadChangeDataSchema().then((schema: changeDataUserSchemaType) =>
      setSchema(schema)
    );
  }, []);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<changeDataUserValues>({
    resolver: schema ? zodResolver(changeDataUserSchema) : undefined,
    mode: "onBlur",
    defaultValues: {
      name: user!.name,
      password: user!.password,
    },
  });
  const onSubmit: SubmitHandler<changeDataUserValues> = (values) => {
    const users = getFromLocalstorage<User[]>(USERS_KEY);
    if (
      (values.name === user!.name && values.password === user!.password) ||
      !users ||
      !user
    )
      return;
    const indexUser = users.findIndex(
      (currentUser) =>
        currentUser.email === user!.email &&
        currentUser.password === user!.password
    );
    if (indexUser === -1) return;
    const updateUser = { ...values, email: user.email };
    users[indexUser] = updateUser;
    saveToLocalstorage<User>(updateUser, USER_KEY);
    saveToLocalstorage<User[]>(users, USERS_KEY);
  };

  if (!schema) return <p>Loading form...</p>;

  return (
    <div className="flex flex-col gap-5 transition-all">
      <h2 className="font-bold text-start text-primary-theme">
        Change Data User Form
      </h2>

      <ChangeDataUserForm
        control={control}
        errors={errors}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        setVisiblePassword={setVisiblePassword}
        visiblePassword={visiblePassword}
      />
    </div>
  );
};
