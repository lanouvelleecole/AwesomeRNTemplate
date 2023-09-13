import { React } from "react";
import logo from "assets/images/icon.png";
import { DataListItem } from "src/components/DataListItem/DataListItem";

// permet d'accéder a des globales
import { Constants } from "src/constants/Constants.js";

/**
 * Le layout d'un item individuel dans la liste de données
 *
 *
 */
const npcDataListItemLayout = ({ item, index }) => {
  return <DataListItem itemData={item} itemStyle={itemStyle} />;
};

/**
 * Le layout d'un item individuel dans la liste de données
 *
 *
 */
const dataListItemLayout = ({ item, index }) => {
  return <DataListItem itemData={item} itemStyle={itemStyle} />;
};

/**
 * les styles du torse
 * de la liste.
 *
 * Il faut fournir les styles
 * de l'appbar et du bottom bar,
 * car la heuteur et largeur de la liste de données
 * dépend du style appliqué a l'appbar et bottom bar.
 */
const getDataListStyle = ({ dataList, setDataList, props }) => {
  return {
    // la couleur d'arrière plan par défaut de la liste de données.
    backgroundColor: "pink",

    // la couleur par défaut du texte de la liste de données
    contentColor: Constants.defaultContentColor,

    // les styles à appliquer au message de base de données vide.
    emptyDBMsgData: {
      // le texte à afficher
      messageText:
        "La base de données est vide. Bouge ton cul et crée quelque chose qui te rapportera un revenu.",
      // la couleur/font du texte
      messageTextColor: Constants.defaultContentColor,
      messageTextFont: Constants.defaultFontFamily,

      // la couleur d'arrière plan
      backgroundColor: Constants.defaultBackgroundColor,

      iconWidth: 50,
      iconHeight: 75,

      // l'image au dessus du texte
      iconPath: logo,

      // la couleur d'arrière plan du bouton
      buttonBackgroundColor: "orange",

      // le logo du bouton
      buttonLogoName: "logo-google",

      // la taille du logo du bouton
      buttonLogoSize: 30,

      // la couleur du logo du bouton
      buttonLogoColor: "red",

      // le texte a afficher dans le bouton
      buttonText: "B.T.C.",

      // la couleur du texte du bouton
      buttonTextColor: Constants.defaultContentColor,

      // le font du texte du bouton
      buttonTextFont: Constants.defaultFontFamily,

      // que faire quand le bouton est appuyé ?
      onButtonClicked: () => {
        /*console.log("Il est temps de passer aux choses sérieuses");*/
      },
    },
    // le layout d'un item individuel de la liste de données
    renderDataListItem: dataListItemLayout,
    // si renderOnlyItemOnScreen = true
    // et dataListScrollDirection == "vertical_one_by_one" ou "horizontal_one_by_one"
    // qu'affiche t'on pour les items entourant l'item visible à l'écran.
    // les personnages non joueurs (PNJ - NPC)
    renderNPCDataListItem: npcDataListItemLayout,
    // que fait on quand on arrive au bout de la liste ?
    onListEndPushed: () => {
      /*console.log(`We're at the end of the list... Time to do some work...`);*/
    },
    // on affiche uniquement l'item à l'index en cours de visionnage ?
    renderOnlyItemOnScreen: true,
    // si renderOnlyItemOnScreen = true
    // howManyNPCSOnEachSide représente combien de PNJ entourent la chose affichée a l'écran ?
    // combien à gauche et a droite.
    // (par ex: si howManyNPCSOnEachSide = 1, il y a un component PNJ a gauche et un a droite.
    // le reste des éléments de la FlatList est = à null.
    //
    // ..... null => PNJ => Chose a l'écran => PNJ => null => .....
    //
    // Ce méchanisme permet de ne pas trop surcharger notre UI
    // quand on affiche une liste de components 'lourds'
    // (comme une vidéo, etc...).
    // Par défaut, FlatList affiche tout en même temps, ce qui peut poser problème.
    howManyNPCSOnEachSide: 1,
    // dans quel sens va le scroll ?
    //
    // vertical, horizontal, vertical_one_by_one, horizontal_one_by_one
    dataListScrollDirection: "vertical_one_by_one",
  };
};

/** Les styles/callbacks à appliquer au layout d'un item individuel */
const itemStyle = {
  contentColor: Constants.defaultContentColor,
  backgroundColor: "pink",
  thumbUrl: null,
  thumbPath: null,
  itemName: "Ze beautiful chose.",
  itemsInfos: [
    {
      infoIconUrl: null,
      infoIconPath: null,
      infoTxt: "Info 1",
    },
    {
      infoIconUrl: null,
      infoIconPath: null,
      infoTxt: "Info 2",
    },
  ],
  onItemClicked: (itemData) => {
    console.log(`item clicked. Item data is: ${itemData}`);
  },
  onItemLongPress: (itemData) => {
    console.log(`item long clicked. Item data is: ${itemData}`);

    /*
    OuiOuNon({
      text: "Do we do something ?",
      onYesPressed: () => console.log("yes we do."),
      onNoPressed: () => console.log("no we don't."),
      onCancelPressed: () => console.log("You left the chat."),
    });*/
  },
};

export { getDataListStyle };
