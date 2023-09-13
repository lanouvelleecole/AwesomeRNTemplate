import { useEffect } from "react";
import { Constants } from "src/constants/Constants.js";
import { SqliteReduxGUIState } from "src/reduxState/GUIState/GUIStateGetterSetter.js";
import { extractDataFromQuestions } from "./DataListStyles/pieces/extractDataFromQuestions.js";

/**
 * @returns rien
 *
 * Ceci nous permet de pouvoir faire
 * des choses avant/après que le component soit contruit/détruit
 */
export const onComponentLifeAndDeath = ({ hardReset, persistenceID, questions, setGUIStateReady }) => {
  useEffect(() => {
    if (persistenceID != null) {
      AddDefaultPersistentAnswers(
        persistenceID,
        questions,
        setGUIStateReady
      );
    } else {
      AddDefaultNonPersistentAnswers(
        persistenceID,
        questions,
        setGUIStateReady
      );
    }

    return () => {
      // Anything in here is fired on component unmount.
      SqliteReduxGUIState.ResetState(hardReset);
    };
  }, []);
};

function AddDefaultNonPersistentAnswers(persistenceID, questions, setGUIStateReady) {
  // Anything in here is fired on component mount.



  const GUIState = SqliteReduxGUIState.GetGUIState()?.at(0);
  const answersPersistentStr = GUIState?.answersPersistent

  const initialAnswers = extractDataFromQuestions(questions);

  SqliteReduxGUIState.UpdateSpecificRowsFromDB({
    row: {
      ...GUIState,
      answers: JSON.stringify(initialAnswers),
      answersPersistent: answersPersistentStr,
      showGUI: Constants.true,
    },
    rowName: "uniqueId",
    rowValue: "GUIState",
    onSuccess: (data) => {
      setGUIStateReady(true);
    },
    onError: (e) => { },
  });
}

function AddDefaultPersistentAnswers(persistenceID, questions, setGUIStateReady) {


  // Anything in here is fired on component mount.
  const initialAnswers = extractDataFromQuestions(questions);
  const GUIState = SqliteReduxGUIState.GetGUIState()[0];
  let answersPersistentStr = GUIState.answersPersistent

  if (answersPersistentStr?.length > 0) {
    const answersPersistent = JSON.parse(answersPersistentStr)

    const answerPersistent = answersPersistent[persistenceID]

    if (!answerPersistent) {
      answersPersistent[persistenceID] = initialAnswers

      answersPersistentStr = JSON.stringify(answersPersistent)
    }
  }


  SqliteReduxGUIState.UpdateSpecificRowsFromDB({
    row: {
      ...GUIState,
      answersPersistent: answersPersistentStr,
      showGUI: Constants.true,
    },
    rowName: "uniqueId",
    rowValue: "GUIState",
    onSuccess: (data) => {
      setGUIStateReady(true);
    },
    onError: (e) => { },
  });
}

