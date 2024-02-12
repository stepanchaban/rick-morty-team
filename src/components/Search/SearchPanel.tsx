import { ReactElement, useEffect, useState } from 'react';
import { Block } from '@components/styledComponents/Blocks';
import SearchInput from './SearchInput';
import SuggestionList from './Suggestion/SuggestionList';

const suggestionsArray = [
  'Rick Sanchez',
  'Morty Smith',
  'Summer Smith',
  'Beth Smith',
  'Jerry Smith',
  'Abadango Cluster Princess',
];

const filterSuggestions = (inputValue: string): string[] => {
  return suggestionsArray.filter((suggestion: string) =>
    suggestion.toLowerCase().includes(inputValue.toLowerCase()),
  );
};

function SearchPanel(): ReactElement {
  const [currentSuggestions, setSuggestions] = useState<string[]>([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    if (searchValue === '') {
      setSuggestions([]);
      return;
    }
    if (searchValue) {
      const filteredSuggestions = filterSuggestions(searchValue);
      setSuggestions(filteredSuggestions);
    }
  }, [searchValue]);

  function setNewSearchValue(newSearchInput: string): void {
    setSearchValue(newSearchInput);
  }

  return (
    <Block width={'30%'}>
      <SearchInput setNewSearchValue={setNewSearchValue} />
      {!!currentSuggestions.length && (
        <SuggestionList suggestions={currentSuggestions} />
      )}
    </Block>
  );
}

export default SearchPanel;
