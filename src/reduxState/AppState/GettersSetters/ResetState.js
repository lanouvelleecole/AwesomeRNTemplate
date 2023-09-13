import { defaultValues } from "../DatabaseInfo";
import { AddRowToDatabase } from "./AddRowToDatabase";
import { GetAppState } from "./GetAppState";
import { UpdateSpecificRowsFromDB } from "./UpdateSpecificRowsFromDB";

/**
 * remet le state par défaut, si déja existant.
 *
 * ajoute le state par défaut, si pas de state existant
 */
export const ResetState = async () => {
  const rows = GetAppState();

  // si le state n'existe pas déja....
  if (rows.length == 0) {
    // ajoute le state par défaut
    await AddRowToDatabase({
      row: defaultValues,
    });
  }

  // sinon on fait rien....
  // ou alors si tu as un truc spécifique
  // à faire, alors fais le ;-)
  else {
    //
  }
};
