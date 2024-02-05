import { store } from './index';

export type AppDispatch = typeof store.dispatch;

export interface AuthState {
  auth: boolean;
}

export type RootState = ReturnType<typeof store.getState>;
