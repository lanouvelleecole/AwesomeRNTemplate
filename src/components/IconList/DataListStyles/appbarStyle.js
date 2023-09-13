/* PLOP_INJECT_IMPORT */

// permet d'accéder a des globales
import { Constants } from "src/constants/Constants.js";

/**
 * les styles de la topbar
 */
export const getAppbarStyle = (props) => {
  /* PLOP_INJECT_CODE */

  return {
    // la barre en haut de l'écran est elle distincte du body (false)
    // ou mélangé l'un a l'autre (true)
    appbarLayoutOverlaid: false,

    // la hauteur de l'appbar
    appbarHeight: Constants.defaultBarHeight,

    // on affiche l'appbar ou pas ?
    showAppbar: true,

    // le titre (texte visible) de l'appbar
    appbarTitle: "IconList",

    // le design du texte de l'appbar et menu appbar
    appbarFont: Constants.defaultFontFamily,

    // montre l'icone a gauche de l'icone menu (3 ptit point) ?
    showAppbarIcon: true,

    // l'icone en question si showAppbarIcon = true
    appbarIcon: "plus-thick",

    // la couleur d'arrière plan de l'appbar
    appbarBackgroundColor: Constants.defaultBackgroundColor,

    // si supérieur à 0, élève l'appbar pour avoir un effet de relief entre body et appbar
    appbarElevation: 0,

    // la couleur de tout ce qu'il y a dans l'appbar (titre, icones, etc...)
    appbarContentColor: Constants.defaultContentColor,

    // callback d'actions a effectuer si on clique sur le texte de l'appbar
    onAppbarTitleClicked: () => {
      console.log("Le titre à été cliqué dessus.");
    },
    // callback d'actions a effectuer si on clique sur l'icone de l'appbar
    onAppbarIconClicked: () => {
      console.log("Le all mighty icone à été cliqué dessus.");
    },
    // callback d'actions a effectuer si on clique sur la flèche de retour arrière
    // de l'appbar.
    onBackPressed: () => {
      console.log("On retourne en arrière baby baby");
    },
    // la lste des choix du menu s'affichant quand on clique sur les 3 petits points de l'appbar
    appbarOptionMenuList: [
      {
        // texte du choix
        optionName: "Option 1",

        // que faire quand on clique sur ce choix
        onOptionClicked: () => {
          console.log("Option 1 à été cliqué");
        },
      },
      {
        // texte du choix
        optionName: "Option 2",

        // que faire quand on clique sur ce choix
        onOptionClicked: () => {
          console.log("Option 2 à été cliqué");
        },
      },
    ],
  };
};
