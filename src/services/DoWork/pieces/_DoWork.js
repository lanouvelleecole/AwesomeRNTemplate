/* PLOP_INJECT_IMPORT */
import { BeforeDuringAfterPattern } from "src/services/BeforeDuringAfterPattern/BeforeDuringAfterPattern";
import { _DoWorkInList } from "./_DoWorkInList";

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
 * @param {*} workCancelGrabbers
 * un objet { <work_name>: <callback permettant de grab des données servant si besoin de cancel un Work> }
 *
 * @param {*} workCancellers
 * un objet { <work_name>: <callback permettant si besoin de cancel un Work> }
 *
 * lance le processus d'exécution
 * des Work du WorkList
 * (permet de faire un après l'autre,
 * tous les boulot individuels dans la liste de boulot)
 */
export const _DoWork = async ({
  id,
  onCreateSaveWork,
  onBefore,
  onDone,
  onError,
  workers,
  workSavers,
  workCancelGrabbers,
  workCancellers,
}) => {
  // BeforeDuringAfterPattern
  // permet d'exécuter des callbacks
  // d'avant, pendant, et après, l'un après l'autre,
  // et de catch des erreurs pouvant survenir durant
  // ce processus
  BeforeDuringAfterPattern({
    // callback à appeler si besoin
    // avant de faire le boulot
    onBefore: onBefore,

    // une fois onBefore est fini,
    // on fait le boulot
    // (exécution des Work du WorkList
    // l'un après l'autre)
    onDuring: () =>
      _DoWorkInList({
        id: id,

        // onCreateSaveWork est une callback qui crée la WorkList
        // (liste de Work, liste de boulot individuels)
        // qui est ensuite sauvegardée
        // dans la base de données
        // des boulots en cours
        onCreateSaveWork,
        onDone: onDone,
        onError: onError,
        workers: workers,
        workSavers: workSavers,
        workCancelGrabbers,
        workCancellers,
      }),

    // en cas d'erreur durant le processus
    // on catch l'erreur,
    // et on exécute la callback d'erreur
    onError: onError,
  });
};
