import { RunIfPossible } from "../../RunIfPossible/RunIfPossible";
import { _AddWorkListToDBAndStartWorkList } from "./_AddWorkListToDBAndStartWorkList";

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
 * @param {*} workCancelGrabbers
 * un objet { <work_name>: <callback permettant de grab des données servant si besoin de cancel un Work> }
 *
 * @param {*} workCancellers
 * un objet { <work_name>: <callback permettant si besoin de cancel un Work> }
 *
 * Tente de créer le WorkList, via callback (onCreateSaveWork)
 * Si tt va bien, save ce WorkList dans la liste, puis démarre le work.
 * Sinon, erreur
 *
 */
export const _CreateSaveAndStartWorkList = ({
  onCreateSaveWork,
  id,
  onDone,
  onError,
  workers,
  workSavers,
  workCancelGrabbers,
  workCancellers,
}) => {
  // affiche une notif indiquant que le work est en cours de préparation.
  /*ShowNotification({
    title: "Maslow",
    body: i18n.t("workInit"),
    extra: null,
  });*/

  // tente de créer le WorkList...
  RunIfPossible({
    func: onCreateSaveWork,
    args: null,
  })
    .then((workList) => {
      workList["uniqueId"] = id;

      // ...puis sauvegarde ce WorkList dans DB
      // et démarre le work
      _AddWorkListToDBAndStartWorkList({
        workList,
        id,
        onDone,
        onError,
        workers,
        workSavers,
        workCancelGrabbers,
        workCancellers,
      });
    })
    .catch((e) => {
      // si bobo durant création de worklist,
      // run callback bobo

      RunIfPossible({
        func: onError,
        args: e,
      });
    });
};
