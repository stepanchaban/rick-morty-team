import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  auth: boolean;
}

const initialState: AuthState = {
  auth: localStorage.getItem('isAuth') === 'true',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsAuth(state, action: PayloadAction<boolean>) {
      state.auth = action.payload;
    },
  },
});

export const { setIsAuth } = authSlice.actions;

export const selectAuth = (state: RootState): AuthState => state.auth;

const authReducer = authSlice.reducer;

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
