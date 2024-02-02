import { ReactElement, useRef } from "react";

function SearchPanel(): ReactElement {
    const ref = useRef<HTMLInputElement | null>(null);

    function onChange(): void {
        console.log(ref.current?.value);
    }

    return (
        <div>
            <input onChange={(): void => onChange()} ref={ref} type="text" />
        </div>
    )
};

export default SearchPanel;