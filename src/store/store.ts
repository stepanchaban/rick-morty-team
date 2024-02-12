import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { rickMorthyApi } from '@services/rickMorthyApi';
import { authReducer } from './slice/formSlice';
import sortReducer from '@store/slice/sortSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    [rickMorthyApi.reducerPath]: rickMorthyApi.reducer,
    sort: sortReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(rickMorthyApi.middleware),
});

setupListeners(store.dispatch);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
