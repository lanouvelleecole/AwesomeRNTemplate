import {Platform, ToastAndroid, Alert} from 'react-native';
import {React} from 'react';
import {Snackbar} from 'react-native-paper';
import {app_strings} from 'src/stringRepos/AppStrings/AppStrings';
import {SoundPlayer} from 'src/services/SoundPlayer/SoundPlayer';

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
const Messager = props => {
  if (props.snackbarVisible) {
    showSnackbar(props.message);
  }

  return;
  /*return (
    <Snackbar
      style={{zIndex: 42}}
      visible={props.snackbarVisible}
      onDismiss={props.onDismiss}
      action={{
        label: app_strings.t('OK'),
        onPress: () => {
          SoundPlayer({sound: props.clickSound});
        },
      }}>
      {props.message}
    </Snackbar>
  );*/
};

function showSnackbar(message) {
  if (Platform.OS === 'android') {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  } else if (Platform.OS === 'ios') {
    Alert.alert(message);
  }
}

export {Messager};
