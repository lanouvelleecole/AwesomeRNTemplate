// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import { Constants } from "src/constants/Constants";

// le nom de la base de données SQLITE
export const databaseName = "WorkListsState";

/* ***** !!!!! IMPORTANT !!!!! ***** 

Il faut remplacer les 3 ptits points WorkListsState par le nom de la page / du component correspondant.

******** !!!!! IMPORTANT !!!!! ***** */

/* ***** POUR ITEM DE LISTE VERTICALE *****

// les noms et types des valeurs stockées dans la DB
// (il y a 3 types possibles: TEXT (string), INTEGER (nombre entier), et REAL (nombre decimal))
export const rowNamesAndTypes = {
  // PLOP_INJECT_DB_ROW


  // le nom du tutoriel.
  name: "TEXT",

  // la catégorie du tuto
  category: "INTEGER",

  // date de création du tuto
  creation_year: "INTEGER",
  creation_month: "INTEGER",
  creation_day: "INTEGER",
  creation_hour: "INTEGER",
  creation_minute: "INTEGER",
  creation_second: "INTEGER",

  // le combien-tième ajout ?
  itemIndex: "INTEGER",

  // cet item fait partie d'un groupe ?
  // si oui,
  // ceci représente le nom du groupe auquel il appartient
  groupName: "TEXT",

  // identifiant
  uniqueId: "TEXT",
};

************************************** */

/* ***** POUR STATE DE PAGE ***** */

// les noms et types des valeurs stockées dans la DB
// (il y a 3 types possibles: TEXT (string), INTEGER (nombre entier), et REAL (nombre decimal))
export const rowNamesAndTypes = {
  // PLOP_INJECT_DB_ROW

  // affiche ou pas le snack
  snackbarVisible: "INTEGER",

  // texte du snack
  snackbarText: "TEXT",

  // index d'erreur en utilisant GetUserInput
  userInputErrorIndex: "INTEGER",

  // l'écran actuellement affiché dans WorkListsState.js
  chosenOne: "TEXT",

  // la page WorkListsState.js est prêt à être affichée ?
  isMounted: "INTEGER",

  // identifiant unique de l'item en cours de modif
  itemUniqueId: "TEXT",

  // l'index actuel visionné
  currentIndex: "INTEGER",

  // identifiant unique
  uniqueId: "TEXT",
};

// valeurs par défaut qd on reset/init
export const defaultValues = {
  // PLOP_INJECT_DEFAULT_STATE_VALUE

  // affiche ou pas le snack
  snackbarVisible: Constants.false,

  // texte du snack
  snackbarText: "",

  // index d'erreur en utilisant GetUserInput
  userInputErrorIndex: -1,

  // l'écran actuellement affiché dans WorkListsState.js
  // TODO: Supprime le 'State' dans  WorkListsStateList
  chosenOne: "WorkListsList",

  // la page WorkListsState.js est prêt à être affichée ?
  isMounted: Constants.false,

  // identifiant unique de l'item en cours de modif
  itemUniqueId: null,

  // identifiant unique
  uniqueId: "WorkListsState",

  // l'index actuel
  currentIndex: 0,
};

/* ************************************************* */

/* ***** POUR STATE DE COMPONENT *****

// les noms et types des valeurs stockées dans la DB
// (il y a 3 types possibles: TEXT (string), INTEGER (nombre entier), et REAL (nombre decimal))
export const rowNamesAndTypes = {
  // PLOP_INJECT_DB_ROW


  // affiche ou pas le snack
  currentState: "INTEGER",

  // la page WorkListsState.js est prêt à être affichée ?
  isMounted: "INTEGER",

  // le path du thumb fraichement snap/picked
  thumbPath: "TEXT",

  // identifiant unique
  uniqueId: "TEXT",
};

// valeurs par défaut qd on reset/init
export const defaultValues = {
  // PLOP_INJECT_DEFAULT_STATE_VALUE

  // le state par défaut
  currentState: null,

  // le path du thumb fraichement snap/picked
  thumbPath: null,

  // le component est prêt à être affichée ?
  isMounted: Constants.false,

  // identifiant unique
  uniqueId: "WorkListsState",
};

******************************************* */
