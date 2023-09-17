import {createSlice} from '@reduxjs/toolkit';
import React from 'react';

const initialState = {
  firstName: 'Nata',
  lastName: 'Vacheisvili',
  userId: 1,
};
const User = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    updateFirstName: (state, action) => {
      state.firstName = action.payload.firstName;
    },
  },
});
export const {updateFirstName} = User.actions;

export default User.reducer;
