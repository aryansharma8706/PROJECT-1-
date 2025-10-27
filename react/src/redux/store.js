import { configureStore } from '@reduxjs/toolkit';
import CounterReducer from './slices/CounterSlice';
import TodoReducer from './slices/TodoSlice'
const store = configureStore({
  reducer: {
    count: CounterReducer,
    todos : TodoReducer
  },
});
export default store