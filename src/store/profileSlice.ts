import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProfileState {
  name: string;
  email: string;
  // Add any additional profile data properties
}

const initialState: ProfileState = {
  name: '',
  email: '',
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
  },
});

export const { updateName, updateEmail } = profileSlice.actions;
export default profileSlice.reducer;