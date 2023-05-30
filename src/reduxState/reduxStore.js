

/* PLOP_INJECT_IMPORT */
import AppStateReducer from './AppState/AppStateSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    /* PLOP_INJECT_REDUX_REDUCER */
		AppState: AppStateReducer,
  },
});

export {
  store
};

