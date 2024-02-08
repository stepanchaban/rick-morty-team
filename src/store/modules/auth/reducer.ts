import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState, RootState } from '../../types';

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

export default authReducer;
