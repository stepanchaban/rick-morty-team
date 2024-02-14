import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Character } from '@projectTypes/Character';

type DataState = {
  data: Character[];
};

const initialState: DataState = {
  data: [],
};

const manageDataSlice = createSlice({
  name: 'manageData',
  initialState: initialState,
  reducers: {
    setData: (state, action: PayloadAction<Character[]>) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = manageDataSlice.actions;

export default manageDataSlice.reducer;
