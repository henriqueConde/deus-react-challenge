import { useEffect, useMemo, useRef } from 'react';
import { CallBack, debounce } from '@utils/debounce';

const useDebounce = (fn: CallBack, delay = 500) => {
  const ref = useRef<CallBack>();

  const debouncedFn = useMemo(() => {
    const func = () => {
      ref.current?.();
    };

    return debounce(func, delay);
  }, [delay]);

  useEffect(() => {
    ref.current = fn;
  }, [fn]);

  return debouncedFn;
};

export default useDebounce;
