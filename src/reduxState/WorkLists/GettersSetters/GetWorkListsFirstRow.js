import { store } from "src/reduxState/reduxStore";

/**
 *
 * permet d'obtenir le premier row stocké actuellement dans Redux.
 *
 * Mais l'UI utilisant cette fonction restera figé quand le state redux change. !!!! ATTENTION
 *
 */

export function GetWorkListsFirstRow() {
  const allWorkLists = store.getState().WorkLists.allRows;

  if (allWorkLists != null && allWorkLists.length > 0) {
    return allWorkLists[0];
  } else {
    return allWorkLists;
  }
}
