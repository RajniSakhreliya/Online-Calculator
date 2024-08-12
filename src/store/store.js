import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './Slice'

export const store = configureStore({
  reducer: {
    Data: dataReducer
  },
});

