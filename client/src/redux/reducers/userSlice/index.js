import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    token:""

};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changetoken: (state, actions) => {
      state.token = actions.payload.token
      }
  }
  
});

export const { token} = UserSlice.actions;
export default UserSlice.reducer;
