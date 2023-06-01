import { SqliteReduxWorkLists } from "src/reduxState/WorkLists/WorkListsGetterSetter";
import { RunIfPossible } from "src/services/RunIfPossible/RunIfPossible";

// quand le boulot à effectuer sur le WorkList
// est terminé, on run la callback de fin
export const _actionsIfWorkDone = async (onDone, id) => {
  const workList = SqliteReduxWorkLists.GetItemByUniqueID(id);

  RunIfPossible({ func: onDone, args: workList });
};
