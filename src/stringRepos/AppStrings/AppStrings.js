/* PLOP_INJECT_IMPORT */
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

/**
 * AppStrings
 * est une bibliothèque de strings multilingues
 *
 * il faut initialiser cette bibliothèque dans App.js,
 * avec la fonction d'init
 *
 */

// les strings selon pays
i18n.translations = {
  en: {
    /* PLOP_INJECT_ENG_STRING */
    xOJ27832: 'What is the name of this imaginary thing ;-)',
    xIKzlTa0: 'Oops... This value is not valid.',

    xoNrsOnM: 'Title',

    xFjKWX7F: 'Title',
    xRnUhKCQ: 'Empty Page. Fill me up, please!',
    x4HQzKi7: 'Fill me in!',

    welcome: 'Hello',
    country: 'en',
    typeHere: 'Type here.',
    OK: 'OK',
    DOB: 'Date Of Birth',
    Add: 'Add',
    Edit: 'Edit',
    chooseCategory: 'Choose an option.',
    besoinsDeBase: 'Basic needs',
    besoinsSpirituels: 'Spiritual needs',
    besoinsTerritoriaux: 'Territorial needs',
    TypeSomePlz: 'You need to write something',
    TypeBabyName: 'Write the babys name',
    oui: 'YES',
    non: 'NO',
    annuler: 'CANCEL',
    pressToDelete: 'Press here to delete',
    poubelle: 'Delete this shit.',
    doWeDelete: 'Do you really want to delete this shit ? ;-)',
  },
  fr: {
    /* PLOP_INJECT_FR_STRING */
    xOJ27832: 'Donne le nom de cette chose imaginaire ;-)',
    xIKzlTa0: "Oups... Cette valeur n'est pas valide.",

    xoNrsOnM: 'Titre',

    xFjKWX7F: 'Titre',
    xRnUhKCQ: 'Page Vide. Remplis moi, stp !',
    x4HQzKi7: 'Remplis moi !',

    welcome: 'Bonjour',
    country: 'fr',

    typeHere: 'Ecris ici',
    OK: 'OK',
    DOB: 'Né le',
    Add: 'Ajouter',
    Edit: 'Modifier',
    chooseCategory: 'Choisis une option.',
    besoinsDeBase: 'Besoins de base',
    besoinsSpirituels: 'Besoins spirituels',
    besoinsTerritoriaux: 'Besoins territoriaux',
    TypeSomePlz: 'Ecris ici quelque chose',
    TypeBabyName: 'Ecris le nom du bébé',
    oui: 'OUI',
    non: 'NON',
    annuler: 'ANNULER',
    pressToDelete: 'Appuie ici pour supprimer',
    poubelle: 'Direction la poubelle cosmique.',
    doWeDelete: 'Veux tu vraiment supprimer cette merde ? ;-)',
  },
};

/**
 * la fonction d'init de répertoire de strings
 */
const AppStrings = () => {
  console.log("Cette function d'init de répertoire doit run 1 seule fois");

  // Set the locale once
  // at the beginning of your app.
  i18n.locale = Localization.locale;

  // When a value is missing from a language,
  // it'll fallback to another language with the key present.
  i18n.fallbacks = true;
};

export {AppStrings};
