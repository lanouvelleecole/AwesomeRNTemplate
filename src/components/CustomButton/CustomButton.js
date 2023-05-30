/* PLOP_INJECT_IMPORT */
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Icon } from "@rneui/base";

/**
 *
 * 




 * 
 * @param {*} un objet contenant: {
 *   buttonText: "Le texte du bouton",
 *   buttonContainerStyle: {Le style du conteneur du bouton},
 *   buttonTextStyle: {Le style du texte du bouton},
 *   onClick: () => le boulot que doit faire le bouton qd on clique,
 *   buttonbuttonLogoName: "le nom du logo de bouton"
 *   buttonLogoSize: la taille du logo de bouton (int)
 *   color: "la couleur du logo de bouton"
 * }
 *
 * @returns un joli bouton
 */

function ButtonIconIfNeedBe(props) {
  if (props.buttonLogoName != null) {
    return (
      <Icon
        type={"material-community"}
        name={props.buttonLogoName}
        size={props.buttonLogoSize}
        color={props.buttonLogoColor}
      />
    );
  } else {
    return null;
  }
}

const CustomButton = ({
  buttonText,
  buttonContainerStyle,
  buttonTextStyle,
  onClick,
  buttonLogoName,
  buttonLogoSize,
  buttonLogoColor,
}) => {
  return (
    <TouchableOpacity style={buttonContainerStyle} onPress={onClick}>
      <ButtonIconIfNeedBe
        buttonLogoName={buttonLogoName}
        buttonLogoSize={buttonLogoSize}
        buttonLogoColor={buttonLogoColor}
      ></ButtonIconIfNeedBe>
      <Text style={buttonTextStyle}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export { CustomButton };
