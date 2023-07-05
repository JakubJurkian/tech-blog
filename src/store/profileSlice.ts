import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProfileState {
  name: string;
  email: string;
  avatarUrl: string;
  // Add any additional profile data properties
}

const initialState: ProfileState = {
  name: '',
  email: '',
  avatarUrl: '',
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    updateName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    updateEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    updateAvatar: (state, action: PayloadAction<string>) => {
      state.avatarUrl = action.payload;
    },
  },
});

export const { updateName, updateEmail, updateAvatar } = profileSlice.actions;
export default profileSlice.reducer;