/* PLOP_INJECT_IMPORT */
//import React from "react";

import { Constants } from "src/constants/Constants";
import { MakeHTTPRequest } from "../MakeHTTPRequest/MakeHTTPRequest";
import { RequestTypes } from "../MakeHTTPRequest/RequestTypes";
import { RunIfPossible } from "../RunIfPossible/RunIfPossible";

/**
 *
 * @param {*} param1,
 *
 * @returns ...
 *
 * Cette fonction permet de ...
 */
const RequestGfyName = ({
  captions,
  title,
  accessToken,
  grabCanceller,
  onDone,
  onError,
}) => {
  /* PLOP_INJECT_CODE */

  //console.log(`obtention de gfyname en cours.... ${""}`);

  return MakeHTTPRequest({
    onGrabCanceller: grabCanceller,
    requestType: RequestTypes.POST,
    url: `${Constants.gfycatEndpoint}/gfycats/`,
    headers: () => {
      return {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      };
    },
    body: () =>
      JSON.stringify({
        captions: captions != null ? captions : [],
        noMd5: true,
        title: title,
        keepAudio: true,
      }),
    onDone: (result) => {
      /// on stocke
      /// ce tout dernier gfyname
      const gfyname = result["gfyname"];

      const condition = gfyname != null;

      if (condition) {
        RunIfPossible({
          func: onDone,
          args: gfyname,
        });
      } else {
        RunIfPossible({
          func: onError,
          args: "Problème durant récup de gfyname",
        });
      }
    },
    onError: onError,
  });
};

export { RequestGfyName };
