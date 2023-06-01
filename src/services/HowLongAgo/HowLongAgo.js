/* PLOP_INJECT_IMPORT */
//import React from "react";

// permet date de création jolie comme youtube.
import { formatDistance } from "date-fns";
import { fr, enUS } from "date-fns/locale";

// multilingue
import i18n from "i18n-js";

/**
 *
 * @param {*} param1,
 *
 * @returns ...
 *
 * Cette fonction permet de ...
 */
const HowLongAgo = ({ creationDate }) => {
  /* PLOP_INJECT_CODE */

  // l'instant T
  const now = new Date();

  // ça fait combien de temps que ce truc est né
  const DOB = formatDistance(creationDate, now, properLocale());

  // date de naissance, en texte
  return DOB;
};

export { HowLongAgo };

function properLocale() {
  const locale = i18n.t("country");

  if (locale == "fr") {
    return { locale: fr };
  } else if (locale == "en") {
    return { locale: enUS };
  } else {
    return null;
  }
}
