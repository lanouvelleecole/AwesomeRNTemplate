import { View } from "react-native";
import { Constants } from "src/constants/Constants";
import { React, memo } from "react";

/**
 *
 * @param {*} item, l'item à transformer en UI
 *
 * @param {*} index, l'index de  l'item à transformer en UI
 *
 * @param {*} dataListStyle, styles/callbacks, a appliquer a l'item.
 *
 * @param {*} dataListItemHeight, la hauteur de l'UI de l'item.
 *
 * @param {*} dataListItemWidth, la largeur de l'UI de l'item.
 *
 * @returns le PNJ, qui doit être la pour faire joli, ou en anticipation.
 */
const NPC = ({
  dataListItemHeight,
  dataListItemWidth,
  dataListStyle,
  item,
  index,
}) => {
  return (
    <View
      style={{
        height: dataListItemHeight,
        width: dataListItemWidth,
        backgroundColor: Constants.defaultBackgroundColor,
        justifyContent: "center",
        //alignItems: "center",
      }}
    >
      {dataListStyle.renderNPCDataListItem({
        item: item,
        index: index,
      })}
    </View>
  );
};

const MemoizedNPC = memo(NPC);

export { MemoizedNPC };
