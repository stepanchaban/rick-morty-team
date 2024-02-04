import { ReactElement, useRef } from "react";
import useDebounce from "../../utils/useDebounce";

const delay = 2000;

function SearchPanel(): ReactElement {
    const ref = useRef<HTMLInputElement | null>(null);
    const debouncedOnChange = useDebounce(onChange, delay);

    function onChange(): void{
        console.log(ref.current?.value)
    }

    return (
        <div>
            <input onChange={debouncedOnChange} ref={ref} type="text" />
        </div>
    )
};

export default SearchPanel;