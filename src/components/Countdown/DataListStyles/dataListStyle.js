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
const dataListItemLayout = ({ item }) => {
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
    backgroundColor: "pink",
    contentColor: Constants.defaultContentColor,
    emptyDBMsgData: {
      messageText:
        "La base de données est vide. Crée quelque chose de fantastique avec le bouton ci-dessous.",
      messageTextColor: Constants.defaultContentColor,
      messageTextFont: Constants.defaultFontFamily,
      backgroundColor: "pink",
      iconPath: logo,
      iconWidth: 100,
      iconHeight: 100,
      buttonBackgroundColor: "purple",
      buttonLogoName: "plus-thick",
      buttonLogoSize: 30,
      buttonLogoColor: "white",
      buttonText: "Crée quelque chose",
      buttonTextColor: "white",
      buttonTextFont: Constants.defaultFontFamily,
      onButtonClicked: () => {
        /*console.log("Il est temps de passer aux choses sérieuses... Créons une belle chose !");*/
      },
    },
    renderDataListItem: dataListItemLayout,
    onListEndPushed: () => {
      /*console.log(`We're at the end of the list... Time to do some work...`);*/
    },
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
    /*console.log(`item clicked. Item data is: ${itemData}`);*/
  },
  onItemLongPress: (itemData) => {
    /*console.log(`item long clicked. Item data is: ${itemData}`);*/
    /*
    OuiOuNon({
      text: "Do we do something ?",
      onYesPressed: () => /*console.log("yes we do."),
      onNoPressed: () => /*console.log("no we don't."),
      onCancelPressed: () => /*console.log("You left the chat."),
    });*/
  },
};

export { getDataListStyle };
