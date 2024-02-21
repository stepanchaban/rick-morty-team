import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { rickMorthyApi } from '@services/rickMorthyApi';
import { authReducer } from './slice/formSlice';
import searchValueReducer from './slice/searchValueSlice';
import storageDataReducer from '@store/slice/storageDataSlice';
import sortSliceReducer from './slice/sortSlice';
import getEpisodesMiddleware from './middleware/getEpisodesMiddleware';
import episodeReducer from '@store/slice/episodeSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    [rickMorthyApi.reducerPath]: rickMorthyApi.reducer,
    storageData: storageDataReducer,
    searchValue: searchValueReducer,
    sort: sortSliceReducer,
    episode: episodeReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      rickMorthyApi.middleware,
      getEpisodesMiddleware,
    ),
});

setupListeners(store.dispatch);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
