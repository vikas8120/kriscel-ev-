import { useEffect, useState } from 'react';

export function useLocalStorage(key, initialValue) {
  const read = () => {
    if (typeof window === 'undefined') return initialValue;
    try {
      const raw = window.localStorage.getItem(key);
      return raw ? JSON.parse(raw) : initialValue;
    } catch {
      return initialValue;
    }
  };

  const [value, setValue] = useState(read);

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Ignore quota / privacy errors in a frontend-only demo.
    }
  }, [key, value]);

  return [value, setValue];
}
