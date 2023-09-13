/* PLOP_INJECT_IMPORT */
//import React from "react";

import { Constants } from "src/constants/Constants";
import { MakeHTTPRequest } from "../MakeHTTPRequest/MakeHTTPRequest";
import { RequestTypes } from "../MakeHTTPRequest/RequestTypes";
import { RunIfPossible } from "../RunIfPossible/RunIfPossible";

/**
 *
 * @param {*}
 *
 * @returns ...
 *
 * Cette fonction permet d'obtenir un token d'accès à l'API Gfycat.
 */
const GetGfycatAccessToken = ({
  clientId,
  clientSecret,
  username,
  password,
  grabCanceller,
  onDone,
  onError,
}) => {
  /* PLOP_INJECT_CODE */

  //console.log(`obtention de token en cours.... ${""}`);

  return MakeHTTPRequest({
    onGrabCanceller: grabCanceller,
    requestType: RequestTypes.POST,
    url: `${Constants.gfycatEndpoint}/oauth/token`,
    headers: () => {
      return { "Content-Type": "application/json" };
    },
    body: () =>
      JSON.stringify({
        grant_type: "password",
        client_id: clientId,
        client_secret: clientSecret,
        username: username,
        password: password,
      }),
    onDone: (result) => {
      /// on stocke
      /// ce tout dernier access token
      const accessToken = result["access_token"];

      /*console.log(
        `obtention de token, réponse de requête.... ${JSON.stringify(result)}`
      );*/

      const condition = accessToken != null;

      if (condition) {
        RunIfPossible({
          func: onDone,
          args: accessToken,
        });
      } else {
        RunIfPossible({
          func: onError,
          args: "Problème durant récup de token",
        });
      }
    },
    onError: onError,
  });
};

export { GetGfycatAccessToken };
