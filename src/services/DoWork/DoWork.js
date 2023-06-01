/* PLOP_INJECT_IMPORT */
//import React from "react";

import { SqliteReduxWorkLists } from "src/reduxState/WorkLists/WorkListsGetterSetter";
import { DoWorkIfNeeded } from "./pieces/DoWorkIfNeeded";
import { _DoWork } from "./pieces/_DoWork";
import { WorkListsCancellersInstance } from "./WorkListsCancellers";

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
 * Un méchanisme permettant de faire du boulot
 */
const DoWork = async ({
  onWorkAlreadyGoingOn,
  id,
  onBefore,
  onDone,
  onError,
  onCreateSaveWork,
  workers,
  workSavers,
  workProgressCallbacks,
  workCancelGrabbers,
  workCancellers,
}) => {
  //console.log(`Step 1 work cancel grabber: ${workCancelGrabbers["STEP_1"]}`);

  // existe t'il déja un boulot en cours portant cet id
  const workAlreadyExists = SqliteReduxWorkLists.WorkListExists({
    workListId: id,
  });

  // on stocke les cancellers de ce WorkList, dans un singleton
  WorkListsCancellersInstance.AddCancellersForWorkList({
    cancellers: workCancellers,
    workListId: id,
  });

  // Si le work existe déja
  // (work est inactif/failed)
  // on essaie de relancer ce boulot
  if (workAlreadyExists) {
    DoWorkIfNeeded({
      onWorkAlreadyGoingOn: onWorkAlreadyGoingOn,
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

  // si ce work n'existe pas déja dans la DB,
  // on le crée puis on le lance
  else {
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
};

export { DoWork };
