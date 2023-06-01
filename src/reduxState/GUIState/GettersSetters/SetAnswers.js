import { Constants } from "src/constants/Constants";
import { GetGUIStateFirstRow } from "./GetGUIStateFirstRow";
import { UpdateSpecificRowsFromDB } from "./UpdateSpecificRowsFromDB";

/**
 * @param {*} answers
 *
 * @returns Stocke les réponses, dans le state SqliteRedux, sous forme de string.
 * avec JSON.stringify()
 */
export const SetAnswers = ({ answers, onSuccess, onError }) => {
  const GUIState = GetGUIStateFirstRow();

  const newRow = {
    ...GUIState,
    answers: JSON.stringify(answers),
    showGUI: Constants.true,
  };

  //console.log(`Newest row + answers: ${JSON.stringify(newRow)}`);

  UpdateSpecificRowsFromDB({
    row: newRow,
    rowName: "uniqueId",
    rowValue: "GUIState",
    onSuccess: onSuccess,
    onError: onError,
  });
};
