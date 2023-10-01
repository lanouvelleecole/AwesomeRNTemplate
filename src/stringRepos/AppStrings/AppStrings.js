import { strings_en } from "./translations/strings_en.js";
/* PLOP_INJECT_IMPORT */

/* PLOP_INJECT_IMPORT */
import { I18n } from 'i18n-js';

/**
 *
 * Cette fonction initialise les parmètres par défaut du répertoire de strings.
 * Cette fonction retourne le répertoire de strings, loaded et initialized.
 * */
const AppStrings = () => {
  const i18n = new I18n({
    src: {
      /* PLOP_INJECT_SRC_STRING */
      "x0qpHyto": `The cloud data restore failed ! Try again, soldier !`,
      "xSpTMl1n": `Your data is now locally restored, from the cloud !`,
      "xAmgHBho": `The cloud save failed ! Try again, soldier !`,
      "xNUgKxo": `Your data is now safe in the cloud !`,

      "xK6jy8ax": "Write the name of this thing, adventurer!",
      "xdBhrfN": "Oops... This value is not valid.",
      "xBlM1Zi": "Title",
      "xriErHWm": "This page is empty! Please fill me up.",
      "xE8cpvzD": "Fill me up!",
      "pressToDelete": "Press the button to remove this item from your list",
      "ZeFokinToolz": "The Tools",
      "Add": "Add",
      "Edit": "Modify",
      "cancel": "Mission cancelled",
      "country": "en",
      "typeHere": "Write here",
      "doWeDelete": "Do you really want to delete this item?",
      "poubelle": "Heading to the cosmic trash bin.",
      "DOB": "Date of birth",
      "OK": "OK",
      "TypeSomePlz": "You need to write something.",
      "TypeBabyName": "Give him a name.",
      "askExtStoragePerm": "The app needs to store data on your device. Do you accept?",
      "question": "What do you want to do?",
      "plzWait": "Please wait, if you please.",
      "annuler": "Cancel",
      "non": "No",
      "oui": "Yes",
      "besoinsDeBase": "D.I.Y., Food Production, Handicrafts, etc...",
      "besoinsSpirituels": "Human Relations, Psychology, Philosophy, Spirituality, etc...",
      "besoinsTerritoriaux": "Self-Defense, Martial Arts, etc...",
      "chooseCategory": "Which category of Maslow's Pyramid does your tutorial fall under?",
      "Toolbox": "Tools",
      "NoTools": "No tools available",
      "AddTool": "Add a tool",
      "GetToolboxChoice": "What tool do you want to create?",
      "WrongTool": "This tool is crap",
      "SaveDBCloud": "Save your user data in the cloud",
      "BackupDBCloud": "Recover your user data, stored in the cloud"
      /* PLOP_INJECT_SRC_END */
    },
    /* PLOP_INJECT_INTL_STRINGS */
    "en": strings_en,
  });

  // Set the locale once
  // at the beginning of your app.
  i18n.locale = Intl.DateTimeFormat().resolvedOptions().locale;
  i18n.defaultLocale = 'src';

  // When a value is missing from a language,
  // it'll fallback to another language with the key present.
  i18n.enableFallback = true;

  return i18n;
};

/**
 *
 * Bonjour, Holà, Hello,
 *
 * Ci dessous, se trouve une bibliothèque de strings
 * multilingues.
 *
 * ce petit bébé, nommé i18n,
 * contient les strings, ze graal, ze caviar kush champagne !
 * cet objet est destiné à être exporté et réutilisé
 * partout dans ton application !
 *
 */
const app_strings = AppStrings();

export { AppStrings, app_strings };
