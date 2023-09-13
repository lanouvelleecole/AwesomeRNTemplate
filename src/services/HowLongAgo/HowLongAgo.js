/* PLOP_INJECT_IMPORT */
//import React from "react";

// permet date de création jolie comme youtube.
import {formatDistance} from 'date-fns';
import {fr, enUS} from 'date-fns/locale';

// multilingue
import {app_strings} from 'src/stringRepos/AppStrings/AppStrings';

/**
 *
 * @param {*} param1,
 *
 * @returns ...
 *
 * Cette fonction permet de ...
 */
const HowLongAgo = ({creationDate}) => {
  /* PLOP_INJECT_CODE */

  // l'instant T
  const now = new Date();

  // ça fait combien de temps que ce truc est né
  const DOB = creationDate
    ? formatDistance(creationDate, now, properLocale())
    : null;

  // date de naissance, en texte
  return DOB;
};

export {HowLongAgo};

function properLocale() {
  const locale = app_strings.t('country');

  if (locale == 'fr') {
    return {locale: fr};
  } else if (locale == 'en') {
    return {locale: enUS};
  } else {
    return null;
  }
}
