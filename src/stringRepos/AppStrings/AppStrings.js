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
      x0qpHyto: `La restauration de donnees a partir du cloud n'a pas reussi ! Reessaie encore, soldat !`,
      xSpTMl1n: `Tes donnees sont maintenant restorees, a partir du cloud !`,
      xAmgHBho: `La sauvegarde de donnees dans le cloud n'a pas reussi ! Reessaie encore, soldat !`,
      xNUgKxo: `Tes donnees sont maintenant en securite dans le cloud !`,

      xK6jy8ax: "Ecris le nom de cette chose , aventurier !",
      xdBhrfN: "Oups... Cette valeur n'est pas valide.",

      xBlM1Zi: "Titre",
      xriErHWm: "Cette page est vide ! Remplis moi s'il te plait",
      xE8cpvzD: "Remplis moi !",

      pressToDelete:
        'Appuie sur le bouton pour supprimer cet élement de ta liste',
      ZeFokinToolz: "Les Outils",

      Add: 'Ajoute',
      Edit: 'Modifie',
      cancel: 'Mission annulée',
      country: 'fr',
      typeHere: 'Ecris ici',
      doWeDelete: 'Veux-tu vraiment supprimer cet élément ?',
      poubelle: 'Direction la poubelle cosmique.',
      DOB: 'Né il y a',
      OK: 'OK',
      TypeSomePlz: 'Il faut écrire quelque chose.',
      TypeBabyName: 'Donne lui un nom.',
      askExtStoragePerm:
        "L'appli à besoin de stocker des données sur ton appareil. Acceptes-tu ?",
      question: 'Que veux-tu faire ?',
      plzWait: "Veuillez patienter, s'il vous plait.",
      annuler: 'Annuler',
      non: 'Non',
      oui: 'Oui',
      besoinsDeBase: 'D.I.Y., Production de nourriture, Bricolage, etc...',
      besoinsSpirituels:
        'Relations humaines, Psychologie, Philosophie, Spiritualité, etc...',
      besoinsTerritoriaux: 'AutoDéfense, Arts Martiaux, etc...',
      chooseCategory:
        'Ton tutoriel se situe dans quelle catégorie de la Pyramide de Maslow ?',
      Toolbox: 'Outils',
      NoTools: 'Pas d outils dispo',
      AddTool: 'Ajoute un outil',

      GetToolboxChoice: 'Quel outil veux-tu créer ?',
      WrongTool: 'Cet outil est caca',

      SaveDBCloud: 'Sauvegarde tes donnees utilisateur dans le cloud',
      BackupDBCloud:
        'Recupere tes donnees utilisateur, stockees dans le cloud',

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
