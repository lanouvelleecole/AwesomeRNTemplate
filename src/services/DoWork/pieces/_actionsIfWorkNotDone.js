import { _startCurrentWork } from "./_startCurrentWork";
import { _saveWorkProgressSuccess } from "./_saveWorkProgressSuccess";
import { _continue } from "./_continue";
import { _onWorkError } from "./_onWorkError";
import { SqliteReduxWorkLists } from "src/reduxState/WorkLists/WorkListsGetterSetter";

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
 * @param {*} StartWorkListRef
 * une réference à cette fonction de démarrage de boulot,
 * de façon à eviter un warning de require cycle chiant
 *
 * @param {*} workCancelGrabbers
 * un objet { <work_name>: <callback permettant de grab des données servant si besoin de cancel un Work> }
 *
 * @param {*} workCancellers
 * un objet { <work_name>: <callback permettant si besoin de cancel un Work> }
 *
 * démarre l'exécution du tout dernier Work du WorkList
 */
export const _actionsIfWorkNotDone = ({
  workers,
  onError,
  id,
  onDone,
  workSavers,
  StartWorkListRef,
  workCancelGrabbers,
  workCancellers,
}) => {
  // lance l'exécution du tout dernier Work
  // du WorkList
  //
  // (via l'index stocké dans WorkList,
  // on peut déterminer quel est le
  // tout dernier Work qui nécessite du boulot)
  _startCurrentWork({
    workListId: id,
    workers: workers,
    workCancelGrabbers,
    workCancellers,

    // En cas de problème durant l'exécution de ce Work,
    // la callback onError, ci dessous, sera exécutée,
    // et le WorkList ainsi que le Work fautif
    // seront marque en tant que FAIL....
    onError: onError,

    // ....si l'exécution du tout dernier Work du WorkList
    // s'est effectuée avec succès,
    //
    // on peut incrémenter l'index du Work
    // ayant besoin de travail dans le WorkList
    //
    // ou alors indiquer que les Work du WorkList ont fini
    // d'être exécutés.
    //
    // puis on continue le processus d'execution du WorkList
    onDone: (workResult) => {
      _saveWorkProgressSuccess({
        workResult: workResult,
        workSavers: workSavers,
        id: id,
      })
        .then((val) => {
          _continue({
            id,
            onDone,
            onError,
            workers,
            workSavers,
            StartWorkListRef,
            workCancelGrabbers,
            workCancellers,
          });
        })
        .catch((e) => {
          // le Work en cours d'exécution
          const workList = SqliteReduxWorkLists.GetItemByUniqueID(id);
          const workIndex = workList.workIndex;

          // si bobo durant sauvegarde des données de Work
          // alors indique problème
          _onWorkError({
            workListId: id,
            workIndex,
            e: {
              ...e,
              reason: "Couille durant sauvegarde des données de Work",
            },
            onError,
          });
        });
    },
  });
};
