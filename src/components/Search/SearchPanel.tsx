import { ReactElement, useRef } from 'react';
import { SearchInput, Block } from './searchStyles';
import SuggestionList from './Suggestion/SuggestionList';
import useDebounce from '@utils/useDebounce';

const delay = 2000;

const suggestionsArray = [
  'Rick Sanchez',
  'Morty Smith',
  'Summer Smith',
  'Beth Smith',
  'Jerry Smith',
  'Abadango Cluster Princess',
];

function SearchPanel(): ReactElement {
  const ref = useRef<HTMLInputElement | null>(null);
  const debouncedOnChange = useDebounce(onChange, delay);

  function onChange(): void {
    console.log(ref.current?.value);
  }

  return (
    <Block>
      <SearchInput
        onChange={debouncedOnChange}
        ref={ref}
        type="text"
        placeholder="Type something..."
      />
      <SuggestionList suggestions={suggestionsArray} />
    </Block>
  );
}

export default SearchPanel;
