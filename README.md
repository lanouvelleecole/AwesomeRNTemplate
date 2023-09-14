# <YOUR_APP_NAME> (A beautiful & humble React Native app template)

## Create a React Native app using the npx <MAS> create-react-native-app command

Install <MAS_CAMEL>GPT from npm

https://npmjs.com/LINK_COMING_SOON

Run the following command, and follow the steps, to create your very own React Native App

(It could be the next big thing, or your own little recipe cooking or todo app ! Your imagination is the limit ;-)

```
npx <MAS> create-react-native-app
```

Once created, navigate to the root folder of this baby app, and install the npm dependencies

```
cd 'path_to_root' && npm i
```

To install your app on a physical Android device, do the following:

Turn on developer options in your android device.

Turn on USB debugging in the developer options

Install Tailscale, on your Android device AND on your computer.

Then go to package.json, and look for this pattern:

<ADDR_IP_PHONE>

replace <ADDR_IP_PHONE> with the Tailscale IP address of your android device.

Create a Cloud Firestore project for your app, at:

https://console.firebase.google.com

Create a Android application inside this project 

You will need to add a SHA 1 key, during this creation process.

Run the command below to get this SHA 1 key:

```
cd ./android && ./gradlew signingReport
```

The SHA 1 key you need is the one with:

Task :app:signingReport, 
Variant: debugAndroidTest, 
Config: debug

You will also need the applicationId, it is available at android/app/build.gradle

Once the Android application is created, Download the google-services.json, put it in the android/app folder.

Create a Cloud Firestore database, and add the following rules to the Rules section of Cloud Firestore:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read and write access to authenticated users.
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

Go to Authentication, activate Authentication, then Sign-in method, then activate Google Sign in.
Choose the default email address in the dropdown menu.

Once activated, copy the Web client ID, available in the same page, in another dropdown menu 
(the dropdown menu about the Web SDK)
and all this web client id to the

AppPieces\Fetchers\FetchGoogleSignIn.js

file. Uncomment the code in this file, and replace <GGL_CLIENT_ID> with the client id you just copied

```
import { GoogleSignin } from "@react-native-google-signin/google-signin";

export async function FetchGoogleSignIn() {
  /*
  
  GoogleSignin.configure({
    webClientId: "<GGL_CLIENT_ID>",
  });

  */

  return true;
}
```
Finally, run this command to install/develop/debug your app (on a physical Android device)

```
npm run start-debug-android
```

The first time you run this command, it will fail, and a notification will appear on your Android device, asking you to allow your computer, say yes, and toggle the 'remember' choice.

Then re-run the same command

```
npm run start-debug-android
```

And wait for 2-3 minutes, and your app will install successfully ! Bravo !

## App code setup 

package.json

<ADDR_IP_PHONE> = The Tailscale IP Address of the physical Android device.

<YOUR_GITHUB_URL> = your github repo url, for pushing 

AppPieces/Fetchers/FetchGoogleSignIn.js

<GGL_CLIENT_ID> = Your Google Web Client ID (necessary for firebase/firestore)

