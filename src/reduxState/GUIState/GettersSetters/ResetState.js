import { defaultValues } from "../DatabaseInfo";
import { AddRowToDatabase } from "./AddRowToDatabase";
import { UpdateSpecificRowsFromDB } from "./UpdateSpecificRowsFromDB";
import { GetGUIState } from "./GetGUIState";

/**
 * remet le state à zéro
 */
export const ResetState = async () => {
  const rows = GetGUIState();

  // si le state camera n'existe pas déja....
  if (rows.length == 0) {
    // ajoute les option défaut
    await AddRowToDatabase({
      row: defaultValues,
    });
  }

  // sinon remet le state a 0
  else {
    await UpdateSpecificRowsFromDB({
      row: defaultValues,
      rowName: "uniqueId",
      rowValue: "GUIState",
      onSuccess: (data) => {
        //console.log(`state de GUIState reset avec succès`);
      },
    });
  }
};
