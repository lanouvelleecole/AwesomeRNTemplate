/* PLOP_INJECT_IMPORT */
//import React from "react";
import ytdl from "react-native-ytdl";
import { RunIfPossible } from "../RunIfPossible/RunIfPossible";
import { GetIDFromYoutubeURL } from "../IsYoutubeUrlValid/IsYoutubeUrlValid";
import { DownloadFromUrl } from "../DownloadFromUrl/DownloadFromUrl";

/**
 *
 * @param {*} type, soit "audioonly", soit "videoandaudio"
 * @param {*} url, l'url d'une vidéo Youtube
 * @param {*} onSuccess, si tout OK
 * @param {*} onError, si caca
 * @param {*} outputPath, le path du fichier téléchargé
 * @param {*} printInfo, print ou pas du debug info
 * @param {*} onProgress, callback de progrès de DL
 *
 * @returns
 *
 * Ceci permet de télécharger une vidéo ou un audio venant de Youtube
 */
const YoutubeDownloader = async ({
  type,
  url,
  onSuccess,
  onError,
  onProgress,
  outputPath,
}) => {
  /* PLOP_INJECT_CODE */

  // l'id de la vidéo Youtube
  const videoID = GetIDFromYoutubeURL(url);

  try {
    // obtient des infos venant de la vidéo YT,
    // pour pouvoir ensuite télécharger
    const info = await ytdl.getInfo(videoID);

    // les formats dispos, selon besoin user
    const audioFormats = ytdl.filterFormats(info.formats, type);

    // si un ou plusieurs formats sont dispos
    if (audioFormats && audioFormats.length > 0) {
      // par défaut, on choisit le premier format de la liste
      const format = audioFormats[0];

      // remplace l'extension de l'output, selon données de video YT
      /*const outputPathWithProperExtension = replaceExtensionGivenYTData({
        format,
        outputPath,
      });*/

      // lance le téléchargement via url
      DownloadFromUrl({
        url: format.url,
        outputPath: outputPath,
        onSuccess,
        onError,
        onProgress,
      });
    } else {
      RunIfPossible({ func: onError, args: "No format" });
    }
  } catch (e) {
    RunIfPossible({ func: onError, args: e });
  }
};

/*

const replaceExtensionGivenYTData = ({ format, outputPath }) => {
  const properExtension = format.container;

  return ReplaceFileExtension({
    filePath: outputPath,
    newExtension: properExtension,
  });
};

*/

export { YoutubeDownloader };
