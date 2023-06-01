import { SqliteReduxWorkLists } from "src/reduxState/WorkLists/WorkListsGetterSetter";
import { WorkListState } from "./WorkListState";

/**
 * @param {*} id
 * uniqueId du workList
 *
 * @returns Si le workList à 0 work, indique que le boulot est terminé avant d'avoir commencé
 *
 */
export const _handleSpecificWorkListCases = async (id) => {
  const workList = SqliteReduxWorkLists.GetItemByUniqueID(id);

  /// si le WorkList est vide...
  if (
    workList != null &&
    workList.works != null &&
    workList.works.length == 0
  ) {
    /// ...on indique que le boulot est terminé
    const doneWorkList = { ...workList, status: WorkListState.WORK_DONE };

    /// sauvegarde ce changement de statut
    await SqliteReduxWorkLists.UpdateSpecificRowsFromDB({
      row: doneWorkList,
      rowName: "uniqueId",
      rowValue: doneWorkList.uniqueId,
    });

    return doneWorkList;
  } else {
    return workList;
  }
};
