import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type initialStateType = {
  firstGroup: string;
};

export const initialState: initialStateType = {
  firstGroup: '',
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
