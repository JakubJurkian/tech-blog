import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { getAuth, createUserWithEmailAndPassword, UserCredential, User } from 'firebase/auth';

interface AuthState {
  isLoggedIn: boolean;
  user: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  isLoggedIn: false,
  user: null,
  loading: false,
  error: null,
};

export const createUser = createAsyncThunk<
  UserCredential,
  { email: string; password: string },
  { rejectValue: string }
>('auth/createUser', async ({ email, password }, { rejectWithValue }) => {
  try {
    const auth = getAuth();
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential;
  } catch (error: any) {
    const errorMessage = error.message;
    return rejectWithValue(errorMessage);
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
      })
      .addCase(createUser.rejected, (state, action: PayloadAction<string | undefined, string, { arg: { email: string; password: string }; requestId: string; requestStatus: 'rejected'; aborted: boolean; condition: boolean }>) => {
        state.loading = false;
        state.error = action.payload || 'Error occurred during user creation.';
      });
  },
});

export const { actions: authActions, reducer: authReducer } = authSlice;

export default authSlice.reducer;
