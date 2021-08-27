import { useEffect, useCallback } from "react";

const useDebounce = (
  effect: (...args: any[]) => any,
  delay: number,
  deps: any[]
) => {
  // @ts-ignore
  const callback = useCallback(effect, deps);

  useEffect(() => {
    const handler = setTimeout(() => {
      callback();
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [callback, delay]);
};

export default useDebounce;
