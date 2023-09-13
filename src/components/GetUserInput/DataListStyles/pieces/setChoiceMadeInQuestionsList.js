import { SqliteReduxGUIState } from "src/reduxState/GUIState/GUIStateGetterSetter";

/**
 *
 * @param {*} choiceChosen
 * @param {*} question
 * @param {*} questions
 * @param {*} setQuestions
 *
 * Stocke le choix fait dans la liste de questions, et de réponses
 */
export const setChoiceMadeInQuestionsList = (
  choiceChosen,
  question,
  questions,
  setQuestions,
  persistenceID
) => {
  // l'index de la question en cours de réponsage
  // dans la liste de questions horizontale
  const questionIndex = questions.findIndex((questionInList) => {
    return questionInList.id === question.id;
  });

  // la question en cours de réponsage
  const questionEnCours = questions[questionIndex];

  // les réponses actuelles aux questions du QCM. stockées dans le state GUIState
  const answers = SqliteReduxGUIState.GetAnswers(persistenceID);


  // stocke la réponse dans l'objet réponses
  answers[questionEnCours.name].value = choiceChosen.choiceValue;
  SqliteReduxGUIState.SetAnswers({ answers, persistenceID });
};
