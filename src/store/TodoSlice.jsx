
import { createSlice } from '@reduxjs/toolkit';

const TodoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({ id: Date.now(), text: action.payload, completed: false });
    },
    toggleTodo: (state, action) => {
      const todo = state.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
        const { id, text } = action.payload;
        const todo = state.find(todo => todo.id === id);
        if (todo) {
          todo.text = text;
        }
      },
  },
});

export default TodoSlice.reducer;
export const { addTodo, toggleTodo, deleteTodo,editTodo } = TodoSlice.actions;