/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from "react";

export const UseDebounce = (fn: any, delay = 500) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const debounceFn = (...params: any[]) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      fn(...params);
    }, delay);
  };

  return debounceFn;
};
