import { GetGUIStateFirstRow } from "./GetGUIStateFirstRow";

/**
 *
 * @returns les réponses aux questions.
 * stockés dans le state GUIState,
 */
export const GetAnswers = () => {
  const GUIState = GetGUIStateFirstRow();
  const answersString = GUIState.answers;

  //console.log(`Answers as string: ${answersString}`);

  return JSON.parse(answersString);
};
