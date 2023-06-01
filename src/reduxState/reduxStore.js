

/* PLOP_INJECT_IMPORT */
import GUIStateReducer from './GUIState/GUIStateSlice';
import TestPageStateReducer from './TestPageState/TestPageStateSlice';
import TestPageReducer from './TestPage/TestPageSlice';
import AppStateReducer from './AppState/AppStateSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    /* PLOP_INJECT_REDUX_REDUCER */
		GUIState: GUIStateReducer,
		TestPageState: TestPageStateReducer,
		TestPage: TestPageReducer,
		AppState: AppStateReducer,
  },
});

export {
  store
};

