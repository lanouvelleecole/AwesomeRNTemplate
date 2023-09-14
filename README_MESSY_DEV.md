# Maslow (Une Appli Android/iOS React Native)

# La recette de préparation du template:

Premièrement, installe tout ce qu'il faut pour utiliser React Native,

https://reactnative.dev/docs/environment-setup

(React Native CLI Quickstart !)

!!!! IMPORTANT !!!!

Si après installation, la commande de terminal

```
java -version
```

ne fournit pas le JDK version 11,

alors installe Java 11, via ce site de téléchargement,
et cette vidéo Youtube

https://jdk.java.net/archive/
https://www.youtube.com/watch?v=CIuB3qwLdbk

puis crée un projet React Native:

```
npx react-native init AppName
```

Connecte ton telephone a ton ordinateur,
via USB, puis exécute ceci, a la racine de l'appli:

```
adb disconnect; npx react-native run-android
```

## Pour développer en wifi

Installe Tailscale sur ton appareil Android, et ouvre le.

Installe Tailscale sur ton ordinateur, et ouvre le.

Note l'IP Tailscale de ton phone.
Note aussi l'IP Tailscale de ton ordi.

par exemple:

100.91.128.132 (téléphone tailscale)
100.104.36.124 (ordi tailscale)

Connecte ton telephone a ton ordinateur, via USB, puis exécute ceci, a la racine de l'appli:

```
adb disconnect; adb tcpip 5555; adb connect <addr phone>:5555
```

Une fois connecté, tu peux débrancher le cable USB.

Ouvre l'appli en cliquant sur l'icone correspondante.

Ensuite secoue le téléphone pour faire apparaitre le menu de dev.

Ensuite clique sur l'option 'Settings', puis 'Debug server host & port for device'

Et écrit l'IP de l'ordi accompagné du port 8081, comme ceci:

```
100.104.36.124:8081
```

et appuie sur OK pour sauvegarder.

Ensuite ferme l'appli.

Une fois tout ceci fait, tu peux faire du dev
avec cette commande toute simple, à la racine du dossier de l'appli:

```
npx react-native start
```

cette commande démarre le serveur Metro, ensuite tu peux démarrer l'appli en cliquant sur l'icone,
et tu peux programmer ton appli, et voir les changements en direct après sauvegarde de code.

Pour build l'appli sans install, durant debug, pour check si le build se fait sans erreur, utilise cette commande, dans <root>/android/ folder:

```
./gradlew assembleDebug
```

ou

```
./gradlew assembleRelease
```

## C'est quoi ce repo ?

Maslow est une appli react native (un template/canvas pour toi)
qui permet de t'aider à créer l'appli de tes rêves, avec l'aide de MaslowGPT,
le magicien savant fou.

Pour utiliser le méchanisme de création de template (MaslowGPT), et aussi créer l'application,
il faut faire plein de trucs (explication masterclass)
Ci dessous on va décrire tout ce qu'il faut pour lancer l'écosystème Maslow/l'appli.

Exécute les commandes suivante, à la racine de l'application,
pour installer les dépendences:

### babel-plugin-module-resolver

```
npx yarn add babel-plugin-module-resolver --dev;
```

il faut aussi ajouter un alias pour paths
crée jsconfig.json si non existant, puis ajoute ceci:

```

{
  "compilerOptions": {
    // *** La config du path aliasing ***
    "baseUrl": ".",
    "paths": {
      "src/*": ["src/*"],
      "assets/*": ["assets/*"]
    }
    // ***********************************
  }
}

```

crée un tsconfig.json aussi, avec ceci dedans:

```

{
  "extends": "@tsconfig/react-native/tsconfig.json",
  "compilerOptions": {
    // *** La config du path aliasing ***
    "baseUrl": ".",
    "paths": {
      "src/*": ["src/*"],
      "assets/*": ["assets/*"]
    }
    // ***********************************
  }
}

```

crée un fichier .babelrc, si non existant, et ajoute ceci dedans:

```

{
    "plugins": [
        ["module-resolver", {
        "root": ["./"],
        "alias": {
            "src": "./src",
            "assets": "./assets"
        }
        }]
    ]
}

```

### react-navigation & friends

```
npx yarn add @react-navigation/native; npx yarn add react-native-screens react-native-safe-area-context; npx yarn add @react-navigation/native-stack;
```

Setup Android/IOS Natif

https://reactnavigation.org/docs/getting-started/#installation

### expo & friends

```
npx install-expo-modules@latest; npx expo install expo-constants; npx expo install expo-localization; npx expo install expo-font; npx expo install expo-av; npx expo install expo-asset; npx expo install expo-sqlite; npx yarn add expo-modules-core; npx expo install expo-screen-orientation; npx expo install expo-localization;
```

Setup Android/IOS Natif

https://docs.expo.dev/bare/installing-expo-modules/
https://github.com/expo/expo/tree/sdk-48/packages/expo-av
https://github.com/expo/expo/tree/sdk-48/packages/expo-asset
https://github.com/expo/expo/tree/sdk-48/packages/expo-sqlite
https://github.com/expo/expo/tree/sdk-48/packages/expo-screen-orientation

### i18n-js préhistorique

```
npx yarn add i18n-js@3.9.2;
```

### expo-splash-screen

```
npx expo install expo-splash-screen;
```

Setup Natif

```
npx yarn expo-splash-screen --help
```

https://github.com/expo/expo/tree/sdk-48/packages/expo-splash-screen#-installation-in-bare-react-native-projects

### react-native-paper préhistorique

```
npx yarn add react-native-paper@5.0.0-rc.6; npx yarn add react-native-vector-icons;
```

Setup natif:

https://callstack.github.io/react-native-paper/docs/guides/getting-started
https://github.com/oblador/react-native-vector-icons#installation

### react-redux & friends

```
npx yarn add react-redux; npx yarn add @reduxjs/toolkit;
```

### rn elements

```
npx yarn add @rneui/themed @rneui/base;
```

### react-native-blob-util

```
npx yarn add react-native-blob-util;
```

### react-native-uuid

```
npx yarn add react-native-uuid;
```

### date-fns

```
npx yarn add date-fns;
```

### expo-notifications

```
npx expo install expo-notifications
```

Setup natif:

https://www.npmjs.com/package/expo-notifications

aussi, dans android/build.gradle, set kotlinVersion comme ceci:

```
buildscript {
    ext {
        ...
        kotlinVersion = "1.7.0"
    }
}
```

pour éviter une erreur de style 'The Android Gradle plugin supports only kotlin-android-extensions Gradle plugin version 1.6.20 and higher.'

L'écosystème maslow à besoin des dossiers/fichiers suivants, pour générer des templates:

src/
assets/
jsconfig.json
babel.config.js
.babelrc

## pour installer un linter (affiche les erreurs dans le code: imports/variables manquantes, etc...)

Efface tout fichier eslintrc.js ou eslintrc.json ou eslintrc.qqchose déja existant, puis exécute la commande ci dessous:

```
npx yarn add eslint-plugin-react; npx yarn add eslint --dev; npm init @eslint/config; npx yarn add eslint-plugin-react-native --dev; npx yarn add eslint-plugin-unused-imports --dev; npx yarn add eslint-plugin-import --dev; npx yarn add eslint-import-resolver-alias --dev
```

Choisis les choses suivantes:

```

√ How would you like to use ESLint? · problems
√ What type of modules does your project use? · esm
√ Which framework does your project use? · react
√ Does your project use TypeScript? · No
√ Where does your code run? · browser
√ What format do you want your config file to be in? · JSON
The config that you've selected requires the following dependencies:

eslint-plugin-react@latest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest
√ Would you like to install them now? · Yes
√ Which package manager do you want to use? · yarn
Installing eslint-plugin-react@latest, @typescript-eslint/eslint-plugin@latest, @typescript-eslint/parser@latest

```

Puis ajoute ceci dans le fichier .eslintrc.json:

```

{
    "env": {
        ...
        "react-native/react-native": true
    },
    ...,
    "extends": [
      ...,
    ],
    "parserOptions": {
      ...
      "ecmaFeatures": {
        "jsx": true,
        "modules": true
      }
    },
    "plugins": [
        ...,
        "react-native",
        "unused-imports",
        "import"
    ],
    "rules": {
        ...
        "no-unused-vars": ["warn", { "args": "none" }],
        "react/prop-types": "off",
        "import/no-unresolved": [2, {"commonjs": true, "amd": true}],
        "unused-imports/no-unused-imports": "error"
    },
    "settings": {
        ...,
        "import/resolver": {
            "alias": {
                "extensions": [".js", ".jsx", ".ts", ".tsx"],
                "map": [
                    ["src", "./src"],
                    ["assets", "./assets"]
                ]
            }
        }
    }
}


```

Crée .eslintignore, et ajoute ceci dedans:

```
node_modules/
assets/
app.json
babel.config.js
eas.json
jsconfig.json
tsconfig.json
package.json
README.md
yarn.lock
package-lock.json
plop-templates/
plopfile.js
```

Dans package.json, section scripts, ajoute ceci:

```
"scripts": {
  ....,
  "lint": "eslint .",
  "fix-lint-errors": "eslint . --fix"
}
```

Tu peux ensuite utiliser le lint
avec la commande:

```
npx yarn run lint
```

Tu peux résoudre un bon nombre d'erreur avec la commande:

```
npx yarn run fix-lint-errors
```

Pour pouvoir voir les lints dans VS CODE, suis les étapes décrites dans la première réponse de ce StackOverFlow:

https://stackoverflow.com/questions/39997022/show-all-warnings-and-errors-in-visual-studio-code

Résumé: Installe l'extension ESLint pour VS Code, puis CTRL+MAJ+P, puis écris "User Settings", puis sélectionne celui avec 'JSON' dedans, puis ajoute cettte ligne de code dans l'objet:

"eslint.lintTask.enable": true,

puis save, enfin clique 'Terminal/Run Task' et sélectionne 'eslint: lint whole folder'

## Pour créer le template par défaut d'appli

```
npx maslow add-default-app-template
```

## Pour formatter le code on save (VS Code)

Tape Ctrl + MAJ + P puis écris 'User Settings", et sélectionne celui avec 'JSON'

puis ajoute ce key: value dans l'objet:

"editor.formatOnSave": true


## Pour installer l'appli en mode release (APK)

npx react-native run-android --variant=release

## Pour créer des APK de debug/release, sans avoir a utiliser USB, via EXPO EAS (très utile pour ceux qui font du RDP style Shadow PC, etc... et qui utilisent leur smartphone pour accéder à leur Remote PC)

https://docs.expo.dev/build/setup/

## Pour Utiliser Genymotion SAAS 

Installe Python3

https://www.python.org/downloads/

Vérifie que android sdk platform tools et adb sont bien installés.
Ouvre CMD (Windows), puis exécute cette commande:

```
echo %ANDROID_HOME%
```

Exécute cette commande, pour s'assurer qu'ADB est bien up n running

```
adb version;
```

ceci doit retourner la version d'ADB si tout est OK

Inscris toi à Genymotion Saas et crée un machine (START button)
(sauvegarde cete machine, (bouton Save) et donne lui un nom)
(la première heure d'émulation est gratuite)

https://cloud.geny.io/

Installe gmsaas
(le truc qui permet d'interagir avec Genymotion via cmd et adb)

```
pip3 install --user gmsaas
```

si la commande gmsaas n'est pas disponible, ajoute

%APPDATA%\Roaming\Python\Python311\Scripts
(ou equivalent pour autres OS que Windows)

à la variable d'env Path

https://docs.genymotion.com/gmsaas/01_Get_Started/

Set le path du SDK android, comme ceci par ex.

```
gmsaas config set android-sdk-path <PATH TO ANDROID SDK HERE>
```

```
gmsaas config set android-sdk-path C:\Users\Shadow\AppData\Local\Android\Sdk
```

login

```
gmsaas auth login <email> [password]
```

Check ton login avec cette commande (si tu es logged in, ton adresse mail devrait etre à l'écran):

```
gmsaas auth whoami
```

Run cette commande pour build un apk de debug
(available at android/app/build/outputs/apk/debug/app-debug.apk)

```
npm run build-debug-apk
```

En case d'erreur
error ENOENT: no such file or directory, open '<PATH TO YOUR APP FOLDER>\android\app\src\main\assets\index.android.bundle'.
create the assets folder as per below.
android/app/src/main/assets

Run cette commande pour démarrer une instance de machine virtuelle Genymotion 
(a partir de l'UUID et le nom de recipe (dispo ici https://cloud.geny.io/recipes) fourni en input)

```
npm run start-genymotion <recipe UUID here> <Recipe Name here> --no-wait
```

```
npm run start-genymotion 0e4331a6-3f9b-48c3-8108-2d4abe032e0f MaslowPhone --no-wait
```

Ouvre la fenetre de machine virtuelle.

Cette commande printera un UUID d'instance. Fournis cet UUID d'instance, à cette commande ci dessous,
pour rendre l'emulateur Genymotion visible par ADB

```
npm run bridge-geny-adb <Instance UUID printed from last command, goes here>
```

Maintenant, run adb devices, pour voir si l'emulateur est visible

```
adb devices
```

Si l'émulateur est visible par ADB, tu peux finalement run la dernière commande
ci dessous, qui installe l'APK sur la machine virtuelle, puis lance cette appli sur la machine virtuelle.
(remplace <yourApplicationId> par l'applicationId de ton appli RN, 
dans le script de cette commande, dans package.json, 
avant de lancer cette commande)

```
npm run install-and-start-app
```

## Troubleshooting

- Si une erreur du genre:

INSTALL_FAILED_USER_RESTRICTED: Install canceled by use

se produit, alors utilise ce post StackOverFlow pour t'aider à résoudre le problème:

https://stackoverflow.com/questions/47239251/install-failed-user-restricted-android-studio-using-redmi-4-device

- Ajoute l'id de l'appli dans AndroidManifest, comme ceci:

```
<manifest xmlns:android="http://schemas.android.com/apk/res/android" package="com.pkgname">

```

si erreur du genre:

error Failed to build the app: No package name found. Found errors in C:\Users\Shadow\Desktop\maslow\android\app\src\main\AndroidManifest.xml.

Si tu as des erreurs du style: EOF ou Device offline, durant installation de l'appli via USB,
alors rends toi dans le menu pour developpeurs, 
puis désactive et réactive les paramètres de dev (via le bouton de topbar) 
puis scrolldown et réactive 'Débogage USB' , 
et annule toutes les autorisations USB.
Puis rebranche l'appareil Android, via USB, et patiente quelques instants
jusqu'a ce que la demande d'authorisation apparaisse. Selectionne OK (et coche Toujours autoriser cet appareil)

Réessaie l'installation via USB. Le problème devrait etre résolu.

## Pour debugger une appli React Native (les breakpoints c'est PRIMORDIAL dans la vie d'un developpeur frontend/backend qui souhaite garder une bonne santé mentale ;-)

Télécharge Flipper Desktop

https://fbflipper.com/

Extrait l'archive, dans un dossier dédié.

Déplace ce dossier vers un endroit safe 
(tu peux aussi le laisser dans le dossier de Téléchargements, mais veille à ne pas supprimer ce dossier)

Ouvre ce dossier, et exécute Flipper.exe

Clique l'icone 'Troubleshoot' (l'icone avec un logo d'insecte, bug)

Clique sur 'Setup Doctor'.

Si tu as des warnings liés à OpenSSL et Watchman,
Ouvre un cmd EN MODE ADMINISTRATEUR 
(TRES IMPORTANT, SANS ADMIN PRIVILEGE, il y aura des soucis)
puis exécute cette commande pour installer ces 2 outils:

```
choco install openssl; choco install watchman
```

Sélectionne 'Yes for all'

Refresh le 'Setup Doctor' pour voir si les warnings sont résolus.

Visite le fichier android/gradle.properties, et set FLIPPER_VERSION à 0.182.0:

```
# Version of flipper SDK to use with React Native
FLIPPER_VERSION=0.182.0
```

TRES IMPORTANT !! MUY IMPORTANTE !!
VERY IMPORTANT !! 

Si ton appli React Native à déja été installée sur ton appareil,
alors désinstalle la, puis connecte ton appareil à ton ordinateur, via USB,
puis run cette commande pour lancer l'appli:

```
npm run start-debug
```

Une fois l'appli installée et lancée, secoue ton appareil, 
ou press .... (si tu utilises l'emulateur) ,
pour faire apparaître le menu de dev.

Sélectionne 'Settings', puis 'Debug server host & port for device'

Ecris-y l'adresse ip de ton appareil local (ton ordinateur Windows 10/Linux/IOS)
accompagnée du port 8081, comme ceci:

<PHONE_IP_ADDR>:8081

par ex.

100.126.102.122:8081

Puis appuie OK pour save.

Enfin reload ton appli.

Une fois installée, et setup effectué, alors tu peux set des breakpoints dans ton code, et enfin pouvoir stop nd watch ton code, comme les développeurs sains d'esprit le font ! Sans maux de tête, et sans pensées suicidaires....Car oui, un développeur qui n'utilise pas de breakpoints dans son code, est soit dépressif/masochiste/suicidaire, soit un extraterrestre ultra évolué dont l'intellect me dépasse. ;-) 

Donc, REGLE N°1: TOUJOURS UTILISER UN DEBUGGEUR ET DES BREAKPOINTS !!!!!!

Flipper est vraiment un super outil ! J'ai essayé diverses méthodes de débug pour React Native (via VS CODE, React Native Debugger, Chrome DevTools, Reactotron, etc...) Mais malheureusement je n'ai pas pu parvenir à correctement mettre en marche le méchanisme de breakpoints.... Jusqu'a ce que j'entende parler de Flipper..... et bingo ! En cas de problème, laisse un commentaire dans la section 'Issues' de ce repo, et moi, ou un membre de la communauté Maslow, se fera un grand plaisir de t'aider.

## Pour bosser sur une appli React Native, armé de son débugger ;-)

Branche ton phone à ton appareil, via USB.

Exécute cette commande

```
npm run start-wireless-debug
```

Ci dessous, une description détaillée de ce que fait cette commande

Si tu souhaites pouvoir débrancher le cable USB, alors run cette commande:

```
adb disconnect; adb tcpip 5555; adb connect <PHONE_ADDR_IP>:5555
```

par ex.

```
adb disconnect; adb tcpip 5555; adb connect 100.82.194.60:5555
```

Ensuite débranche le cable USB, et run la commande: adb devices

l'output devrait être semblable à:

> adb devices
List of devices attached
<PHONE_ADDR_IP>:5555      device

Une fois connecté en USB, ouvre Flipper, puis lance la commande:

```
npm run start-debug
```

Une fois l'application lancée, tu devrais maintenant être capable d'ajouter
un ou plusieurs breakpoints dans ton code, avec:

```
debugger;
```

et la fenêtre de Flipper te permettra d'inspecter ton programme en détail, pour résoudre des bugs, et avancer dans tes aventures créatives.

## Pour fermer tous les tabs de vs code, sauf celui actuellement edité (via shortcut)

Press: ctrl + k + ctrl + s to open Keyboard Shortcuts, search for Close Other View: Close Other Editors in Group -> bind it to whatever you want


## pour désactiver Google Assistant (pour éviter perturbations avec clavier bluetooth, quand tu utilises un PC Cloud style Shadow PC, sur ton appareil Android, via appli dédiée, avec clavier bluetooth connecté au phone Android)

+ d'infos ici:

https://www.reddit.com/r/Android/comments/9xqo0s/how_i_finally_got_rid_of_google_assistant/?rdt=55413

## En cas de freeze sans fin, durant installation d'appli via USB 

Ferme Tailscale, et Virtual USB Client, sur le PC cloud.
Puis ré-ouvre les 2.

Ferme Tailscale, et Virtual USB Server, sur l'appareil local (PC local ou appareil android local)
Puis ré-ouvre les 2.

Révoke les autorisations USB dans menu de developeur Android.

Réessaie ton machin chose via USB ;-)

La vie est dure lorsqu'on n'a pas un PC local puissant,
et qu'on est obligé d'utiliser des PC cloud comme Shadow PC (que j'aime beaucoup, mais dont la gestion de périphérique via USB laisse à désirer ;-)

## pour debugger une appli React Native avec VS Code (set breakpoints, etc...)

Télécharge l'extension 'React Native Tools' pour VS CODE.

Press 'CTRL + SHIFT + D', ou clique sur l'icone 'Run and Debug'.

Si il n'y a pas de fichier .vscode/settings.json existant, crée le en cliquant sur 'create a launch.json file'. 

Select debugger doit être 'React Native'. 

Pick debug configuration doit être 'Attach to packager'.

Lance le serveur Metro (npm start)

Efface toutes les données de ton appli React Native, puis lance ton application React Native, puis Shake ton appareil/emulateur, ajoute <ip_local_pc>:8081 dans 'Settings/Debug server port & host', 

Clique sur l'icone play du debugger - Attach to packager
pour démarrer LE LISTENER DE DEBUGGING

puis shake ton smartphone/emulateur, et sélectionne 'Debug'
pour activer le mode debugging.


Reload l'appli React Native, et patientes quelques temps.

Une fois l'appli démarrée, interagis avec une UI ayant des breakpoints, et...... TADAM !!! Les breakpoints seront atteints dans des tabs !!

Si les breakpoints ne sont pas atteints, veille à ce que aucune fenêtre 

http://localhost:8081/debugger-ui

ne soit ouverte dans aucun navigateur de ton appareil de dev.

Veille aussi à ce que ton téléphone/emulateur soit sur le même réseau que ton appareil de dev (PC local ou PC cloud comme Shadow. Tailscale peut t'aider à ce que ton smartphone soit sur le même réseau que ton PC. Vois cette section pour + d'informations: https://comingsoon.com/;-)

Veille aussi à ce que tu ais bien activé le 'Debug' dans le menu de dev de ton smartphone. Si le débug est bien activé, 'Stop debugging' should be displayed in that menu, instead of 'Debug'.

Si tu suis tous ce processus, alors tu pourras faire du debug via breakpoints, le tout sans cable USB nécessaire. Hourra !! Néanmoins, Le plus gros défaut de cette technique, est que le temps de démarrage de l'appli est peu long (voire même très long parfois),  surtout quand tu utilise un appareil local plûtot qu'un émulateur. C'est pourquoi le debugging via Flipper est ma méthode préférée !

## Pour utiliser Firebase/Firestore

Go to

https://https://console.cloud.google.com/apis/credentials

and setup the OAUTH Consent stuff.

Choose 'External' for the User Type

After that, add all the required fields. You can ignore the fields that are not required, for now.
We'll worry more about these shenanigans later, when we'll publish your app to the Google Play Store.

Once the OAUTH stuff is created, go to the OAUTH Consert screen page,

https://https://console.cloud.google.com/apis/credentials/consent

and set the publication state to 'Production' mode

Then go to 

https://console.cloud.google.com/apis/credentials

and click on the button to create credentials, and choose the OAUTH Client ID option

Choose 'Web Application' as the Application Type,
and click 'Create'
