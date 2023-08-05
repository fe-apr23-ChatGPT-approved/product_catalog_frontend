import { useState, useEffect } from 'react';

export function useLocalStorage<T>(
  key: string, initialValue: T): [T, (v :T) => void] {

  const getStorageValue = (): T => {
    const saved = localStorage.getItem(key);

    if (saved) {
      const data: T = JSON.parse(saved);

      return data;
    }
  
    return initialValue;
  };

  const [value, setValue] = useState<T>(getStorageValue);

  useEffect(() => {
    setValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
