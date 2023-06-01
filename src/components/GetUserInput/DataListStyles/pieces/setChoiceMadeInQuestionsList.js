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
  setQuestions
) => {
  // l'index de la question en cours de réponsage
  // dans la liste de questions horizontale
  const questionIndex = questions.findIndex((questionInList) => {
    return questionInList.id === question.id;
  });

  // la question en cours de réponsage
  const questionEnCours = questions[questionIndex];

  // les réponses actuelles aux questions du QCM. stockées dans le state GUIState
  const answers = SqliteReduxGUIState.GetAnswers();

  /*

  // l'index du choix fait dans la liste de choix de cette question
  const choiceIndex = questionEnCours
    .choices({
      answers,
      answer: answers[questionEnCours.name],
      answerIndex: questionIndex,
    })
    .findIndex((choice) => {
      return choice.choiceValue === choiceChosen.choiceValue;
    });

  // reset toutes les choix de réponse, en mode greenCheckmark = false,
  // pour cette question.
  // (pour afficher uniquement le nouvel item tout juste cliqué avec un greenCheckmark)
  questionEnCours
    .choices({
      answers,
      answer: answers[questionEnCours.name],
      answerIndex: questionIndex,
    })
    .map((choice) => {
      choice.greenCheckmark = false;

      return choice;
    });

  // le choix tout juste cliqué est green
  questionEnCours.choices({
    answers,
    answer: answers[questionEnCours.name],
    answerIndex: questionIndex,
  })[choiceIndex].greenCheckmark = true;

  // stocke la valeur du choix dans la question
  questionEnCours.value = questionEnCours.choices({
    answers,
    answer: answers[questionEnCours.name],
    answerIndex: questionIndex,
  })[choiceIndex].choiceValue;

  // modifie le state de GetUserInput.js pour
  // stocker le nouveau choix
  setQuestions(questions);

  */

  // stocke la réponse dans l'objet réponses
  answers[questionEnCours.name].value = choiceChosen.choiceValue; //questionEnCours.value;
  SqliteReduxGUIState.SetAnswers({ answers });
};
