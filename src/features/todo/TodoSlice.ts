const { createSlice } = require('@reduxjs/toolkit');
const { v4: uuidv4 } = require('uuid');
import { todoInterface } from './todoInterface';

const initialTodos = {
  todos:[
    {
      id: uuidv4(),
      title: 'Coding Time',
      description: 'My Daily Task Everyday Routine.',
    },
  {
    id: uuidv4(),
    title: 'Play',
    description: 'Every Friday will Play at 5:30pm',
  },
  {
    id: uuidv4(),
    title: 'Marketing',
    description: 'Every Satday will go market',
  },
  {
    id: uuidv4(),
    title: 'Reading',
    description: 'Today I will read Funny Book',
  },
  {
    id: uuidv4(),
    title: 'Travel',
    description: 'Next weekend will go to the Zoo',
  },
  {
    id: uuidv4(),
    title: 'Listening',
    description: 'Today 1 hour will listen Soft songs',
  },
],
};

export const todoSlice = createSlice({
  name: 'todos',
  initialState: initialTodos,
  reducers: {
    showTodos: (state: todoInterface) => state,
    addTodo: (state: any, action: any) => {
      state.todos.push(action.payload);
    },
    updateTodo: (state: any, action: any) => {
      const { id, title, description } = action.payload;
      const isTodoExist = state.todos.filter((todo: any) => todo.id === id);
      if (isTodoExist) {
        isTodoExist[0].title = title;
        isTodoExist[0].description = description;
      }
    },
    deleteTodo: (state: any, action: any) => {
      const id = action.payload;
      state.todos = state.todos.filter((todo: todoInterface) => todo.id !== id);
    },
  },
});

export const { showTodos, addTodo, deleteTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
