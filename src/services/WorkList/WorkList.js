/* PLOP_INJECT_IMPORT */
//import React from "react";

import { WorkListState } from "../DoWork/pieces/WorkListState";
import { GetUniqueID } from "../GetUniqueID/GetUniqueID";
import { GetUnixTime } from "../GetUnixTime/GetUnixTime";

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
 * @param {*} workIndex
 * l'index du Work à exécuter
 *
 * @param {*} works
 * la liste de Work à exécuter
 *
 * @param {*} workListData
 * des données liées au fonctionnement du WorkList, si besoin
 *
 * @returns un WorkList par défaut
 *
 */
const WorkList = ({
  uniqueIdNumeric = GetUnixTime(),
  uniqueId = GetUniqueID(),
  status = WorkListState.WORK_NOT_IN_PROGRESS,
  description = "",
  title = "",
  workIndex = 0,
  works = [],
  workListData = {},
}) => {
  /* PLOP_INJECT_CODE */

  return {
    uniqueIdNumeric,
    uniqueId,
    status,
    description,
    title,
    workIndex,
    works,
    workListData,
  };
};

export { WorkList };
