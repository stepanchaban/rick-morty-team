import { ReactElement, useCallback, useEffect, useState } from 'react';
import { Block } from '@components/styledComponents/Blocks';
import SearchInput from './SearchInput';
import SuggestionList from './Suggestion/SuggestionList';
import useAutoComplete from './useAutoComplete';

const suggestionsArray = [
  'Rick Sanchez',
  'Morty Smith',
  'Summer Smith',
  'Beth Smith',
  'Jerry Smith',
  'Abadango Cluster Princess',
];

const filterSuggestions = (inputValue: string, source: string[]): string[] => {
  return source.filter((suggestion: string) =>
    suggestion.toLowerCase().includes(inputValue.toLowerCase()),
  );
};

function SearchPanel(): ReactElement {
  // const [currentSuggestions, setSuggestions] = useState<string[]>([]);
  // const [searchValue, setSearchValue] = useState('');

  // useEffect(() => {
  //   if (searchValue === '') {
  //     setSuggestions([]);
  //     return;
  //   }
  //   if (searchValue) {
  //     const filteredSuggestions = filterSuggestions(searchValue);
  //     setSuggestions(filteredSuggestions);
  //   }
  // }, [searchValue]);

  // const setNewSearchValue = useCallback(function (
  //   newSearchInput: string,
  // ): void {
  //   setSearchValue(newSearchInput);
  // }, []);

  // function selectSuggestion(selectedSuggestion: string): void {
  //   setSearchValue(selectedSuggestion);
  //   setSuggestions([]);
  // }
  const { suggestions, selectedItem, setNewSearchValue, selectSuggestion } =
    useAutoComplete<string[]>({
      filterFn: filterSuggestions,
      source: suggestionsArray,
    });

  return (
    <Block width={'30%'}>
      <SearchInput
        setNewSearchValue={setNewSearchValue}
        selectedItem={selectedItem}
      />
      <SuggestionList
        suggestions={suggestions}
        selectSuggestion={selectSuggestion}
      />
    </Block>
  );
}

export default SearchPanel;
