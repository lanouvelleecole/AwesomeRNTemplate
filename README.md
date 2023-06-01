# AwesomeTemplate (Une Appli Android/iOS React Native)

# La recette de préparation du template:

Premièrement, installe tout ce qu'il faut pour utiliser React Native,

https://reactnative.dev/docs/environment-setup

(React Native CLI Quickstart)

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

100.82.194.60 (téléphone tailscale)
100.104.36.124 (ordi tailscale)

Connecte ton telephone a ton ordinateur, via USB, puis exécute ceci, a la racine de l'appli:

```
adb disconnect; adb tcpip 5555; adb connect 100.82.194.60:5555
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

AwesomeTemplate est une appli react native (un template/canvas pour toi)
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

## Pour créer le template par défaut d'appli

```
npx maslow add-default-app-template
```

## Pour installer l'appli en mode release (APK)

npx react-native run-android --variant=release

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

## That's all Folks ! Thank you for being here reading this. I hope you'll create some beautiful computer stuff
