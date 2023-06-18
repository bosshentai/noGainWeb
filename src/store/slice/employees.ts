import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const slice = createSlice({
  name: "employees",
  initialState,
  reducers: {},
});

export default slice.reducer;
