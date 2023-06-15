import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    token: ""

};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserDetails: (state, actions) => {
      return {
        ...state,
        token: actions.payload.token,
        id: actions.payload.id,
        role: actions.payload.role,
        email: actions.payload.email,
      }
      },
      resetUser: (state, actions) => {
        return {...initialState}
  }
}
  
});

export const {setUserDetails,resetUser} = UserSlice.actions;
export default UserSlice.reducer;
