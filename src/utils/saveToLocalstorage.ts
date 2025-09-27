export const saveToLocalstorage = <T>(data: T, key: string) => {
  if (typeof data === "string") localStorage.setItem(key, data);
  else localStorage.setItem(key, JSON.stringify(data));
};
