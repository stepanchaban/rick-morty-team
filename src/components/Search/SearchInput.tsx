import { ReactElement, memo, useEffect, useRef } from 'react';
import { Input } from '@components/styledComponents/Input';
import useDebounce from '@utils/useDebounce';
import PurpleButton from '@components/PurpleButton/PurpleButton';
import { VerticalSeparator } from '@components/styledComponents/Separators';
import { useAppDispatch } from '@hooks/reduxHooks';
import { setSearchValue } from '@store/slice/searchValueSlice';

const delay = 1000;

type Props = {
  setNewSearchValue: (inputValue: string) => void;
  selectedItem: string;
};

const SearchInput = memo(function ({
  setNewSearchValue,
  selectedItem,
}: Props): ReactElement {
  const ref = useRef<HTMLInputElement | null>(null);
  const debouncedOnChange = useDebounce(onChange, delay);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (ref.current && selectedItem.length) {
      ref.current.value = selectedItem;
    }
  }, [selectedItem]);

  function onChange(): void {
    if (ref.current) {
      setNewSearchValue(ref.current.value);
    }
  }

  function onClick(): void {
    if (ref.current) {
      setNewSearchValue('');
      dispatch(setSearchValue(ref.current.value));
      ref.current.value = '';
    }
  }

  return (
    <>
      <Input
        onChange={debouncedOnChange}
        ref={ref}
        type="text"
        placeholder="Type something..."
      />
      <VerticalSeparator width={'10px'} />
      <PurpleButton
        onClickHandler={onClick}
        text={'Search'}
        styles={{ width: '30%' }}
      />
    </>
  );
});

SearchInput.displayName = 'SearchInput';

export default SearchInput;
