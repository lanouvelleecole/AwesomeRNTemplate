import { app_strings } from "../../../../../../../../stringRepos/AppStrings/AppStrings.js";

/* PLOP_INJECT_IMPORT */
import { DatabaseObjects } from 'src/reduxState/DatabaseObjects';
import { RestoreLocalDatabasesFromCloud } from 'src/services/LocalDatabase/RestoreLocalDatabasesFromCloud';
import { SaveLocalDatabasesToCloud } from 'src/services/LocalDatabase/SaveLocalDatabasesToCloud';
import { ShowNotification } from 'src/services/ShowNotification/ShowNotification';

/* PLOP_INJECT_GLOBAL_CODE */

/* Les différents choix dispo */
export const GetToolboxChoiceChoices = () => {
  return {
    /* PLOP_INJECT_CHOICE */
    SaveDBCloud: 0,
    BackupDBCloud: 1,
  };
};

/* Les différents strings à afficher pour UI, selon choix */
export const GetToolboxChoiceChoicesUI = () => {
  return {
    /* PLOP_INJECT_CHOICE_UI */
    SaveDBCloud: app_strings.t('SaveDBCloud'),
    BackupDBCloud: app_strings.t('BackupDBCloud'),
  };
};

/**
 *
 * @param {*} choice, un choix en particulier
 *
 * retourne le string d'UI à afficher selon valeur de choix
 */
export const GetToolboxChoiceChoiceUI = choice => {
  var object = GetToolboxChoiceChoices();

  const keyName = Object.keys(object).find(key => object[key] === choice);

  return GetToolboxChoiceChoicesUI()[keyName];
};

/**
 * Les différents actions à effectuer, selon choix cliqué.
 *
 *
 **/
export const GetToolboxChoiceChoicesActions = {
  /* PLOP_INJECT_CHOICE_ACTION */
  SaveDBCloud: async ({ choice, answers, answer, answerIndex, currentItem }) => {

    SaveLocalDatabasesToCloud({
      SqliteReduxObjects: DatabaseObjects,
      onSuccess: (data) => {
        ShowNotification({
          id: 0,
          title: "Maslow",
          body: app_strings.t("xNUgKxo"),
          extra: null,
        });
      },
      onError: (e) => {
        ShowNotification({
          id: 0,
          title: "Maslow",
          body: app_strings.t('xAmgHBho'),
          extra: null,
        });
      }
    });

  },
  BackupDBCloud: async ({ choice, answers, answer, answerIndex, currentItem }) => {

    RestoreLocalDatabasesFromCloud({
      SqliteReduxObjects: DatabaseObjects,
      onSuccess: (data) => {
        ShowNotification({
          id: 0,
          title: "Maslow",
          body: app_strings.t('xSpTMl1n'),
          extra: null,
        });
      },
      onError: (e) => {
        ShowNotification({
          id: 0,
          title: "Maslow",
          body: app_strings.t('x0qpHyto'),
          extra: null,
        });
      }
    });

  },
};
