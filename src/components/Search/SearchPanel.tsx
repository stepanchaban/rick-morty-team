import { ReactElement, useCallback } from 'react';
import { Block } from '@components/styledComponents/Blocks';
import SearchInput from './SearchInput';
import SuggestionList from './SuggestionList';
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
  const { suggestions, selectedItem, setNewSearchValue, selectSuggestion } =
    useAutoComplete({
      filterFn: filterSuggestions,
      source: suggestionsArray,
    });

  const memoizedSetNewSearchValue = useCallback(setNewSearchValue, [
    selectedItem,
  ]);

  return (
    <Block width={'30%'}>
      <SearchInput
        setNewSearchValue={memoizedSetNewSearchValue}
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
