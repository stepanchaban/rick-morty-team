import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { rickMorthyApi } from '@services/rickMorthyApi';
import { authReducer } from './slice/formSlice';
import manageDataReducer from '@store/slice/manageDataSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    [rickMorthyApi.reducerPath]: rickMorthyApi.reducer,
    manageData: manageDataReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(rickMorthyApi.middleware),
});

setupListeners(store.dispatch);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
