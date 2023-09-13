/* PLOP_INJECT_IMPORT */

// un identifiant unique
import {GetUniqueID} from 'src/services/GetUniqueID/GetUniqueID';

// permet multilingue
import {app_strings} from 'src/stringRepos/AppStrings/AppStrings';

import {SqliteReduxToolbox} from 'src/reduxState/Toolbox/ToolboxGetterSetter';

import {SqliteReduxToolboxState} from 'src/reduxState/ToolboxState/ToolboxStateGetterSetter';

/* PLOP_INJECT_GLOBAL_CODE */

/**
 *
 * permet de donner un nom à notre item
 */
const GetToolboxItemName = () => {
  /* PLOP_INJECT_CODE */
  const TypeSomePlz = app_strings.t('TypeSomePlz');
  const TypeBabyName = app_strings.t('TypeBabyName');

  // getter, contient le state actuel
  const ToolboxState = SqliteReduxToolboxState.GetToolboxStateFirstRow();

  const currentItemUniqueId = ToolboxState.itemUniqueId;
  const currentItem = SqliteReduxToolbox.GetItemByUniqueID(currentItemUniqueId);

  //console.log(`page state  = ${JSON.stringify(ToolboxState)}`);
  //console.log(`current item  uid = ${currentItemUniqueId}`);
  //console.log(`current item  = ${JSON.stringify(currentItem)}`);

  return {
    // un identifiant unique
    id: GetUniqueID(),

    // un nom, nous permettant de gérer les récup de réponses choisies/écrites
    name: 'GetToolboxItemName',

    type: 'text', //"text" || "number" || "choices" || "custom",

    // requis
    description: ({answers, answer, answerIndex}) => {
      return TypeBabyName;
    },
    // requis, si "type" === "choices"
    choices: ({answers, answer, answerIndex}) => {
      return [
        {
          choiceDescription: app_strings.t('oui'),
          choiceValue: true,
          choiceImgUrl: '',
          choiceImgPath: '',
          greenCheckmark: answer?.value == true,
          onChoiceClicked: () => {},
        },
        {
          choiceDescription: app_strings.t('non'),
          choiceValue: false,
          choiceImgUrl: '',
          choiceImgPath: '',
          greenCheckmark: answer?.value == false,
          onChoiceClicked: () => {},
        },
      ];
    },

    // la valeur choisie/écrite par l'user
    // null (par défaut)
    value: currentItem?.name ?? null,

    // la valeur par défaut a mettre dans le text input
    defaultValue: ({answers, answer, answerIndex}) => {
      return answer?.value ?? currentItem?.name ?? '';
    },

    // les flex du message ou de la zone d'input
    messageFlex: 1,
    componentFlex: 1,

    // la taille du texte du message
    messageFontSize: 25,

    // on montre le component d'input en premier, ou pas ?
    componentFirst: true,

    // un callback qui vérifie que l'input est valide
    // true si valide false autrement
    checkInput: ({input, answers, answer, answerIndex}) => {
      return input != null && input.length > 0;
    },
    // un message d'erreur à afficher si les données ne sont pas valides
    errMsg: ({answers, answer, answerIndex}) => {
      return TypeSomePlz;
    },
  };
};

export {GetToolboxItemName};
