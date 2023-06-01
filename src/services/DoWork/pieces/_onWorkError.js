import i18n from "i18n-js";
import { SqliteReduxWorkLists } from "src/reduxState/WorkLists/WorkListsGetterSetter";
import { RunIfPossible } from "src/services/RunIfPossible/RunIfPossible";
import { ShowNotification } from "src/services/ShowNotification/ShowNotification";
import { GetCurrentWork } from "./GetCurrentWork";
import { WorkListState } from "./WorkListState";

/**
 *
 * @param {*} workListId
 * @param {*} workIndex
 * @param {*} e
 * @param {*} onError
 *
 * que faire en cas d'erreur durant l'exécution du Work en cours
 */

export const _onWorkError = async ({ workListId, workIndex, e, onError }) => {
  // le WorkList en cours d'exécution
  let workListDB = SqliteReduxWorkLists.GetItemByUniqueID(workListId);

  // le Work en cours d'exécution dans ce WorkList
  let workDB = GetCurrentWork(workListDB);

  // set le WorkList et le Work en tant que fail
  workDB.status = WorkListState.ERROR_WORK;
  workListDB.status = WorkListState.ERROR_WORK;

  // affiche une notif indiquant que caca bobo
  ShowNotification({
    id: workListDB.uniqueIdNumeric,
    title: workDB.title,
    body: workDB.description + "\n\n" + i18n.t("workFailed"),
    extra: null,
  });

  // sauvegarde les changements effectués
  await SqliteReduxWorkLists.UpdateSpecificRowsFromDB({
    row: workListDB,
    rowName: "uniqueId",
    rowValue: workListDB.uniqueId,
  });

  // run la callback onError
  RunIfPossible({ func: onError, args: e });
};
