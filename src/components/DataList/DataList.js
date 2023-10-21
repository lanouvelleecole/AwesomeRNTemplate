/* PLOP_INJECT_IMPORT */
import { DataListBody } from "src/components/DataList/DataListBody/DataListBody";
import { Appbar } from "src/components/Appbar/Appbar";
import { BottomBar } from "src/components/BottomBar/Bottom";
import { React, useEffect, useState } from "react";
import { Dimensions, View } from "react-native";
import { styles } from "./DataList.style.js";
import { GetOrientation } from "src/services/GetOrientation/GetOrientation.js";
import { Delay } from "src/services/Delay/Delay.js";

/**
 *
 * @param {*} appbarStyle, les styles et callbacks
 * à appliquer à la barre du haut de l'écran.
 *
 * @param {*} bottomBarStyle, les styles et callbacks
 * à appliquer à la barre du bas d'écran.
 *
 * @param {*} dataListStyle, les styles et callbacks
 * à appliquer au body de l'écran.
 *
 *
 * @param {*} dataItems, une liste d'items à afficher,
 * via notamment dataListStyle.renderDataListItem.
 *
 * @param {*} importantData, contient les infos nécessaire au bon scroll one by one,
 * pour éviter re-renders inutiles.
 * contient notamment l'index de l'item en cours de visionnage.
 *
 * @param {*} setCurrentIndex, modifie l'index de l'item en cours de visionnage.
 * valable si dataListStyle.dataListScrollDirection
 * ==
 * "horizontal_one_by_one" ou "vertical_one_by_one"
 *
 * @param {*} backgroundColor, la couleur d'arrière plan
 * de l'écran
 * (pour placeholders onebyoneflatlist par ex.)
 *
 *
 * @returns la liste de données scrollable.
 */

const DataList = ({
  appbarStyle,
  bottomBarStyle,
  dataListStyle,
  dataItems,
  importantData,
  setCurrentIndex,
  backgroundColor,
}) => {
  // "PORTRAIT" or "LANDSCAPE", based on the current screen orientation
  const [refresh, setRefresh] = useState(false);

  // permet refresh qd changement d'orientation d'ecran
  const orientation = GetOrientation({
    onOrientationChanged: async (newOrientation) => {
      //console.log(`new orient.: ${newOrientation}`);

      setRefresh(true);

      await Delay(100);

      setRefresh(false);

    }
  });

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: dataListStyle.backgroundColor },
      ]}
    >
      {!refresh && <View
        style={[
          styles.container,
          { backgroundColor: dataListStyle.backgroundColor },
        ]}
      >
        {/* la appbar (optionnelle) */}
        <Appbar appbarStyle={appbarStyle}></Appbar>

        {/** 
      le body, le steak. Pour pouvoir déterminer 
      la taille appropriée à donner à ce component,
      il nous faut connaitre la taille de l'apbar/bottom bar,
      ainsi que leur actuelle présence.
      */}
        <DataListBody
          dataListStyle={dataListStyle}
          appbarStyle={appbarStyle}
          bottomBarStyle={bottomBarStyle}
          dataItems={dataItems}
          importantData={importantData}
          setCurrentIndex={setCurrentIndex}
          backgroundColor={backgroundColor}
          orientation={orientation}
        ></DataListBody>

        {/* le bottom bar */}
        <BottomBar bottomBarStyle={bottomBarStyle}></BottomBar>
      </View>}
    </View>
  );
};

export { DataList };