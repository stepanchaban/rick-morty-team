import { ReactElement, useRef } from "react";
import { debounce } from "../../utils/debounce";

const delay = 2000;

function SearchPanel(): ReactElement {
    const ref = useRef<HTMLInputElement | null>(null);

    function logCurrentInputValue(): void {
        console.log(ref.current?.value);
    }

    const debouncedOnChange = debounce(logCurrentInputValue, delay);

    function onChange(): void{
        debouncedOnChange();
    }

    return (
        <div>
            <input onChange={onChange} ref={ref} type="text" />
        </div>
    )
};

export default SearchPanel;