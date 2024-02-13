import { useEffect, useState } from 'react';

type Props<Source> = {
  filterFn: (searchValue: string, source: Source) => string[];
  source: Source;
};

function useAutoComplete<Source>({ filterFn, source }: Props<Source>): {
  suggestions: string[];
  selectedItem: string;
  setNewSearchValue: (newSearchInput: string) => void;
  selectSuggestion: (newSelectedItem: string) => void;
} {
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
