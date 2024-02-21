import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Card } from '@projectTypes/Card';
import { rickMorthyApi } from '@services/rickMorthyApi';

type DataState = {
  data: Card[];
};

const initialState: DataState = {
  data: [],
};

const storageDataSlice = createSlice({
  name: 'storage',
  initialState: initialState,
  reducers: {
    setData: (state, action: PayloadAction<Card[]>) => {
      state.data = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addMatcher(
      rickMorthyApi.endpoints.getCharacters.matchFulfilled,
      (state, action) => {
        state.data = action.payload;
      },
    );
    builder.addMatcher(
      rickMorthyApi.endpoints.getFilteredCharacters.matchFulfilled,
      (state, action) => {
        state.data = action.payload;
      },
    );
  },
});

export const { setData } = storageDataSlice.actions;

export default storageDataSlice.reducer;
