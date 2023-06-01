/* PLOP INJECT_IMPORT */
//import React from "react";

/* PLOP_INJECT_CODE */

/**
 * L'instance du singleton WorkListsCancellers.
 */
let instance;

/**
 * le state actuel du WorkListsCancellers.
 */
let state = {
  /**
   * un objet {
   *   <workList.uniqueId>: {<work.workWith>: () => {<canceller>}, <work.workWith>: () => {<canceller>}, ...}
   * }
   */
  cancellers: {},
};

/**
 * Le all mighty WorkListsCancellers, qui nous permet un accès CRUD du ghetto.
 */
class WorkListsCancellers {
  /**
   * Le constructeur
   * qui ne construira qu'un seul objet,
   * stocké dans instance.
   */
  constructor() {
    if (instance) {
      throw new Error("New instance of WorkListsCancellers cannot be created.");
    }

    instance = this;
  }

  /**
   *
   * @param {*} workListId
   * l'id du WorkList en cours d'exécution
   *
   * Ceci permet d'obtenir les cancellers liés au WorkList fourni,
   * si existants
   */
  GetCancellersForWorkList(workListId) {
    return state.cancellers[workListId];
  }

  /**
   *
   * @param {*} cancellers,
   * les cancellers pour ce WorkList
   * {<work.workWith>: () => {<canceller>}, <work.workWith>: () => {<canceller>}, ...}
   *
   * @param {*} workListId
   * l'id du WorkList en cours d'exécution
   *
   * Ceci permet d'ajouter un canceller dans le WorkListsCancellers
   */
  AddCancellersForWorkList({ cancellers, workListId }) {
    state.cancellers[workListId] = cancellers;
  }

  /**
   * Ceci permet de ...
   */
  action_1({ arg1, arg2 }) {
    return;
  }

  /**
   * Ceci permet de ...
   */
  action_2({ arg1, arg2 }) {
    return;
  }
}

let WorkListsCancellersInstance = Object.freeze(new WorkListsCancellers());

export { WorkListsCancellersInstance };
