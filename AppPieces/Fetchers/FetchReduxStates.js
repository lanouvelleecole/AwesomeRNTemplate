/* PLOP_INJECT_IMPORT */
import {SqliteReduxWorkListsState} from 'src/reduxState/WorkListsState/WorkListsStateGetterSetter';
import {SqliteReduxWorkLists} from 'src/reduxState/WorkLists/WorkListsGetterSetter';
import {SqliteReduxGUIState} from 'src/reduxState/GUIState/GUIStateGetterSetter';
import {SqliteReduxTestPageState} from 'src/reduxState/TestPageState/TestPageStateGetterSetter';
import {SqliteReduxTestPage} from 'src/reduxState/TestPage/TestPageGetterSetter';
import {SqliteReduxAppState} from 'src/reduxState/AppState/AppStateGetterSetter';

// chargeons les states Redux.
export const FetchReduxStates = async () => {
  /* PLOP_INJECT_REDUX_INIT */

  await SqliteReduxWorkListsState.InitWorkListsState({
    debugMode: true,
  });

  await SqliteReduxWorkListsState.ResetState({
    debugMode: true,
  });

  await SqliteReduxWorkLists.InitWorkLists({
    debugMode: true,
  });

  await SqliteReduxGUIState.InitGUIState({
    debugMode: true,
  });

  await SqliteReduxGUIState.ResetState({
    debugMode: true,
  });

  await SqliteReduxTestPageState.InitTestPageState({
    debugMode: true,
  });

  await SqliteReduxTestPageState.ResetState();

  await SqliteReduxTestPage.InitTestPage({
    debugMode: true,
  });

  /*await SqliteReduxTestPage.ResetState({
		debugMode: true,
	});*/

  await SqliteReduxAppState.InitAppState({
    debugMode: true,
  });

  /*await SqliteReduxAppState.ResetState({
		debugMode: true,
	});*/

  return;
};
