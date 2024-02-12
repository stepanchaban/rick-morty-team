import { ReactElement, memo, useRef } from 'react';
import { Input } from '@components/styledComponents/Input';
import useDebounce from '@utils/useDebounce';

const delay = 2000;

type Props = {
  setNewSearchValue: (inputValue: string) => void;
};

const SearchInput = memo(function ({ setNewSearchValue }: Props): ReactElement {
  const ref = useRef<HTMLInputElement | null>(null);
  const debouncedOnChange = useDebounce(onChange, delay);

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
});

SearchInput.displayName = 'SearchInput';

export default SearchInput;
