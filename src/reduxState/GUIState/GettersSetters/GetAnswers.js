import { GetGUIStateFirstRow } from "./GetGUIStateFirstRow";

/**
 *
 * @returns les réponses aux questions.
 * stockés dans le state GUIState,
 */
export const GetAnswers = (persistenceID) => {


  if (persistenceID != null) {
    const GUIState = GetGUIStateFirstRow();
    const answersPersistentString = GUIState.answersPersistent;

    //console.log(`Answers as string: ${answersString}`);

    const answersPersistent = JSON.parse(answersPersistentString);

    return answersPersistent[persistenceID] ?? {}
  } else {
    const GUIState = GetGUIStateFirstRow();
    const answersString = GUIState.answers;

    //console.log(`Answers as string: ${answersString}`);

    return JSON.parse(answersString);
  }
};
