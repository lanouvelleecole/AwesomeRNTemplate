import { SqliteReduxWorkLists } from "src/reduxState/WorkLists/WorkListsGetterSetter";

import { GetCurrentWork } from "./GetCurrentWork";
import { WorkListState } from "./WorkListState";

/**
 *
 * @param {*} workListId
 *
 * @param {*} workIndex
 *
 * @returns
 *
 * des actions à faire avant de faire du boulot
 */

export const _onBeforeWork = async ({ workListId, workIndex }) => {
  // WorkList et Work en cours d'exécution
  let workList = SqliteReduxWorkLists.GetItemByUniqueID(workListId);
  let workDB = GetCurrentWork(workList);

  // set le Work et le WorkList en tant que en cours
  // d'exécution
  workDB.status = WorkListState.WORK_IN_PROGRESS;
  workList.status = WorkListState.WORK_IN_PROGRESS;

  // sauvegarde les changements effectués
  await SqliteReduxWorkLists.UpdateSpecificRowsFromDB({
    row: workList,
    rowName: "uniqueId",
    rowValue: workList.uniqueId,
  });

  return;
};
