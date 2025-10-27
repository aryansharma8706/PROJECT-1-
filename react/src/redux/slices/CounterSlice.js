import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    increment: (state, action) => {
      state.count += 1;
    }, //Note in the toolkit we can direclty update the state variables because internally it uses immer library https://immerjs.github.io/immer/
    decrement: (state, action) => {
      return { count: state.count - 1 };
    },
  },
});

//export reducer property from counterslice
export default counterSlice.reducer;
export const { increment, decrement } = counterSlice.actions;

