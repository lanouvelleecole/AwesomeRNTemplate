import { TouchableOpacity } from "react-native";
import { Icon } from "@rneui/base";

// nécessaire
import React from "react";

export const ClickableIcon = (props) => {
  return (
    <TouchableOpacity
      style={{
        height: props.height ?? 50,
        width: props.width ?? 50,
        justifyContent: "center",
      }}
      onPress={props.onPress}
    >
      <Icon
        type={"material-community"}
        name={props.name}
        color={props.color}
        size={props.size}
      />
    </TouchableOpacity>
  );
};
