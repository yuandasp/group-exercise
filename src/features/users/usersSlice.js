import { createSlice } from "@reduxjs/toolkit";
import Axios from "axios";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {
    setUserList: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { setUserList } = usersSlice.actions;
export default usersSlice.reducer;

export function fetchUsersData() {
  return async (dispatch) => {
    let response = await Axios.get("http://localhost:2000/users");
    dispatch(setUserList(response.data));
  };
}

export function registerUser(data) {
  return async (dispatch) => {
    let response = await Axios.post("http://localhost:2000/users", data);
    dispatch(fetchUsersData());
  };
}
