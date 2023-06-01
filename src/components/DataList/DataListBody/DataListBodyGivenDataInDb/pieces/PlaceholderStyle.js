import { Constants } from "src/constants/Constants";

/**
 *
 * @param {*} dataListItemHeight
 * @param {*} dataListItemWidth
 * @param {*} backgroundColor
 *
 * @returns le style à appliquer au placeholder.
 */
export function PlaceholderStyle(
  dataListItemHeight,
  dataListItemWidth,
  backgroundColor
) {
  return {
    height: dataListItemHeight,
    width: dataListItemWidth,
    backgroundColor: backgroundColor ?? Constants.defaultBackgroundColor,
    justifyContent: "center",
  };
}
