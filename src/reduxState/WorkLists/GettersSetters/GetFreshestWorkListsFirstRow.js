


import { useSelector } from "react-redux";

/**
 *
 * permet d'obtenir le plus frais premier row stocké dans Redux.
 *
 * Meme après que le state redux a changé ailleurs.
 * Cela permet d'afficher dans l'UI la toute dernère valeur du state Redux.
 *
 * !!! IMPORTANT: Ce service n'est pas disponible en dehors du scope d'un component.
 * Si tu est en dehors de la zone d'influence d'un component,
 * il y aura un message d'erreur semblable à celui ci:
 *
 * Invalid hook call. Hooks can only be called inside of the body of a function component.
 *
 * Cela signifie qu'il faut utiliser l'autre fonction nommée
 *
 * GetWorkListsFirstRow
 *
 * qui fonctionne en dehors de la zone d'influence du component,
 * mais ne rafraichira pas l'UI quand le state redux change.
 *
 */

export function GetFreshestWorkListsFirstRow() {
  const allWorkLists = useSelector((state) => state.WorkLists.allRows);

  if (allWorkLists != null && allWorkLists.length > 0) {
    return allWorkLists[0];
  } else {
    return allWorkLists;
  }
}
