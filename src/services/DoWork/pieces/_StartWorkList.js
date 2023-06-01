import i18n from "i18n-js";
import { ShowNotification } from "src/services/ShowNotification/ShowNotification";
import { WorkListState } from "./WorkListState";
import { _actionsIfWorkDone } from "./_actionsIfWorkDone";
import { _actionsIfWorkNotDone } from "./_actionsIfWorkNotDone";
import { _handleSpecificWorkListCases } from "./_handleSpecificWorkListCases";

// on print, ou pas, des infos de debug ?
export const debugPrint = true;

/**
 *
 * @param {*} id
 * l'uniqueId du WorkList
 *
 * @param {*} onDone
 * callback qd work terminé
 *
 * @param {*} onError
 * callback bobo work ou work déja en cours
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
 * @param {*} workCancelGrabbers
 * un objet { <work_name>: <callback permettant de grab des données servant si besoin de cancel un Work> }
 *
 * @param {*} workCancellers
 * un objet { <work_name>: <callback permettant si besoin de cancel un Work> }
 *
 * lance (vraiment cette fois ci) le processus d'exécution
 * du tout dernier Work du WorkList
 * (permet de faire un après l'autre,
 * tous les boulot individuels dans la liste de boulot)
 */
export const _StartWorkList = async ({
  id,
  onDone,
  onError,
  workers,
  workSavers,
  workCancelGrabbers,
  workCancellers,
}) => {
  // le WorkList sur lequel on va (peut être) bosser
  const workList = await _handleSpecificWorkListCases(id);

  // si le WorkList n'est pas terminé...
  if (workList.status != WorkListState.WORK_DONE) {
    // ...alors démarre l'exécution du tout dernier Work du WorkList
    _actionsIfWorkNotDone({
      workers: workers,
      onError: onError,
      id: id,
      onDone: onDone,
      workSavers: workSavers,
      StartWorkListRef: _StartWorkList,
      workCancelGrabbers,
      workCancellers,
    });
  }

  // si l'exécution des Work du WorkList est terminé,
  // alors on run le callback
  // de fin, si existant
  else {
    // affiche une notif indiquant la situation
    ShowNotification({
      id: workList.uniqueIdNumeric,
      title: workList.title,
      body: i18n.t("workSuccess"),
      extra: null,
    });

    _actionsIfWorkDone(onDone, id);
  }
};
