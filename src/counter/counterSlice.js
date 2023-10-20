import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  histArr: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      console.log(action.payload.amount);
      state.count += parseInt(action.payload.amount);
    },
    decrement: (state) => {
      state.count -= 1;
    },

    reset: (state) => {
      state.count = 0;
      state.histArr = [];
    },
    history: (state) => {
      state.histArr.push(state.count);
    },
  },
});

export const { increment, decrement, reset, history } = counterSlice.actions;

export default counterSlice.reducer;
