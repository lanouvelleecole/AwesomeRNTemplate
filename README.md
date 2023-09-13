# Maslow (A React Native app template)

## Create a React Native app using the npx maslow create-react-native-app command

Install MaslowGPT from npm

https://npmjs.com/LINK_COMING_SOON

Run the following command, and follow the steps, to create your very own React Native App

(It could be the next big thing, or your own little recipe cooking or todo app ! Your imagination is the limit ;-)

```
npx maslow create-react-native-app
```

Once created, navigate to the root folder of this baby app, and install the npm dependencies

```
cd 'path_to_root' && npm i
```

To install your app on a physical Android device, do the following:

Turn on developer options in your android device.

Turn on USB debugging in the developer options

plug your device (smartphone/tablet) 
to your computer, with a USB cable. 

If a notification appears, asking you to allow your computer, say yes, and toggle the 'remember' choice.

Plug your android device to your computer, with a USB cable, 
and run this command to install/develop/debug your app

```
npm run start-debug
```

## App code setup 

package.json

<ADDR_IP_PHONE> = The Tailscale IP Address of the physical Android device.

<YOUR_GITHUB_URL> = your github repo url, for pushing 

AppPieces/Fetchers/FetchGoogleSignIn.js

<GGL_CLIENT_ID> = Your Google Web Client ID (necessary for firebase/firestore)

