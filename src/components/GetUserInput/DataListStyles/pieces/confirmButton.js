import { SqliteReduxGUIState } from "src/reduxState/GUIState/GUIStateGetterSetter";
import { RunIfPossible } from "src/services/RunIfPossible/RunIfPossible";

/**
 *
 * @param {*} props
 *
 * @returns les données de créa du bouton valider
 */
export function confirmButton({ props, questions, setQuestions }) {
  return {
    iconName: "check-bold",
    onIconClicked: () => {
      // les réponse actuelles aux questions du QCM
      const answers = SqliteReduxGUIState.GetAnswers();

      // l'index de la question a l'écran
      const GUIState = SqliteReduxGUIState.GetGUIStateFirstRow();
      const currentIndex = GUIState.currentIndex;

      // vérifie que les réponses fournies répondent aux cahier de charges
      const answersChecks = questions.map((question) => {
        return question.checkInput({
          input: answers[question.name].value,
          answers,
          answer: answers[question.name],
          answerIndex: currentIndex,
        });
      });

      // si y'a erreur quelque part, ceci sera égal à 0 ou +
      const firstErrorIndex = answersChecks.findIndex((answer) => {
        return answer === false;
      });

      // si c'est le cas...
      if (firstErrorIndex > -1) {
        const msg = questions[firstErrorIndex].errMsg({
          answers: answers,
          answer: answers[questions[firstErrorIndex].name],
          answerIndex: firstErrorIndex,
        });

        // ...on exécute la callback d'erreur avec le message d'erreur et l'index de la question fautive
        RunIfPossible({
          func: props.onError,
          args: {
            errMsg: msg,
            errAnswerIndex: firstErrorIndex,
            answers: answers,
          },
        });
      } else {
        // si tout va bien, pas d'erreur, exécute la callback de succès
        RunIfPossible({
          func: props.onSuccess,
          args: answers,
        });
      }
    },
  };
}
