type DebounceFunction = (
    fn: <ArgumentsType, ReturnedValueType> (...args: ArgumentsType[]) => ReturnedValueType | void,
    delay: number
) => <ArgumentsType>(...args: ArgumentsType[]) => void;

export const debounce: DebounceFunction = (fn, delay) => {
    let timeoutId: ReturnType<typeof setTimeout>;

    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            fn(...args);
        }, delay);
    };
};