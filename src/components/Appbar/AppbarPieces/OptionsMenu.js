import { IconList } from "src/components/IconList/IconList";

// nécessaire
import React from "react";

export const OptionsMenuOrNot = (props) => {
  if (props.appbarStyle.showAppbarMenuIcon === true) {
    return (
      <IconList
        name={"dots-vertical"}
        color={props.appbarStyle.appbarContentColor}
        size={props.appbarStyle.appbarIconSize}
        width={props.appbarStyle.appbarIconWidth}
        height={props.appbarStyle.appbarIconHeight}
        iconChoicesList={props.appbarStyle.appbarOptionMenuList}
        font={props.appbarStyle.appbarFont}
        clickSound={props.appbarStyle.clickSound}
      />
    );
  } else {
    return null;
  }
};
