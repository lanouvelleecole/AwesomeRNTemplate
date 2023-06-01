/* PLOP_INJECT_IMPORT */

// Getters et Setters
import { GetFreshestWorkLists } from "./GettersSetters/GetFreshestWorkLists";
import { GetWorkLists } from "./GettersSetters/GetWorkLists";
import { GetFreshestWorkListsFromGroup } from "./GettersSetters/GetFreshestWorkListsFromGroup";
import { GetWorkListsFromGroup } from "./GettersSetters/GetWorkListsFromGroup";
import { GetFreshestWorkListsFirstRow } from "./GettersSetters/GetFreshestWorkListsFirstRow";
import { GetWorkListsFirstRow } from "./GettersSetters/GetWorkListsFirstRow";
import { AddRowToDatabase } from "./GettersSetters/AddRowToDatabase";
import { DeleteSpecificRowsFromDB } from "./GettersSetters/DeleteSpecificRowsFromDB";
import { GetAllRowsFromDB } from "./GettersSetters/GetAllRowsFromDB";
import { InitWorkLists } from "./GettersSetters/InitWorkLists";
import { GetSpecificRowsFromDB } from "./GettersSetters/GetSpecificRowsFromDB";
import { UpdateSpecificRowsFromDB } from "./GettersSetters/UpdateSpecificRowsFromDB";
import { ResetState } from "./GettersSetters/ResetState";
import { GetItemByUniqueID } from "./GettersSetters/GetItemByUniqueID";
import { GetFreshestItemByUniqueID } from "./GettersSetters/GetFreshestItemByUniqueID";
import { WorkListExists } from "./GettersSetters/WorkListExists";

/**
 * Ceci nous permet un accès CRUD à base données,
 *
 * et aussi du refresh UI
 *
 * (Via SQLITE et Redux)
 */
export const SqliteReduxWorkLists = {
  // Getters.
  //
  // Récupèrent des données venant d'une base de données,
  // et ordonne les en ordre ascendant, selon row.itemIndex.
  //
  // (Mention spéciale pour GetAllRowsFromDB et GetSpecificRowsFromDB,
  // qui, en plus de récupérer des données venant de la DB, sont chargés aussi
  // de répartir les données (rows) dans redux)
  GetFreshestWorkLists,
  GetWorkLists,
  GetFreshestWorkListsFromGroup,
  GetWorkListsFromGroup,
  GetFreshestWorkListsFirstRow,
  GetWorkListsFirstRow,
  GetItemByUniqueID,
  GetFreshestItemByUniqueID,

  // permet de savoir un WorkList existe
  // (via uniqueId AKA workListId)
  WorkListExists,

  // ze spéciale ones
  GetAllRowsFromDB,
  GetSpecificRowsFromDB,

  // Setters.
  //
  // (Ajoute/Modifie/Supprime des données venant d'une base de données)
  AddRowToDatabase,
  DeleteSpecificRowsFromDB,
  InitWorkLists,
  UpdateSpecificRowsFromDB,
  ResetState,
};
