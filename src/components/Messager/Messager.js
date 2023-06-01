import { React } from "react";
import { Snackbar } from "react-native-paper";
import i18n from "i18n-js";
import { SoundPlayer } from "src/services/SoundPlayer/SoundPlayer";

/* PLOP_INJECT_GLOBAL_CODE */
/**
 *
 * un objet props {} contenant {
 *   route: { nous permet de pouvoir passer des données entre écrans },
 *   navigation: <un objet qui nous permet de naviguer d un écran vers un autre>
 * }
 *
 *
 * @returns une liste d'items crées par toi, l'utilisateur de l'appli.
 */
const Messager = (props) => {
  return (
    <Snackbar
      style={{ zIndex: 42 }}
      visible={props.snackbarVisible}
      onDismiss={props.onDismiss}
      action={{
        label: i18n.t("OK"),
        onPress: () => {
          SoundPlayer({ sound: props.clickSound });
        },
      }}
    >
      {props.message}
    </Snackbar>
  );
};

export { Messager };
