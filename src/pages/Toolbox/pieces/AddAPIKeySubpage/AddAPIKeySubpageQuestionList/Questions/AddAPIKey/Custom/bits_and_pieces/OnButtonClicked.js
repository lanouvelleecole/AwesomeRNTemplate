import { ShowNotification } from "src/services/ShowNotification/ShowNotification";
import { GoogleLogin } from "src/services/GoogleLogin/GoogleLogin";
import { showSnackbar } from "src/components/Messager/Messager";
//import MaslowSDK from "maslow-gpt-sdk";

/**
 * 
 * @param {*}
 * 
 * this callback gets called when the button under the form is pressed 
 */
export function OnButtonClicked({ setSubscribeUrl, setShowUI }) {
    // do whatever you want here. You can erase the shit below, it's just example code.
    // you can use the setSubscribeUrl and setShowUI setters (or other names if u renamed it earlier)
    // to set the iframe url, and UI visibility respectively
    // feel free to add more args if needed

    /*
    GoogleLogin({
        onSuccess: async (login_data) => {
            MaslowSDK.GetAPISubscriptionLink({
                params: login_data,
                onSuccess: (url_data) => {
                    ShowNotification({
                        id: 0,
                        title: "Maslow",
                        body: "Let's go to the subscription page !",
                        extra: null,
                    });

                    setSubscribeUrl(url_data.url);
                    setShowUI(false);
                },

                onError: (e) => {
                    ShowNotification({
                        id: 0,
                        title: "Maslow",
                        body: "We couldn't generate a subscription link for you.... Try again, soldier !",
                        extra: null,
                    });
                },
                print: true
            });

        },
        onError: (e) => {
            showSnackbar('There was a problem during the login.')
        },
        onCancel: () => {
            showSnackbar('Operation canceled')
        },
    });
    */
}
