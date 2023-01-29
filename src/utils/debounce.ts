export type CallBack = (...args: unknown[]) => void;

export const debounce = (callback: CallBack, delay: number) => {
  let id: ReturnType<typeof setTimeout>;
  return (...args: unknown[]) => {
    if (id) clearTimeout(id);
    id = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};
