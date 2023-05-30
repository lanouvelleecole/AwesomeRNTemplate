# maslow (Une Appli Android/iOS)

Bonjour,

J'ai crée une appli Flutter nommée MaslowSchool, notre application dédiée
à la création, et au partage, de tutoriels divers et variés.
(un repo existe sur ce compte)
mais j'ai fait plein de boulettes
qui rendent la gestion du code une calamité.

à chaque fois qu'il faut faire une modification,
ou qu'il faut ajouter un truc,
c'est le stress total, un mal de tête, et des sueurs froides.
Car j'ai écrit mon code Flutter comme un gros spaghetti interminable.

Aussi, le hot reload de Flutter est problématique,
car cela me prend 10 minutes pour se mettre en mode debug via USB.
Et la connexion USB est souvent déconnectée.

Encore + de mal de têtes et sueurs froides....

Donc maintenant, je repars à zéro, et je crée une version React Native
de MaslowSchool? nommée maslow.

Je vais faire de mon mieux pour ne pas répéter les érreurs du passé.

## Les règles à respecter pour ne pas avoir mal mal à la tête

### REGLE N°1 (la + importante): Pas de long code.

Chaque fichier .js ou .tsx doit faire moins de 100 lignes.

### REGLE N° 2: un maximum de lignes de code doivent être commentés,

que tout le monde puisse déterminer ce que le code fait à peu près.

### REGLE N° 3: Internationalize les strings.

(Multilingue baby !!!)

### REGLE N° 4: Utilise un outil qui fait des templates

de screens et components et string internationaux.
Dans cette application, j'ai crée un outil de création de template,
via command line.
J'en parlerais dans quelques instants,
un peu plus bas dans la description

## La structure de notre application est comme ceci (Partant du dossier racine de l'appli)

### /src/components

Ce dossier contient les morceaux de UI (interface utilisateur) réutilisable

### /src/pages

Ce dossier contient les écrans principaux de notre appli

### /src/services

Ce dossier contient les trucs comme les API, les calculs de machin chose trucs, et consorts

### /src/stringRepos

Ce dossier contient les différents texte multilingue utilisés dans notre appli

### /src/reduxState

Ce dossier contienttous les states Redux
(Reducers, AsyncThunks, et consorts)

## IMPORTANT: Parlons de l'outil qui fait des templates

Cette application contient un outil (via command-line) qui nous permet de créer
des components, fonctions, et fichiers, ce qui nous facilitera grandement
notre vie de développeur informatique.

Nous allons maintenant parler de cet outil, car on va l'utiliser énormément,
cet outil est indispensable pour créer du code lisible et aéré, sans prise de tête.

Ci dessous je décris les commandes disponibles pour générer des templates.
Ces commandes doivent être exécutées en étant au root folder de notre appli.

## Genère un component, une page, un service, ou un repertoire de strings intl, et d'autres trucs indispensables.

npx yarn run generate something

## ajoute un string dans un répertoire de string existant

npx yarn run generate add-string

## Ajoute un template de base (App.js et consorts)

npx yarn run generate add-default-app-template

## Comment mettre en marche le méchanisme de template ? La réponse ci-dessous:

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

## Mise en marche de l'écosystème Maslow

Maslow est une librairie qui permet de créer des templates d'application React Native

(similaire à Ignite, et autres générateurs de boilerplate)

Avec ce méchanisme de template, l'application React Native
disponible dans ce répositoire Github, a été créee.

Ce application permet:

- de créer des tutoriels vidéo style Tiktok / Google Shorts / etc...

- d'uploader ces tutos, traduits en plusieurs langues via cette appli,
  le tout vers une multitude de plateformes
  (Youtube, Tiktok, etc...)

- de créer un e-commerce (via Shopify).

Les vidéos créees permettent:

- de partager son savoir dans le monde entier, et par la même occasion,
  faire de la publicité pour son compte Shopify, via upload sur plateformes de streaming vidéo,
  et diffusion de liens de partage sur une multitude de réseaux sociaux connus (tels que Reddit, Facebook)
  et aussi régionaux et/ou moins connus.

Pour utiliser le méchanisme de création de boilerplate, et aussi créer l'application,
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

Ajoute plop-templates/ et plopfile.js, si non existant,
puis exécute la commande suivante:

```
npx yarn run generate add-default-app-template
```

## Pour "Eject" de expo, et utiliser des librairies Natives

la commande suivante:

```
npx expo prebuild
```

## Pour installer la version release de l'appli, sur l'appareil Android/IOS

Avant toute chose, installons ce qu'il faut pour pouvoir créer un APK:

```
npx yarn add -g eas-cli; eas login; eas build:configure
```

Ensuite, activons Hermes.

Hermes permet une meilleure performance pour notre appli.

Ajoute ceci dans le fichier eas.json:

```

{
  "cli": {
    "version": ">= 2.3.0"
  },
  "build": {
    ....

    // CECI

    "bake_me_some_apk": {
      "android": {
        "developmentClient": true,
        "buildType": "apk",
        "gradleCommand": ":app:assembleRelease"
      }
    },

    // CECI

    ...

    "development": {
      "developmentClient": true,
      "distribution": "internal"
    },

    "preview": {
      "distribution": "internal"
    },

    "production": {}

  },
  "submit": {
    "production": {}
  }
}

```

Plus d'infos ici: https://docs.expo.dev/guides/using-hermes/

Lance la création d'AAB avec cette commande:

```
eas build
```

Lance la création d'APK avec cette commande:

```
npx expo prebuild; eas build -p android --profile bake_me_some_apk
```

Si une erreur se produit durant le build de AAB ou APK, du genre:

```
Build failed
ENOENT: no such file or directory, open '/home/expo/workingdir/build/android/gradlew'
```

Efface le dossier android/ situé au root du folder de ton appli.
Puis relance la commande

```
npx expo prebuild; eas build -p android --profile bake_me_some_apk
```

Cela peut aider à résoudre ce problème, et d'autre problèmes.
Ne perd jamais espoir quand il y a beaucoup de problèmes / d'erreurs de build.
Google and StackOverFlow is your friend.

Si tout c'est bien passé, tu peux maintenant installer
l'APK, via l'URL de téléchargement fournie via command-line.
Par exemple, voici à quoi devrait ressembler
le command line, avec Windows 10:

```
Build details: https://expo.dev/accounts/maslowschool/projects/maslow/builds/1a6391a0-fffc-448c-94c4-aa322df85711

Waiting for build to complete. You can press Ctrl+C to exit.
✔ Build finished

🤖 Android app:
https://expo.dev/artifacts/eas/4fZZDZ1zb8SfusuvK8eaM4.apk <=== L'URL souhaitée
PS C:\Users\markn\Desktop\maslow>
```

Tu peux aussi retrouver cette URL
sur la page d'accueil de ton compte Expo:

https://expo.dev/accounts/your_expo_username

par exemple, pour notre organisation, c'est:

https://expo.dev/accounts/maslowschool

si déja connecté, ou:

https://expo.dev/login

pour se connecter à ton compte Expo (sur ton appareil Android).

Dans Recent activity, le tout dernier build crée.

Avant de télécharger l'APK (FRESH), supprime celui précédemment installé,
et efface tous les apk précédemment téléchargés (PERIMéS)
Clique sur l'URL de téléchargement d'APK, et télécharge cet APK sur ton appareil Android.

Si un message de "Fichier potentiellement corrompu"
s'affiche, clique sur "Télécharger quand même"

Une fois téléchargé, clique sur l'APK.

Si un message de type "l'installation d'application provenant de cette source n'est pas autorisée",
appuie sur PARAMETRES, et sur "Autoriser cette source"
, puis installe.

Si un message chiant de Play Protect s'affiche, clique sur "INSTALLER QUAND MEME" et sur "NE PAS ANALYSER" entre autre.
Le téléphone se méfie de cet APK, mais il est clean.

## Astuces

## Raccourcis claviers utiles, et liens utiles, etc...

CTRL + K CTRL + SHIFT + S Permet de sauvegarder sans formatter le code hbs

La fabrication du créateur de template à été possible grâce à ce lien:

https://blog.logrocket.com/automatically-generate-react-components-plop-js/

https://www.reactnativeschool.com/how-to-setup-path-alias-in-a-react-native-typescript-app

## Fast refresh ne fonctionne plus ? Voila la solution

- Partant de la page ou tu fais du boulot,
  navigue vers tous les fichiers alternatifs
  menant à l'endroit ou il y a
  une modif de code à effectuer
  (via F12 dans Visual Studio Code)

- Cette navigation successive devrait avoir ouvert
  plusieurs onglets dans ton éditeur de code favori.
  Laisse les tous ouvert, et fais ta modif dans l'onglet concerné
  (cet onglet devrait être le dernier de la liste d'onglets cote à cote)

- Une fois la modif effectuée, sauvegarde l'onglet tt juste modifié.

- Si la modif n'est pas visible à l'écran, alors sauvegarde
  l'onglet tt juste avant celui que tu vient de sauvegarder
  (l'onglet immédiatement à gauche de celui que tu vient de suavegarder)

- Si la modif n'est toujours pas visible à l'écran, alors sauvegarde
  l'onglet tt juste avant celui que tu vient de sauvegarder
  (l'onglet immédiatement à gauche de celui que tu vient de suavegarder)

- Répète cette opération jusqu'a ce que les changements soient visibles
  (en général, 2 sauvegardes sont nécessaires pour voir le changement)

- Si on veut refresh une question, ill ne faut pas q'elle soit en cours d'affichage
  pour que les changements soient visibles après refresh

- Si tu essaie de démarrer l'appli (en mode development build),
  et que le Development Server n'est pas visible,
  malgré que Tailscale, et le serveur Expo soient en marche:

1. Ferme l'appli

2. Désactive, puis réactive Tailscale

3. Désactive, puis réactive le serveur Metro Bundler

4. Ré ouvre l'appli

Le serveur devrait être visible (point vert et tralala)

- Si tu rencontre une erreur du genre:

....\BundleHermesCTask.kt: (137, 11): This declaration is experimental and its usage must be marked with '@kotlin.ExperimentalStdlibApi' or '@OptIn(kotlin.ExperimentalStdlibApi::class)'

alors dans gradle-wrapper.properties, met distributionUrl comme ceci:

```
...
distributionUrl=https://services.gradle.org/distributions/gradle-7.5.1-all.zip
```

et réessaie.

- Si tu rencontre une erreur du genre:

The Android Gradle plugin supports only kotlin-android-extensions Gradle plugin version 1.6.20 and higher.
The following dependencies do not satisfy the required version:
project ':expo' -> org.jetbrains.kotlin:kotlin-gradle-plugin:1.6.10

alors dans android/build.gradle, set kotlinVersion comme ceci:

```
buildscript {
    ext {
        ...
        kotlinVersion = "1.7.0"
    }
}
```

et réessaie.

- Si tu rencontre une erreur du genre:

No compatible library found for //fbjni/fbjni. Rejected the following libraries:

ou

Execution failed for task ':expo-modules-core:configureCMakeDebug[arm64-v8a]'.

> [CXX1212] C:\Users\Shadow\Desktop\maslowschool_react_native\node_modules\expo-modules-core\android\CMakeLists.txt debug|arm64-v8a : User is using a static STL but library requires a shared STL [//fbjni/fbjni]

alors il faut upgrader la version de react-native vers 0.71 ou supérieur, via commande:

```
npx react-native upgrade
```

- Si une erreur du genre:

Could not determine the dependencies of task ':app:compileDebugJavaWithJavac'.

> Could not resolve all task dependencies for configuration ':app:debugCompileClasspath'.
> Could not find any matches for com.facebook.react:react-native:+ as no versions of com.facebook.react:react-native are available.

Se produit, alors, suis les instructions à cette page

https://github.com/facebook/react-native/issues/35210

C un fix temporaire (react-native version 0.70.5)
mais la solution ultime sera de créer un projet fresh et de migrer

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
