export const getFromLocalstorage = <T>(key: string): T | null => {
  const localData = localStorage.getItem(key);
  return localData ? JSON.parse(localData) : null;
};
