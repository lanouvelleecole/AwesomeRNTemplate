/* PLOP_INJECT_IMPORT */
import { SqliteReduxTestPageState } from './TestPageState/TestPageStateGetterSetter';
import { SqliteReduxTestPage } from './TestPage/TestPageGetterSetter';
import { SqliteReduxAppState } from './AppState/AppStateGetterSetter';
import { SqliteReduxGUIState } from './GUIState/GUIStateGetterSetter';
import { SqliteReduxToolbox } from './Toolbox/ToolboxGetterSetter';
import { SqliteReduxToolboxState } from './ToolboxState/ToolboxStateGetterSetter';

export const DatabaseObjects = [
  /* PLOP_INJECT_SQLITE_REDUX_OBJ */
  SqliteReduxTestPageState,
  SqliteReduxTestPage,
  SqliteReduxAppState,
  SqliteReduxToolboxState,
  SqliteReduxToolbox,
  SqliteReduxGUIState,
];

