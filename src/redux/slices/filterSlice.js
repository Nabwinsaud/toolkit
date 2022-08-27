import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   name: "John doe",
//   age: 40,
//   address: "CF US",
// };

const initialState = {
  filter: "",
  // number: 10,
};
export const filterSlice = createSlice({
  name: "productFilter", // required field
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;
