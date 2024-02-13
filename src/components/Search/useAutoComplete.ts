import { useEffect, useState } from 'react';

// let returnedValue: [string, string[]];

type Props = {
  filterFn: (searchValue: string, source: string[]) => string[];
  source: string[];
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function useAutoComplete<Source>({ filterFn, source }: Props) {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [searchValue, setSearchValue] = useState('');
  const [selectedItem, setSelectedItem] = useState('');

  useEffect(() => {
    if (searchValue === '') {
      setSuggestions([]);
      return;
    }
    if (searchValue) {
      setSuggestions(filterFn(searchValue, source));
      return;
    }
  }, [filterFn, searchValue, source]);

  function setNewSearchValue(newSearchInput: string): void {
    setSearchValue(newSearchInput);
  }

  function selectSuggestion(newSelectedItem: string): void {
    setSearchValue('');
    setSelectedItem(newSelectedItem);
  }

  return {
    suggestions,
    selectedItem,
    setNewSearchValue,
    selectSuggestion,
  };
}

export default useAutoComplete;
