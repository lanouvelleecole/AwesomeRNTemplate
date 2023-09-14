# <YOUR_APP_NAME> (A React Native app template)

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

Finally, run this command to install/develop/debug your app (on a physical Android device)

```
npm run start-debug-android
```

The first time you run this command, it will fail, and a notification will appear on your Android device, asking you to allow your computer, say yes, and toggle the 'remember' choice.

Then re-run the same command

```
npm run start-debug-android
```

## App code setup 

package.json

<ADDR_IP_PHONE> = The Tailscale IP Address of the physical Android device.

<YOUR_GITHUB_URL> = your github repo url, for pushing 

AppPieces/Fetchers/FetchGoogleSignIn.js

<GGL_CLIENT_ID> = Your Google Web Client ID (necessary for firebase/firestore)

