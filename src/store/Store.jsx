
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../store/TodoSlice';

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});
