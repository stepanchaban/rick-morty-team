import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Character = {
  id: number;
  created: string;
  episode?: string[];
  gender: string;
  image: string;
  location: {
    name: string;
    url?: string;
  };
  name: string;
  origin?: {
    name: string;
    url: string;
  };
  species: string;
  status: string;
  type: string;
  url?: string;
};

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
    setRawData: (state, action: PayloadAction<Character[]>) => {
      state.data = action.payload;
    },
    setSearchData: (state, action: PayloadAction<Character[]>) => {
      state.data = action.payload;
    },
    setSortDataByAlphabet: (state, action: PayloadAction<Character[]>) => {
      state.data = action.payload;
    },
    setSortDataGenderFemaleFirst: (
      state,
      action: PayloadAction<Character[]>,
    ) => {
      state.data = action.payload;
    },
    setSortDataGenderMaleFirst: (state, action: PayloadAction<Character[]>) => {
      state.data = action.payload;
    },
    setSortDataStatusAliveFirst: (
      state,
      action: PayloadAction<Character[]>,
    ) => {
      state.data = action.payload;
    },
    setSortDataStatusDeadFirst: (state, action: PayloadAction<Character[]>) => {
      state.data = action.payload;
    },
  },
});

export const {
  setRawData,
  setSearchData,
  setSortDataByAlphabet,
  setSortDataGenderFemaleFirst,
  setSortDataGenderMaleFirst,
  setSortDataStatusAliveFirst,
  setSortDataStatusDeadFirst,
} = manageDataSlice.actions;

export default manageDataSlice.reducer;
