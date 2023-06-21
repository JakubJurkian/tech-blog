import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import postsSlice from './postsSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postsSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
