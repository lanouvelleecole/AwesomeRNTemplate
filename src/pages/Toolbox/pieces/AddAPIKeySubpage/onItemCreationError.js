// getter/setter
import { Constants } from "src/constants/Constants";
import { SqliteReduxToolboxState } from "src/reduxState/ToolboxState/ToolboxStateGetterSetter";

// eslint-disable-next-line no-unused-vars
import { SetPageState } from "../NavHelpers/SetPageState";

/**
 *
 * @param {*} answers
 * @param {*} errAnswerIndex
 * @param {*} errMsg
 *
 * si bobo, on affiche un message
 */
export function onItemCreationError(answers, errAnswerIndex, errMsg, questions) {

  const qtyAnswers = questions.length;

  // getter, contient le state actuel
  const ToolboxState = SqliteReduxToolboxState.GetToolboxStateFirstRow();

  /**
   *
   * si données invalides,
   * on affiche un message d'erreur.
   *
   */
  SetPageState({
    ...ToolboxState,
    snackbarVisible: Constants.true,
    snackbarText: `(${errAnswerIndex + 1}/${qtyAnswers}): ${errMsg}`,
    userInputErrorIndex: errAnswerIndex,
  });
}
