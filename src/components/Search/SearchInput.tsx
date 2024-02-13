import { ReactElement, memo, useEffect, useRef } from 'react';
import { Input } from '@components/styledComponents/Input';
import useAutoComplete from './useAutoComplete';
import useDebounce from '@utils/useDebounce';

const delay = 1000;

type Props = {
  setNewSearchValue: (inputValue: string) => void;
  selectedItem: string;
};

const SearchInput = function ({
  setNewSearchValue,
  selectedItem,
}: Props): ReactElement {
  const ref = useRef<HTMLInputElement | null>(null);
  const debouncedOnChange = useDebounce(onChange, delay);

  useEffect(() => {
    if (ref.current) {
      ref.current.value = selectedItem;
    }
  }, [selectedItem]);

  function onChange(): void {
    if (!ref.current) {
      return;
    }
    setNewSearchValue(ref.current?.value);
  }

  return (
    <Input
      onChange={debouncedOnChange}
      ref={ref}
      type="text"
      placeholder="Type something..."
    />
  );
};

// SearchInput.displayName = 'SearchInput';

export default SearchInput;
