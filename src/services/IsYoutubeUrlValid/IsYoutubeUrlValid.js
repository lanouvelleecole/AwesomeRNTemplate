/* PLOP_INJECT_IMPORT */
//import React from "react";

/**
 *
 * @param {*} url,
 *
 * @returns true si URL est video youtube, false autrement
 *
 * Cette fonction permet de savoir si une URL est une video youtube, ou pas
 */
const IsYoutubeUrlValid = (url) => {
  /* PLOP_INJECT_CODE */

  if (url != null && url.length > 0) {
    var regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|\?v=)([^#&?]*).*/;
    var match = url.match(regExp);
    if (match && match[2]?.length == 11) {
      // Do anything for being valid
      return true;
    } else {
      // Do anything for not being valid
      return false;
    }
  } else {
    return false;
  }
};

export function GetIDFromYoutubeURL(url) {
  var regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = url.match(regExp);
  return match && match[7]?.length == 11 ? match[7] : false;
}

export { IsYoutubeUrlValid };
