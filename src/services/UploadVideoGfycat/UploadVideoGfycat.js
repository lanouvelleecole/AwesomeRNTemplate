/* PLOP_INJECT_IMPORT */
//import React from "react";

import {GetGfycatAccessToken} from '../GetGfycatAccessToken/GetGfycatAccessToken';
import {RequestGfyName} from '../RequestGfyName/RequestGfyName';
import {UploadVideoGfycatRequest} from '../UploadVideoGfycatRequest/UploadVideoGfycatRequest';

/**
 *
 * @param {*} filePath
 * le path de la vidéo à uploader
 *
 * @param {*} onDone
 * callback de réussite d'upload
 * fournit les données d'accès à la vidéo
 * { gfyName: "<String>", mobileUrl: "<String>", webmUrl: "<String>" }
 *
 * @param {*} onError
 * callback de bobo durant upload
 *
 * @param {*} clientId
 * l'id client du compte Gfycat
 *
 * @param {*} clientSecret
 * le client secret du compte Gfycat
 *
 * @param {*} username
 * le nom d'utilisateur Gfycat
 *
 * @param {*} password
 * le mot de passe Gfycat
 *
 * @param {*} captions
 * les captions (texte à ajouter sur la vidéo)
 *
 * @param {*} title
 * le titre de la vidéo
 *
 * @param {*} grabCanceller
 * callback de récup d'annulateur de requête HTTP
 *
 * Cette fonction permet d'uploader une vidéo sur Gfycat.
 * (vidéo 1 minute maximum)
 *
 */
const UploadVideoGfycat = ({
  filePath,
  onDone,
  onError,
  clientId,
  clientSecret,
  username,
  password,
  captions,
  title,
  grabCanceller,
}) => {
  GetGfycatAccessToken({
    clientId,
    clientSecret,
    username,
    password,
    grabCanceller,
    onDone: tok => {
      RequestGfyName({
        captions,
        title,
        accessToken: tok,
        grabCanceller,
        onDone: gfyname => {
          UploadVideoGfycatRequest({
            gfyName: gfyname,
            filePath: filePath,
            onDone: onDone,
            onError: onError,
            accessToken: tok,
            grabCanceller,
          });
        },
        onError: onError,
      });
    },
    onError: onError,
  });
};

export {UploadVideoGfycat};
