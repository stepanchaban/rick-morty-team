import { ReactElement, useRef } from "react";
import useDebounce from "@utils/useDebounce";
import styled from "styled-components";

const SearchWrap = styled.div`
    padding: 30px 0;
    text-align: center;
`
const SearchInput = styled.input`
    width: 40%;
    border-radius: 20px;
    border: 1px solid #838282;
    outline: none;
    font-size: 25px;
    padding: 10px;
    transition: 0.3s;
    &:focus {
        border: 1px solid #111111;
    }
`
const delay = 2000;

function SearchPanel(): ReactElement {
    const ref = useRef<HTMLInputElement | null>(null);
    const debouncedOnChange = useDebounce(onChange, delay);

    function onChange(): void{
        console.log(ref.current?.value)
    }

    return (
        <SearchWrap>
            <SearchInput onChange={debouncedOnChange} ref={ref} type="text" placeholder="Type something" />
        </SearchWrap>
    )
};

export default SearchPanel;