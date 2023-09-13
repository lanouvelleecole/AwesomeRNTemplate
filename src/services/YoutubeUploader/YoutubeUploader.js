/* PLOP_INJECT_IMPORT */

/**
 *
 * @param {*} videoPath,
 * path de la vidéo à uploader
 *
 * @param {*} videoMetadata,
 * données d'upload (nom, etc...)
 * + d'info ici:
 * https://developers.google.com/youtube/v3/docs/videos#resource
 *
 * @param {*} onSuccess,
 * callback d'upload réussi. Contient l'URL de la vidéo Youtube
 *
 * @param {*} onError,
 * callback de caca
 *
 * Permet d'uploader une vidéo sur Youtube.
 * Si ca marche bien, il devrait juste avoir le code example ci dessous
 */
export const YoutubeUploader = async ({
  videoPath,
  videoMetadata,
  accessToken,
  onProgress,
  onSuccess,
  onError,
}) => {
  /* PLOP_INJECT_CODE */
};
