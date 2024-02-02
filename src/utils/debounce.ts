type DebounceFunction<T extends (...args: unknown[]) => unknown> = (
    fn: T,
    delay: number
) => (...args: Parameters<T>) => void;

const debounce: DebounceFunction<(...args: unknown[]) => unknown> = (fn, delay) => {
    let timeoutId: ReturnType<typeof setTimeout>;

    return (...args: Parameters<typeof fn>) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            fn(...args);
        }, delay);
    };
};

export default debounce;