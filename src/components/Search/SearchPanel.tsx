import { ReactElement, useRef } from "react";
import {debounce} from "../../utils/debounce";

const delay = 2000;

function SearchPanel(): ReactElement {
    const ref = useRef<HTMLInputElement | null>(null);

    const onChange = (): void => {
        console.log(ref.current?.value);
    }

    const debouncedOnChange = debounce(onChange, delay);

    return (
        <div>
            <input onChange={(): void => debouncedOnChange()} ref={ref} type="text" />
        </div>
    )
};

export default SearchPanel;