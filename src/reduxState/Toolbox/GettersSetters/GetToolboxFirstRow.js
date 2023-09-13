import { store } from "src/reduxState/reduxStore";

/**
 *
 * permet d'obtenir le premier row stocké actuellement dans Redux.
 *
 * Mais l'UI utilisant cette fonction restera figé quand le state redux change. !!!! ATTENTION
 *
 */

export function GetToolboxFirstRow() {
  const allToolbox = store.getState().Toolbox.allRows;

  if (allToolbox != null && allToolbox.length > 0) {
    return allToolbox[0];
  } else {
    return allToolbox;
  }
}
