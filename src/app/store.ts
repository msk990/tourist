import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import selectedImageReducer from './features/timeline/SelectedImageSlice';
// import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    selectedImage: selectedImageReducer
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
