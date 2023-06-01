import { SqliteReduxWorkLists } from "src/reduxState/WorkLists/WorkListsGetterSetter";
import { ShowNotification } from "src/services/ShowNotification/ShowNotification";
import { RunIfPossible } from "../../RunIfPossible/RunIfPossible";
import { WorkListState } from "./WorkListState";
import { _DoWork } from "./_DoWork";
import i18n from "i18n-js";

/**
 *
 * @param {*} id
 * l'uniqueId du WorkList
 *
 * @param {*} onBefore
 * callback avant work
 *
 * @param {*} onDone
 * callback qd work terminé
 *
 * @param {*} onError
 * callback bobo work ou work déja en cours
 *
 * @param {*} onCreateSaveWork
 * callback responsable de créer
 * une liste de work
 *
 * @param {*} workers
 * un objet { <work_name>: <callback_qui_fé_le_work>  }
 *
 * @param {*} workSavers
 * un objet { <work_name>: <callback_qui_fournit_un_output_pour_le_work>  }
 *
 * @param {*} workProgressCallbacks
 * un objet { <work_name>: <callback_qui_fournit_l_avancement_du_work>  }
 *
 * @param {*} onWorkAlreadyGoingOn
 * callback si ce WorkList est déja en train d'etre worked on
 *
 * @param {*} workCancelGrabbers
 * un objet { <work_name>: <callback permettant de grab des données servant si besoin de cancel un Work> }
 *
 * @param {*} workCancellers
 * un objet { <work_name>: <callback permettant si besoin de cancel un Work> }
 *
 * Si le work est déja en cours d'exécution, on signale
 */
export const DoWorkIfNeeded = async ({
  id,
  onBefore,
  onDone,
  onError,
  onCreateSaveWork,
  workers,
  workSavers,
  workProgressCallbacks,
  onWorkAlreadyGoingOn,
  workCancelGrabbers,
  workCancellers,
}) => {
  // le boulot déja existant portant l'id associé
  const workList = SqliteReduxWorkLists.GetItemByUniqueID(id);

  // si ce boulot est fail/inactif, on le lance
  if (workList.status != WorkListState.WORK_IN_PROGRESS) {
    _DoWork({
      id: id,
      onBefore: onBefore,
      onDone: onDone,
      onError: onError,
      onCreateSaveWork: onCreateSaveWork,
      workers: workers,
      workSavers: workSavers,
      workProgressCallbacks: workProgressCallbacks,
      workCancelGrabbers,
      workCancellers,
    });
  }

  // si ce boulot est déja actif,
  // on exécute callback de couille
  else {
    // affiche une notif indiquant la situation
    ShowNotification({
      id: workList.uniqueIdNumeric,
      title: workList.title,
      body: i18n.t("workAlready"),
      extra: null,
    });

    RunIfPossible({
      func: onWorkAlreadyGoingOn,
      args: null,
    });
  }
};
