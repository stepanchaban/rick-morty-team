import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { extractQueryParams } from '@utils/extractQueryParams';

type initialStateType = {
  firstGroup: string;
};

export const initialState: initialStateType = {
  firstGroup: extractQueryParams('sort'),
};

const sortSlice = createSlice({
  name: 'sort',
  initialState: initialState,
  reducers: {
    setFirstGroup: (state, action: PayloadAction<string>) => {
      state.firstGroup = action.payload;
    },
  },
});

export const { setFirstGroup } = sortSlice.actions;

export default sortSlice.reducer;
