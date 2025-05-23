import { createSlice } from "@reduxjs/toolkit";

const reducerObject = {};
reducerObject["setActiveMenu"] = (state, action) => action.payload;

const slice = createSlice({
  name: "activeMenu",
  initialState: "home",
  reducers: reducerObject,
});

export const { setActiveMenu } = slice.actions;
export default slice.reducer;
