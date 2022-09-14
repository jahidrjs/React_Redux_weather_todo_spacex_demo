import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import todosReducer from '../features/todo/TodoSlice';
import weatherReducer from '../features/weather/WeatherSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todosReducer: todosReducer,
    weatherReducer:weatherReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
