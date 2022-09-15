import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import todosReducer from '../features/todo/TodoSlice';
import weatherReducer from '../features/weather/WeatherSlice';
import SpacexReducer from '../features/spacex/SpacexSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todosReducer: todosReducer,
    weatherReducer:weatherReducer,
    SpacexReducer: SpacexReducer
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
