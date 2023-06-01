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
 * Continue le processus d'exécution du WorkList
 */
export const _continue = ({
  id,
  onDone,
  onError,
  workers,
  workSavers,
  StartWorkListRef,
  workCancelGrabbers,
  workCancellers,
}) => {
  StartWorkListRef({
    id,
    onDone,
    onError,
    workers,
    workSavers,
    workCancelGrabbers,
    workCancellers,
  });
};
