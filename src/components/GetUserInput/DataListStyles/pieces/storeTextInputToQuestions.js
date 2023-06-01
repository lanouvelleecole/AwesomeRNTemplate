import { SqliteReduxGUIState } from "src/reduxState/GUIState/GUIStateGetterSetter";

export function storeInputToQuestions({
  question,
  questions,
  setQuestions,
  input,
}) {
  // les réponse actuelles aux questions du QCM
  const answers = SqliteReduxGUIState.GetAnswers();

  // ajoute la valeur actuelle dans answers
  answers[question.name].value = input;

  //console.log(`Answers: ${JSON.stringify(answers)}`);
  //console.log(`question's name is ${question.name}`);

  // stocke les réponses dans le state
  SqliteReduxGUIState.SetAnswers({ answers });
}
