import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { rickMorthyApi } from '@services/rickMorthyApi';
import { authReducer } from './slice/formSlice';
import searchValueReducer from './slice/searchValueSlice';
import storageDataReducer from '@store/slice/storageDataSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    [rickMorthyApi.reducerPath]: rickMorthyApi.reducer,
    storageData: storageDataReducer,
    searchValue: searchValueReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(rickMorthyApi.middleware),
});

setupListeners(store.dispatch);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
