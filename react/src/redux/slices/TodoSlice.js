import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  todos: null,
  error: null,
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    pending: (state) => {
      state.loading = true;
    },
    success: (state, action) => {
      console.log(action.payload);
      state.loading = false;
      state.todos = action.payload;
    },
  },
});
export default todoSlice.reducer;
export const { pending, success } = todoSlice.actions;

//NOTE REDUX TOOLKIT TERMINOLOGY :
//NOTE SLICE => create a slice file for each individual functionality suppose you are building a chat app then you have a file for chatSlice => which manage the data realted to the chats you can directly use data from this file and updates the data here also based on the interaction  , you can also a user slice from where you can use the user data and other updation logic.

//reducers function => we can create multiple reducers function in the slice which performs the state updation logic

//actions => in slice actions is automatically created we have to just export it from slicename.actions

//store => all the slice reducer are import here and configure in the store in the configurestore({
// reducer : reducename})

//useDispatch => this hook is used to dispatch the action function like increment and decrement for counter application , store then navigate the actions to the right reducer

//useSelector => this hook is used to consume the state variables we have define in the each slice , it gives the access of the global state in the store from where we can directly access the state varialbe we required to used in the app
