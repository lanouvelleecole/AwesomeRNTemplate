import { SqliteReduxWorkLists } from "src/reduxState/WorkLists/WorkListsGetterSetter";
import { WorkListState } from "./WorkListState";
import { GetCurrentWork } from "./GetCurrentWork";

// sauvegarde le progrès effectué dans l'exécution
// des Work du WorkList

export const _saveWorkProgressSuccess = async ({
  id,
  workSavers,
  workResult,
}) => {
  // le WorkList sur lequel on est en train de bosser
  let workList = SqliteReduxWorkLists.GetItemByUniqueID(id);

  // le tout dernier work qu'on vient de faire
  // dans ce WorkList
  let currentWork = GetCurrentWork(workList);

  // workSaver est une callback qui nous permet, si besoin,
  // de sauvegarder les données produites par le
  // tout dernier Work effectué,
  const saveWith = currentWork.workWith;
  const workSaver = workSavers != null ? workSavers[saveWith] : null;

  // workSaver stocke si besoin, des données dans
  // lecurrentWork
  // (url, key, etc...)
  //
  // si cette callback existe, on stocke les données dans currentWork.
  if (workSaver != null) {
    currentWork = workSaver({
      workResult,
      work: currentWork,
      workIndex: workList.workIndex,
    });
  }

  // on marque currentWork en tant que Work accompli
  currentWork.status = WorkListState.WORK_DONE;

  // on incrémente l'index du dernier work ayant besoin de boulot
  workList.workIndex++;

  // si on est arrivé au bout
  // de la liste de Work, alors on
  // indique que le WorkList est accompli,
  // tout le boulot est donc fait.
  if (workList.workIndex >= workList.works.length) {
    workList.status = WorkListState.WORK_DONE;
  }

  // sauvegarde tous ces changements effectués ci dessus
  await SqliteReduxWorkLists.UpdateSpecificRowsFromDB({
    row: workList,
    rowName: "uniqueId",
    rowValue: workList.uniqueId,
  });

  return;
};
