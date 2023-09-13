/* PLOP_INJECT_IMPORT */

// un identifiant unique
import { GetUniqueID } from "src/services/GetUniqueID/GetUniqueID";

// permet multilingue
import { app_strings } from "src/stringRepos/AppStrings/AppStrings";

import { PlayerGTAInstance } from "src/constants/PlayerGTA/PlayerGTA.js";

// permet choix conditionnel
import { OuiOuNon } from "src/services/OuiOuNon/OuiOuNon";

// permet accès CRUD à une base de données Sqlite + Redux
import { SqliteReduxTestPage } from "src/reduxState/TestPage/TestPageGetterSetter";
import { GoToTestPageList } from "../../../NavHelpers/GoToTestPageList";

import { SqliteReduxTestPageState } from "src/reduxState/TestPageState/TestPageStateGetterSetter";

import { useRoute } from "@react-navigation/native";

/* PLOP_INJECT_GLOBAL_CODE */

/**
 *
 * Nous permet de supprimer un item de la liste d'items.
 */
const DeleteItemOrNot = () => {
  /* PLOP_INJECT_CODE */
  const route = useRoute();

  return {
    // un identifiant unique
    id: GetUniqueID(),

    // un nom, nous permettant de gérer les récup de réponses choisies/écrites
    name: "DeleteItemOrNot",

    type: "choices", //"text" || "number" || "choices" || "custom",

    // requis
    description: ({ answers, answer, answerIndex }) => {
      return app_strings.t("pressToDelete");
    },
    // requis, si "type" === "choices"
    choices: ({ answers, answer, answerIndex }) => {
      return [
        {
          choiceDescription: app_strings.t("poubelle"),
          choiceValue: true,
          choiceImgUrl: "",
          choiceImgPath: "",
          //greenCheckmark: answer?.value == true,
          onChoiceClicked: () => {
            onSupprimeVraimentOuPas(route);
          },
        },
      ];
    },

    // la valeur choisie/écrite par l'user
    // null (par défaut)
    value: false,

    // la valeur par défaut a mettre dans le text input
    defaultValue: ({ answers, answer, answerIndex }) => "",

    // les flex du message ou de la zone d'input
    messageFlex: 1,
    componentFlex: 1,

    // la taille du texte du message
    messageFontSize: 25,

    // on montre le component d'input en premier, ou pas ?
    componentFirst: true,

    // un callback qui vérifie que l'input est valide
    // true si valide false autrement
    checkInput: ({ input, answers, answer, answerIndex }) => {
      return input != null;
    },
    // un message d'erreur à afficher si les données ne sont pas valides
    errMsg: ({ answers, answer, answerIndex }) => {
      return "Blue pill, Red pill ? Choose a pilule s'il te please.";
    },
  };
};

/**
 *
 * permet suppression d'item conditionnelle,
 * pour éviter freakout et cassage de téléphone.
 *
 */
const onSupprimeVraimentOuPas = (route) => {
  OuiOuNon({
    clickSound: PlayerGTAInstance.GetSound(),
    text: app_strings.t("doWeDelete"),
    onYesPressed: () => {
      deleteItemAndGoBackToList();
    },
    onNoPressed: () => console.log("no we don't."),
    onCancelPressed: () => console.log("You left the chat."),
  });
};

/**
 *
 * Retournons à la liste de données,
 * et supprimons cet item aussi.
 *
 */
const deleteItemAndGoBackToList = () => {
  const TestPageState = SqliteReduxTestPageState.GetTestPageStateFirstRow();

  const currentItemUniqueId = TestPageState.itemUniqueId;
  const currentItem =
    SqliteReduxTestPage.GetItemByUniqueID(currentItemUniqueId);

  // direction poubelos pour le tuto
  SqliteReduxTestPage.DeleteSpecificRowsFromDB({
    rowName: "uniqueId",
    rowValue: currentItem.uniqueId,
    onSuccess: (qtyAffected) => {
      console.log(
        `suppression de ${qtyAffected} tuto(s) effectué avec succès !`
      );

      // retour à la maison
      GoToTestPageList();
    },
    onError: (e) => {
      //console.log(`échec durant suppression de ${}`);
    },
  });
};

export { DeleteItemOrNot };
