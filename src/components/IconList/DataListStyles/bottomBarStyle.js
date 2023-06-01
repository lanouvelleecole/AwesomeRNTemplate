/* PLOP_INJECT_IMPORT */
import { Constants } from "src/constants/Constants";

/* PLOP_INJECT_CODE */

/* les styles et callbacks à appliquer à la bottom bar */
export const getBottomBarStyle = (props) => {
  return {
    // la barre en bas de l'écran est elle distincte du body (false)
    // ou mélangé l'un a l'autre (true)
    bottomBarLayoutOverlaid: false,

    // affiche la bottom bar ou pas ?
    showBottomBar: true,

    // la hauteur de la bottom bar
    bottomBarHeight: Constants.defaultBarHeight,

    // la couleur d'arrrière plan de la bottom bar
    bottomBarBackgroundColor: "pink",

    // si > 0, permet effet d'élévation de la bottom bar
    bottomBarElevation: 0,

    // la couleur des icones de la bottom bar
    bottomBarIconsColor: Constants.defaultContentColor,

    // la ou les icones a afficher
    bottomBarIconsList: [
      {
        // le dessin de l'icone (visite le site ci dessous pour voir les icones dispo)
        // https://materialdesignicons.com/
        iconName: "plus-thick",

        // callback quand icone est cliquée
        onIconClicked: () => {},
      },
    ],
  };
};
