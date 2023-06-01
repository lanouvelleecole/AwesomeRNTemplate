import { useEffect } from "react";
import { Constants } from "src/constants/Constants.js";
import { defaultValues } from "src/reduxState/GUIState/DatabaseInfo.js";
import { SqliteReduxGUIState } from "src/reduxState/GUIState/GUIStateGetterSetter.js";
import { extractDataFromQuestions } from "./DataListStyles/pieces/extractDataFromQuestions.js";

/**
 * @returns rien
 *
 * Ceci nous permet de pouvoir faire
 * des choses avant/après que le component soit contruit/détruit
 */
export const onComponentLifeAndDeath = ({ questions, setGUIStateReady }) => {
  useEffect(() => {
    // Anything in here is fired on component mount.
    const initialAnswers = extractDataFromQuestions(questions);

    SqliteReduxGUIState.UpdateSpecificRowsFromDB({
      row: {
        ...defaultValues,
        answers: JSON.stringify(initialAnswers),
        showGUI: Constants.true,
      },
      rowName: "uniqueId",
      rowValue: "GUIState",
      onSuccess: (data) => {
        setGUIStateReady(true);
      },
      onError: (e) => {},
    });

    //setTimeout(() => setGUIStateReady(true), 500);

    //console.log(`GUI born`);

    return () => {
      // Anything in here is fired on component unmount.
      SqliteReduxGUIState.ResetState();

      //console.log(`GUI dead`);
    };
  }, []);
};
