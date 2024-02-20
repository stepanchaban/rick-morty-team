import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  sortType: '',
  firstGroup: '',
};

const sortSlice = createSlice({
  name: 'sort',
  initialState: initialState,
  reducers: {
    setSortType: (state, action: PayloadAction<string>) => {
      state.sortType = action.payload;
    },
    setFirstGroup: (state, action: PayloadAction<string>) => {
      state.firstGroup = action.payload;
    },
  },
});

export const { setSortType, setFirstGroup } = sortSlice.actions;

export default sortSlice.reducer;
