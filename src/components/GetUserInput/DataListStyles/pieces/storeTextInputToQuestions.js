import { SqliteReduxGUIState } from "src/reduxState/GUIState/GUIStateGetterSetter";

export function storeInputToQuestions({
  question,
  questions,
  setQuestions,
  input,
  persistenceID
}) {

  // les réponse actuelles aux questions du QCM
  const answers = SqliteReduxGUIState.GetAnswers(persistenceID);

  // ajoute la valeur actuelle dans answers
  answers[question.name].value = input;

  //console.log(`Answers: ${JSON.stringify(answers)}`);
  //console.log(`We're storing the answer for UI named ${question.name}`);

  // stocke les réponses dans le state
  SqliteReduxGUIState.SetAnswers({ answers, persistenceID });
}
