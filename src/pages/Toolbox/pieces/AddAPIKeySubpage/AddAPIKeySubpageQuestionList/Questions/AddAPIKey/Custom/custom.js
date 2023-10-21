/* PLOP_INJECT_IMPORT */

import { useState } from "react";
import { MsgFormButton } from "src/services/MsgFormButton/MsgFormButton";
import { SwitchPages } from "src/services/SwitchPages/SwitchPages";
import React from "react";
import { OnFormButtonClicked } from "./bits_and_pieces/OnFormButtonClicked";
import { OnButtonClicked } from "./bits_and_pieces/OnButtonClicked";


/* PLOP_INJECT_GLOBAL_CODE */

/**
 *
 * @param {*} answers, all the user answers so far
 *
 * @param {*} answer, the user answer for this question
 *
 * @param {*} answerIndex, the 0 based index of this question,
 * in the list of questions.
 *
 * @param {*} onInput, a callback that allows you
 * to save the user chosen answer,
 * from custom UI, or whatever.
 *
 * @param {*} route, the route object from useRoute() of @react-navigation/native
 *
 * @param {*} navigation, the navigation object from useRoute() of @react-navigation/native
 *
 * @return some custom UI imaginated
 * by your magnificient brain,
 * and/or the magnificient brain of A.I.
 */
export const CustomComponent = ({
  onInput,
  defaultAPIKey
}) => {
  /* PLOP_INJECT_CODE */

  // this page displays a UI that allows a user to subscribe
  // to an API (in this case, my own api called MaslowAPI, but of course it could be your API if u want ;-)
  // this serves as a template mechanism, that allows you to switch between a UI of your own making,
  // and a mini web page (AKA Iframe)
  // feel free to tweak it so it serves your purpose

  // The iframe's currently displayed url.
  // you can rename the getter/setter as you wish
  // use the setter to change the iframe's url
  const [subscribeUrl, setSubscribeUrl] = useState(null)

  // Whether or not the UI shown on screen.
  // if true, the UI shows up, and the iframe is hidden under it
  // if false, the UI is not shown and the iframe is visible on screen
  const [showUI, setShowUI] = useState(true)

  // a no arg callback that returns a component of your choice
  // here it's an UI that allows the user to press a subscribe button to subscribe to the API
  // then enter his fresh API in a form.
  // but it could also be your own custom homemade DIY component made from you too
  const UIComponent = () =>
    <MsgFormButton
      fontFamily={"ComingSoon"}
      message={"Use the button below to subscribe to the API, then enter your API Key in the prompt, and finally, press the prompt button."}
      initialFormInput={defaultAPIKey}
      formPlaceholder={"Enter your API Key here"}
      onFormButtonClicked={(text) => {
        OnFormButtonClicked({ text, onInput });
      }}
      buttonText={"Subscribe"}
      onButtonClicked={() => {
        OnButtonClicked({ setSubscribeUrl, setShowUI });
      }}
    />


  // the SwitchPages component allows you to
  // switch back & forth between a UI, and a iframe (AKA a mini web browser)
  return <SwitchPages
    showUI={showUI}
    setShowUI={setShowUI}
    iframeURL={subscribeUrl}
    setIframeURL={setSubscribeUrl}
    fontFamily={"ComingSoon"}
    /* the url of the homepage, if omitted, the home button won't be shown in the iframe */
    //homeURL={"https://duckduckgo.com"}
    /* do we show the address bar in the iframe, or not ? */
    showAddressBar={false}
    UIComponent={UIComponent}
  />

};


