export const debounce = (func: (query: string) => void, delay: number) => {
  let timerId: NodeJs.Timeout;

  return (query: string) => {
    clearTimeout(timerId);
    timerId = setTimeout(func, delay, query);
  };
};
