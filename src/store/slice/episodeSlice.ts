import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// import { Character } from '@projectTypes/Character';
type EpisodeCard = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
};

type dataState = {
  data: EpisodeCard[];
};
const initialState: dataState = {
  data: [],
};

const episodeSlice = createSlice({
  name: 'episode',
  initialState: initialState,
  reducers: {
    setEpisodes: (state, action: PayloadAction<EpisodeCard[]>) => {
      state.data = action.payload;
    },
  },
});

export const { setEpisodes } = episodeSlice.actions;

export default episodeSlice.reducer;
