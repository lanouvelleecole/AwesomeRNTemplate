/* PLOP_INJECT_IMPORT */
//import React from "react";
import { Alert } from "react-native";
import i18n from "i18n-js";
import { RunIfPossible } from "src/services/RunIfPossible/RunIfPossible";
import { SoundPlayer } from "src/services/SoundPlayer/SoundPlayer";

/**
 *
 * @param {*} un objet contenant {text: "", onYesPressed: () => {}, onNoPressed: () => {}, onCancelPressed: () => {}}
 *
 * @returns rien
 *
 * Cette fonction permet de pouvoir faire des choix binaires.
 */
const OuiOuNon = ({
  text,
  onYesPressed,
  onNoPressed,
  onCancelPressed,
  clickSound,
}) => {
  Alert.alert(
    text,
    "",
    [
      {
        text: i18n.t("annuler"),
        onPress: () => {
          SoundPlayer({ sound: clickSound });

          RunIfPossible({
            func: onCancelPressed,
            args: null,
          });
        },
        style: "cancel",
      },
      {
        text: i18n.t("oui"),
        onPress: () => {
          SoundPlayer({ sound: clickSound });

          RunIfPossible({
            func: onYesPressed,
            args: null,
          });
        },
      },
      {
        text: i18n.t("non"),
        onPress: () => {
          SoundPlayer({ sound: clickSound });

          RunIfPossible({
            func: onNoPressed,
            args: null,
          });
        },
      },
    ],
    {
      cancelable: true,
      onDismiss: () => {
        SoundPlayer({ sound: clickSound });

        RunIfPossible({
          func: onCancelPressed,
          args: null,
        });
      },
    }
  );

  return;
};

export { OuiOuNon };
