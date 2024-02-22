import { ReactElement, memo, useEffect, useRef } from 'react';
import { Input } from '@components/styledComponents/Input';
import useDebounce from '@utils/useDebounce';
import PurpleButton from '@components/PurpleButton/PurpleButton';
import { VerticalSeparator } from '@components/styledComponents/Separators';
import { useAppDispatch, useAppSelector } from '@hooks/reduxHooks';
import { setSearchValue } from '@store/slice/searchValueSlice';
import useDefineCharacterPageParams from '@hooks/useDefineCharacterPageParams';
import { addURLToUserHistory } from './addURLToUserHistory';

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
  const debouncedOnChange = useDebounce(onChangeHandler, delay);
  const dispatch = useAppDispatch();
  const searchValue = useAppSelector(state => state.searchValue.searchValue);
  const isAuth = useAppSelector(state => state.auth.auth);
  const navigateToURLWithParams = useDefineCharacterPageParams();

  useEffect(() => {
    if (ref.current) {
      ref.current.value = searchValue;
    }
  }, [searchValue]);

  useEffect(() => {
    if (ref.current && selectedItem.length) {
      ref.current.value = selectedItem;
    }
  }, [selectedItem]);

  function onChangeHandler(): void {
    if (ref.current) {
      setNewSearchValue(ref.current.value);
    }
  }

  function onClickHandler(): void {
    if (ref.current) {
      setNewSearchValue('');
      dispatch(setSearchValue(ref.current.value));
      navigateToURLWithParams('search', ref.current.value);
      if (isAuth) {
        addURLToUserHistory(ref.current.value);
      }
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
        onClickHandler={onClickHandler}
        text={'Search'}
        styles={{ width: '30%' }}
      />
    </>
  );
});

SearchInput.displayName = 'SearchInput';

export default SearchInput;
