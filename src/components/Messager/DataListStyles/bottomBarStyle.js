import {PlayerGTAInstance} from 'src/constants/PlayerGTA/PlayerGTA';
/* PLOP_INJECT_IMPORT */

// permet d'accéder a des globales
import {Constants} from 'src/constants/Constants.js';

/* PLOP_INJECT_CODE */

/* les styles et callbacks à appliquer à la bottom bar */
export const getBottomBarStyle = props => {
  return {
    // le lecteur audio de clic
    clickSound: PlayerGTAInstance.GetSound(),

    // la barre en bas de l'écran est elle distincte du body (false)
    // ou mélangé l'un a l'autre (true)
    bottomBarLayoutOverlaid: false,

    // affiche la bottom bar ou pas ?
    showBottomBar: true,

    // la hauteur de la bottom bar
    bottomBarHeight: Constants.defaultBarHeight,

    // la couleur d'arrrière plan de la bottom bar
    bottomBarBackgroundColor: Constants.defaultBackgroundColor,

    // si > 0, permet effet d'élévation de la bottom bar
    bottomBarElevation: 0,

    // la couleur des icones de la bottom bar
    bottomBarIconsColor: Constants.defaultContentColor,

    // le style de texte
    bottomBarFont: Constants.defaultFontFamily,

    // la ou les icones a afficher
    bottomBarIconsList: [
      {
        // le dessin de l'icone (visite le site ci dessous pour voir les icones dispo)
        // https://materialdesignicons.com/
        iconName: 'plus-thick',

        // callback quand icone est cliquée
        onIconClicked: () => {
          /*SqliteReduxMessager.AddRowToDatabase({
            row: {
              name: randomName,
              category: 0,
              uniqueId: GetUniqueID(),
            },
            onSuccess: (row) => {
              console.log(`ajout de ${randomName} effectué avec succès !`);
            },
            onError: (e) => {
              console.log(`échec durant ajout de ${randomName}: ${e}`);
            },
          });*/
        },
      },

      /*
      // icone avec texte dedans
      {
        iconText: "Appuie ici", 
        onIconClicked: () => {
          console.log("tu as appuyé sur le texte");
        }
      },

      // icone avec liste de choix
      {
        iconName: "dots-vertical", 
        iconChoicesList: [
          {
            optionName: "Choix 1", 
            onOptionClicked: () => {
              console.log("tu as appuyé sur le choix 1");
            }
          },
          {
            optionName: "Choix 2", 
            onOptionClicked: () => {
              console.log("tu as appuyé sur le choix 2");
            }
          },
        ]
      }
      */
    ],
  };
};
