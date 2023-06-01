import { SqliteReduxWorkLists } from "src/reduxState/WorkLists/WorkListsGetterSetter";
import { _workCanBeDone } from "./_workCanBeDone";
import { GetCurrentWork } from "./GetCurrentWork";
import { _onWorkError } from "./_onWorkError";
//import { _runWorker } from "./_runWorker";
import { _tryRunWorker } from "./_tryRunWorker";

// lance l'exécution du tout dernier Work
// du WorkList
// (via l'index stocké dans WorkList,
// on peut déterminer quel est le
// tout dernier Work qui nécessite du boulot)
//
// En cas de problème durant l'exécution de ce Work,
// la callback onError sera exécutée,
// et le WorkList ainsi que le Work fautif
// seront marque en tant que FAIL.
//
// En cas de réussite, la callback onDone
// sera exécutée.
export const _startCurrentWork = async ({
  onDone,
  onError,
  workers,
  workListId,
  workCancelGrabbers,
  workCancellers,
}) => {
  // le Work en cours d'exécution
  const workList = SqliteReduxWorkLists.GetItemByUniqueID(workListId);
  const work = GetCurrentWork(workList);

  // on grab la callback qu'on à decider d'appeller worker,
  // cette callback permet de faire ce boulot
  const workWith = work.workWith;
  const worker = workers != null ? workers[workWith] : null;
  const workIndex = workList.workIndex;

  // on grab la callback qu'on à decider d'appeller workCancelGrabber,
  // cette callback permet de stocker
  // une donnée permettant de cancel un Work en cours d'exécution
  const workCancelGrabber =
    workCancelGrabbers != null ? workCancelGrabbers[workWith] : null;

  //console.log(`Step index ${workIndex} works with ${workWith}`);
  /*console.log(
    `Step 1 work cancel grabber (deep innit): ${workCancelGrabbers["STEP_1"]}`
  );*/

  // si les conditions sont réunies
  // pour pouvoir exécuter le Work,
  // alors on l'exécute.
  //
  // conditions = fonction de work existe,
  // et le work list n'est pas encore
  // marqué comme terminé.
  if (_workCanBeDone(worker, work)) {
    _tryRunWorker({
      workListId,
      worker,
      workCancelGrabber,
      onDone,
      onError,
      workIndex,
    });

    //_runWorker({ workListId, worker, workCancelGrabber, onDone, onError });
  } else {
    // si conditions pas réunies,
    // alors indique problème
    _onWorkError({
      workListId,
      workIndex,
      e: "Conditions pas réunies pour exécuter ce Work....",
      onError,
    });
  }
};
