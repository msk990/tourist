import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import selectedIngredientReducer from './features/menu-item/SelectedIngredientSlice';
import selectedImageReducer from './features/timeline/SelectedImageSlice';
// import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    selectedImage: selectedImageReducer,
    selectedIngredient: selectedIngredientReducer
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
