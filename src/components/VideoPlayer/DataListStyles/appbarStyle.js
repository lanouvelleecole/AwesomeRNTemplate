// permet d'accéder a des globales
import { Constants } from "src/constants/Constants.js";

/**
 * les styles de la topbar
 */
export const getAppbarStyle = ({ dataList, setDataList, props }) => {
  return {
    appbarLayoutOverlaid: false,
    appbarHeight: Constants.defaultBarHeight,
    showAppbar: true,
    appbarTitle: "VideoPlayer",
    appbarFont: Constants.defaultFontFamily,
    showAppbarIcon: true,
    appbarIcon: "plus-thick",
    appbarBackgroundColor: Constants.defaultBackgroundColor,
    appbarElevation: 0,
    appbarContentColor: Constants.defaultContentColor,
    onAppbarTitleClicked: () => {
      console.log("Le titre à été cliqué dessus.");
    },
    onAppbarIconClicked: () => {
      console.log("Le all mighty icone à été cliqué dessus.");
    },
    onBackPressed: () => {
      console.log("On retourne en arrière baby baby");
    },
    appbarOptionMenuList: [
      {
        optionName: "Option 1",
        onOptionClicked: () => {
          console.log("Option 1 à été cliqué");
        },
      },
      {
        optionName: "Option 2",
        onOptionClicked: () => {
          console.log("Option 2 à été cliqué");
        },
      },
    ],
  };
};
