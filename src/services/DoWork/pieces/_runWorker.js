import { SqliteReduxWorkLists } from "src/reduxState/WorkLists/WorkListsGetterSetter";
import { RunIfPossible } from "src/services/RunIfPossible/RunIfPossible";
import { ShowNotification } from "src/services/ShowNotification/ShowNotification";
import { GetCurrentWork } from "./GetCurrentWork";
import { _onBeforeWork } from "./_onBeforeWork";
import { _onWorkError } from "./_onWorkError";

// après de moultes péripéties, enfin,
// on exécute le tout dernier Work
// ayant besoin de taf dans le WorkList
export const _runWorker = async ({
  workListId,
  worker,
  workCancelGrabber,
  onDone,
  onError,
}) => {
  // le WorkList ainsi que le Work sur lesquels
  // on bosse
  const workList = SqliteReduxWorkLists.GetItemByUniqueID(workListId);
  const work = GetCurrentWork(workList);
  const workIndex = workList.workIndex;

  // callback avant de commencer le boulot
  await _onBeforeWork({ workListId, workIndex });

  /*console.log(
    `work cancel grabber for step index ${workIndex}: ${JSON.stringify(
      workCancelGrabber
    )}`
  );*/

  // affiche une notif indiquant que ce boulot individuel est en cours d'exécution
  ShowNotification({
    id: workList.uniqueIdNumeric,
    title: work.title,
    body: work.description,
    extra: null,
  });

  /**
   * Exécute la callback chargée de faire le boulot de cette étape
   */
  worker({
    /** Le work */
    work: work,

    /** Le work list */
    workList: workList,

    /** permet de stocker des données de cancel, si besoin */
    workCancelGrabber: workCancelGrabber,

    // callback une fois que le boulot est fait avèc succès
    onDone: (workResult) => {
      RunIfPossible({ func: onDone, args: workResult });
    },

    // callback en cas d'erreur durant l'exécution du Work
    onError: (e) => {
      _onWorkError({ workListId, workIndex, e, onError });
    },
  });
};
