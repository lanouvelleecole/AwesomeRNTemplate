import { Constants } from "src/constants/Constants";

export const getBottomBarStyle = ({ dataList, setDataList, props }) => {
  return {
    bottomBarLayoutOverlaid: false,
    showBottomBar: true,
    bottomBarHeight: Constants.defaultBarHeight,
    bottomBarBackgroundColor: "pink",
    bottomBarElevation: 0,
    bottomBarIconsColor: Constants.defaultContentColor,
    bottomBarIconsList: [
      {
        // https://materialdesignicons.com/
        iconName: "plus-thick",
        onIconClicked: () => {
          /*console.log("Plus clicked !!!");*/
        },
      },
    ],
  };
};
