import type { User } from "../models";
interface validateUserProps {
  userString: string | null;
}
export const validateUser = ({ userString }: validateUserProps) => {
  const user: User | null = JSON.parse(userString ?? "null");
  const users: User[] = JSON.parse(localStorage.getItem("users") ?? "[]");
  const isValidUser = user
    ? users.findIndex(
        (u) => u.name === user.name && u.password === user.password
      )
    : -1;
  return {
    user,
    users,
    isValidUser,
  };
};
