/* PLOP_INJECT_IMPORT */
import {PlayerGTAInstance} from 'src/constants/PlayerGTA/PlayerGTA';
import {React} from 'react';
import logo from 'assets/images/icon.png';
import {DataListItem} from 'src/components/DataListItem/DataListItem';

// permet d'accéder a des globales
import {Constants} from 'src/constants/Constants.js';
import {useRoute} from '@react-navigation/native';

/* PLOP_INJECT_CODE */

/**
 * les styles du torse
 * de la liste.
 *
 * Il faut fournir les styles
 * de l'appbar et du bottom bar,
 * car la heuteur et largeur de la liste de données
 * dépend du style appliqué a l'appbar et bottom bar.
 */
const getDataListStyle = props => {
  return {
    // la couleur d'arrière plan par défaut de la liste de données.
    backgroundColor: Constants.defaultBackgroundColor,

    // la couleur par défaut du texte de la liste de données
    contentColor: Constants.defaultContentColor,

    // le lecteur audio de clic
    clickSound: PlayerGTAInstance.GetSound(),

    // les styles à appliquer au message de base de données vide.
    emptyDBMsgData: {
      // le texte à afficher
      messageText:
        'La base de données est vide. Bouge ton cul et crée quelque chose qui te rapportera un revenu.',

      // la couleur/font/etc... du texte
      messageTextColor: Constants.defaultContentColor,
      messageTextFont: Constants.defaultFontFamily,
      messageTextSize: 22,
      messageMarginLateral: 15,

      // le lecteur audio de clic
      clickSound: PlayerGTAInstance.GetSound(),

      // la couleur d'arrière plan
      backgroundColor: Constants.defaultBackgroundColor,

      // l'image au dessus du texte
      iconPath: logo,

      // hauteur/largeur de l'image
      iconWidth: 30,
      iconHeight: 30,

      // la couleur d'arrière plan du bouton
      buttonBackgroundColor: 'orange',

      // la marge latérale du bouton
      buttonLateralMargin: 10,

      // des icones venant de https://materialdesignicons.com/
      // le logo du bouton
      buttonLogoName: 'logo-google',

      // la taille du logo du bouton
      buttonLogoSize: 30,

      // la couleur du logo du bouton
      buttonLogoColor: 'red',

      // le texte a afficher dans le bouton
      buttonText: 'B.T.C.',

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
    renderDataListItem: ({item, index}) => {
      return (
        <DataListItem
          itemData={item}
          itemStyle={itemStyle(item, index, props)}
        />
      );
    },

    // si renderOnlyItemOnScreen = true
    // et dataListScrollDirection == "vertical_one_by_one" ou "horizontal_one_by_one"
    // qu'affiche t'on pour les items entourant l'item visible à l'écran.
    // les personnages non joueurs (PNJ - NPC)
    renderNPCDataListItem: ({item, index}) => {
      return (
        <DataListItem
          itemData={item}
          itemStyle={itemStyle(item, index, props)}
        />
      );
    },

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
    dataListScrollDirection: 'vertical',
  };
};

/** Les styles/callbacks à appliquer au layout d'un DataListItem individuel */
const itemStyle = (item, index, extra) => {
  const route = useRoute();
  return {
    // la couleur du texte et consorts, dans le DataListItem
    contentColor: Constants.defaultContentColor,

    // le style du texte
    contentFont: Constants.defaultFontFamily,

    // la couleur d'arrière plan
    backgroundColor: Constants.defaultBackgroundColor,

    // l'url ou uri local du thumbnail de l'item
    thumbUrl: null,
    thumbPath: null,

    // le nom de l'item
    itemName: `${item.name}`,

    // le lecteur audio de clic
    clickSound: PlayerGTAInstance.GetSound(),

    // 1 ou plusieurs informations a propos de l'item
    itemsInfos: [
      {
        // self explanatory
        infoIconUrl: null,
        infoIconPath: null,
        infoTxt: `id = ${item.uniqueId}`,
      },
    ],
    onItemClicked: () => {
      console.log(`item clicked !`);
    },
    onItemLongPress: () => {
      console.log(`item long clicked. Item name is: ${item.name}`);

      /*
      OuiOuNon({
        text: "Do we do something ?",
        onYesPressed: () => {
          SqliteReduxMessager.DeleteSpecificRowsFromDB({
            rowName: "uniqueId",
            rowValue: item.uniqueId,
            onSuccess: (qtyAffected) => {
              console.log(
                `suppression de ${qtyAffected} chose(s) effectué avec succès !`
              );
            },
            onError: (e) => {
              console.log(`échec durant suppression de ${item.name}`);
            },
          });
        },
        onNoPressed: () => console.log("no we don't."),
        onCancelPressed: () => console.log("You left the chat."),
      });*/
    },
  };
};

export {getDataListStyle};
