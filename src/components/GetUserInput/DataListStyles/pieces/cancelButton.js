import { RunIfPossible } from "src/services/RunIfPossible/RunIfPossible";

/**
 *
 * @param {*} props
 *
 * @returns les données de créa du bouton annuler
 */
export function cancelButton({ props, questions, setQuestions }) {
  return {
    iconName: "close-thick",
    onIconClicked: () => {
      RunIfPossible({
        func: props.onCancel,
        args: null,
      });
    },
  };
}
