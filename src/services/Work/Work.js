/* PLOP_INJECT_IMPORT */
//import React from "react";

import { Constants } from "src/constants/Constants";
import { WorkListState } from "../DoWork/pieces/WorkListState";
import { GetUniqueID } from "../GetUniqueID/GetUniqueID";

/**
 *
 * @param {*} uniqueId
 * identifiant unique du boulot
 *
 * @param {*} status
 * L'avancement du boulot.
 * de type WorkListState
 *
 * @param {*} description
 * le sous titre. Peut servir pour affichage D'UI
 *
 * @param {*} title
 * le titre. Peut servir pour affichage D'UI
 *
 * @param {*} workWith
 * le nom de la fonction responsable de faire ce Work,
 * (fonctions stockées dans workers)
 *
 * @param {*} enableProgressBar
 * on affiche la barre d'avancement, ou pas ?
 *
 * @param {*} progressPercentage
 * pourcentage d'avancement du Work (de 0 a 100)
 *
 * @param {*} workData
 * des données liées au fonctionnement du Work, si besoin
 *
 * @returns un Work par défaut
 *
 */
const Work = ({
  status = WorkListState.WORK_NOT_IN_PROGRESS,
  description = "",
  title = "",
  uniqueId = GetUniqueID(),
  workWith = "",
  workData = {},
  enableProgressBar = Constants.false,
  progressPercentage = 0.0,
}) => {
  /* PLOP_INJECT_CODE */

  return {
    uniqueId,
    status,
    description,
    title,
    workWith,
    workData,
    enableProgressBar,
    progressPercentage,
  };
};

export { Work };
