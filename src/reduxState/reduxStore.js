/* PLOP_INJECT_IMPORT */
import TestPageStateReducer from './TestPageState/TestPageStateSlice';
import TestPageReducer from './TestPage/TestPageSlice';
import AppStateReducer from './AppState/AppStateSlice';
import ToolboxStateReducer from "./ToolboxState/ToolboxStateSlice";
import ToolboxReducer from "./Toolbox/ToolboxSlice";
import GUIStateReducer from "./GUIState/GUIStateSlice";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    /* PLOP_INJECT_REDUX_REDUCER */
    TestPageState: TestPageStateReducer,
    TestPage: TestPageReducer,
    AppState: AppStateReducer,
    ToolboxState: ToolboxStateReducer,
    Toolbox: ToolboxReducer,
    GUIState: GUIStateReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export { store };
