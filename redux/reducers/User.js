import {createSlice} from '@reduxjs/toolkit';
import React from 'react';

const initialState = {
  firstName: 'Nata',
  lastName: 'Vacheisvili',
  userId: 1,
  proFileImage:
    'https://cdn.dribbble.com/users/1577045/screenshots/4914645/media/028d394ffb00cb7a4b2ef9915a384fd9.png?compress=1&resize=400x300&vertical=top',
};
const User = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    updateFirstName: (state, action) => {
      state.firstName = action.payload.firstName;
    },
    resetInitialState: (state, action) => {
      return initialState;
    },
  },
});
export const {updateFirstName, resetInitialState} = User.actions;

export default User.reducer;
