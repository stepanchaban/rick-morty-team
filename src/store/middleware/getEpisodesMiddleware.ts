import {
  Dispatch,
  Middleware,
  MiddlewareAPI,
  UnknownAction,
  createAction,
} from '@reduxjs/toolkit';
import { setEpisodes } from '@store/slice/episodeSlice';
import { Character } from '@projectTypes/Character';

const executeQueryFulfilled = createAction<Character>(
  'rickMorthyApi/executeQuery/fulfilled',
);

const customMiddleware: Middleware = api => next => action => {
  const response = next(action);
  if (executeQueryFulfilled.match(action)) {
    if (action.payload.id) {
      void loadEpisodesData(api, action.payload.episode);
    }
  }
  return response;
};

async function loadEpisodesData(
  api: MiddlewareAPI<Dispatch<UnknownAction>, null>,
  episodes: (RequestInfo | URL)[] | undefined,
): Promise<void> {
  try {
    if (episodes) {
      const episodesPromises = episodes.map((episode: RequestInfo | URL) =>
        fetch(episode).then(response => response.json()),
      );
      const episodesData = await Promise.all(episodesPromises);
      const filtredEpisodes = episodesData.map(episode => ({
        id: episode.id,
        name: episode.name,
        air_date: episode.air_date,
        episode: episode.episode,
      }));
      api.dispatch(setEpisodes(filtredEpisodes));
    }
  } catch (error) {
    console.log(error);
  }
}

export default customMiddleware;
