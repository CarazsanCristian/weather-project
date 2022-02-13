import { configureStore } from '@reduxjs/toolkit';
import searchInterfaceReducer from '../features/weather/searchInterface/storeFiles/searchInterfaceSlice'

export const store = configureStore({
  reducer: {
    searchInterface: searchInterfaceReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
