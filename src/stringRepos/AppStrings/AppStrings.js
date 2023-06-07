import {strings_pt} from './translations/strings_pt.js';

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
  src: {
    /* PLOP_INJECT_SRC_STRING */
    workInit: 'Boulot en cours de préparation...',
    workFailed:
      'La mission à échoué, soldat... Réessaie ! Ne perds pas espoir soldat !',
    workSuccess: 'La mission est réussie, soldat ! Repos !: ',
    workAlready: "La mission est déja en cours d'exécution, soldat !",
    xOJ27832: 'Donne le nom de cette chose imaginaire ;-): ',
    xIKzlTa0: "Oups... Cette valeur n'est pas valide.",

    xoNrsOnM: 'Titre: ',

    xFjKWX7F: 'Titre: ',
    xRnUhKCQ: 'Page Vide. Remplis moi, stp !: ',
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
    /* PLOP_INJECT_SRC_END */
  },
  /* PLOP_INJECT_INTL_STRINGS */
  pt: strings_pt,
};

/**
 * la fonction d'init de répertoire de strings
 */
const AppStrings = () => {
  const deviceLocale = Localization.locale;

  //console.log(`Locale is: ${deviceLocale}`);

  // Set the locale once
  // at the beginning of your app.
  i18n.locale = deviceLocale;

  // When a value is missing from a language,
  // it'll fallback to another language with the key present.
  i18n.fallbacks = true;
  i18n.defaultLocale = 'src';
};

export {AppStrings};
