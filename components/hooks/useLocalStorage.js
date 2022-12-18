import { useEffect, useState } from "react";

const PREFIX = "";

const useLocalStorage = (key, initalValue) => {
  const prefixedKey = PREFIX + key;

  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixedKey);
    if (jsonValue !== undefined || jsonValue !== null)
      return JSON.parse(jsonValue);
    if (typeof initalValue === "function") {
      return initalValue();
    } else {
      return initalValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value));
  }, [prefixedKey, value]);
  return [value, setValue];
};
export default useLocalStorage;
