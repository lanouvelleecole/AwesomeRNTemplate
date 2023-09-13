export function extractDataFromQuestions(questions) {
  let answers = {};

  for (var i = 0; i < questions.length; i++) {
    //or check with: if (b.length > i) { assignment }
    answers[questions[i]?.name] = {
      id: questions[i]?.id,
      name: questions[i]?.name,
      value: questions[i]?.value,
    };
  }
  return answers;
}
