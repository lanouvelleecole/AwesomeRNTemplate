import { SqliteReduxWorkLists } from "src/reduxState/WorkLists/WorkListsGetterSetter";
import { _CreateSaveAndStartWorkList } from "./_CreateSaveAndStartWorkList";
import { _StartWorkList } from "./_StartWorkList";

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
 * lance le processus d'exécution
 * des Work du WorkList
 * (permet de faire un après l'autre,
 * tous les boulot individuels dans la liste de boulot)
 */
export const _DoWorkInList = async ({
  id,
  onCreateSaveWork,
  onDone,
  onError,
  workers,
  workSavers,
  workCancelGrabbers,
  workCancellers,
}) => {
  // existe t'il déja un WorkList portant cet id ?
  const workListExists = SqliteReduxWorkLists.WorkListExists({
    workListId: id,
  });

  // si il y a pas encore de WorkList stocké
  // dans la base de données des boulot en cours...
  if (!workListExists) {
    // ...alors crée en un,
    // et sauvegarde le dans la DB,
    // puis lance le boulot tout juste sauvegardé
    _CreateSaveAndStartWorkList({
      onCreateSaveWork,
      id,
      onDone,
      onError,
      workers,
      workSavers,
      workCancelGrabbers,
      workCancellers,
    });
  }

  // si il y a déja un WorkList existant
  // dans la base de données de WorkList...
  else {
    // ... alors relance le boulot déja sauvegardé
    _StartWorkList({
      id,
      onDone,
      onError,
      workers,
      workSavers,
      workCancelGrabbers,
      workCancellers,
    });
  }
};
