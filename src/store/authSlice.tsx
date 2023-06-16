import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'firebase/auth';

import { auth } from '../firebase';

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authLoading: (state) => {
      state.loading = true;
    },
    authSuccess: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    },
    authFailure: (state, action: PayloadAction<string>) => {
      state.user = null;
      state.loading = false;
      state.error = action.payload;
    },
    authLogout: (state) => {
      state.user = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const { authLoading, authSuccess, authFailure, authLogout } =
  authSlice.actions;

export default authSlice.reducer;

export const loginUser = (
    email: string,
    password: string
  ): AppThunk => async (dispatch) => {
    try {
      dispatch(authLoading());
      const userCredential = await auth().signInWithEmailAndPassword(
        email,
        password
      );
      dispatch(authSuccess(userCredential.user!));
    } catch (error) {
      dispatch(authFailure(error.message));
    }
  };
  
  export const logoutUser = (): AppThunk => async (dispatch) => {
    try {
      dispatch(authLoading());
      await auth().signOut();
      dispatch(authLogout());
    } catch (error) {
      dispatch(authFailure(error.message));
    }
  };
