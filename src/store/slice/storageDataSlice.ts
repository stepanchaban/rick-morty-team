import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Character } from '@projectTypes/Character';

type DataState = {
  data: Character[];
};

const initialState: DataState = {
  data: [],
};

const storageDataSlice = createSlice({
  name: 'storage',
  initialState: initialState,
  reducers: {
    setData: (state, action: PayloadAction<Character[]>) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = storageDataSlice.actions;

export default storageDataSlice.reducer;
