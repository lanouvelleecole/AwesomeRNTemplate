/* PLOP_INJECT_IMPORT */
import {
  SqliteReduxAppState
} from "src/reduxState/AppState/AppStateGetterSetter";

// chargeons les states Redux.
export const FetchReduxStates = async () => {
  /* PLOP_INJECT_REDUX_INIT */

      
	await SqliteReduxAppState.InitAppState({
		debugMode: true,
	});


	/*await SqliteReduxAppState.ResetState({
		debugMode: true,
	});*/



  return;
};
