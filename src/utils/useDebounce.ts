import { useEffect } from 'react';

const useDebounce = (
  funcForDebounce: <ArgumentsType, ReturnedValueType>(
    ...args: ArgumentsType[]
  ) => ReturnedValueType | void,
  delay: number,
): (<ArgumentsType>(...args: ArgumentsType[]) => void) => {
  let timeoutId: ReturnType<typeof setTimeout>;

  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  });

  const debouncedFunc = <ArgumentsType>(...args: ArgumentsType[]): void => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      funcForDebounce(...args);
    }, delay);
  };

  return debouncedFunc;
};

export default useDebounce;
