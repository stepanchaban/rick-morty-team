import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { extractQueryParams } from '@utils/extractQueryParams';

const initialState = {
  searchValue: extractQueryParams('search'),
};

const searchValueSlice = createSlice({
  name: 'searchValue',
  initialState: initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },
});

export const { setSearchValue } = searchValueSlice.actions;

export default searchValueSlice.reducer;
