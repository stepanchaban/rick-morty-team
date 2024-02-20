import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { rickMorthyApi } from '@services/rickMorthyApi';
import { authReducer } from './slice/formSlice';
import storageDataReducer from '@store/slice/storageDataSlice';
import customMiddleware from './middleware/getEpisodesMiddleware';
import episodeReducer from '@store/slice/episodeSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    [rickMorthyApi.reducerPath]: rickMorthyApi.reducer,
    storageData: storageDataReducer,
    episode: episodeReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(rickMorthyApi.middleware, customMiddleware),
});

setupListeners(store.dispatch);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
