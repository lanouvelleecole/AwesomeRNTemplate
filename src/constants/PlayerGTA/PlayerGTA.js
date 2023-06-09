/* PLOP INJECT_IMPORT */
//import React from "react";

/* PLOP_INJECT_CODE */

/**
 * L'instance du singleton PlayerGTA.
 */
let instance;

/**
 * le state actuel du PlayerGTA.
 */
let state = {
  //
  id: null,
};

/**
 * Le all mighty PlayerGTA, qui nous permet un accès CRUD du ghetto.
 */
class PlayerGTA {
  /**
   * Le constructeur
   * qui ne construira qu'un seul objet,
   * stocké dans instance.
   */
  constructor() {
    if (instance) {
      throw new Error('New instance of PlayerGTA cannot be created.');
    }

    instance = this;
  }

  /**
   * Ceci permet d'obtenir le PlayerGTA
   */
  GetSound() {
    return state.sound;
  }

  /**
   * Ceci permet de set des données dans le PlayerGTA
   */
  SetSound(newState) {
    state.sound = newState;
  }

  /**
   * Ceci permet de ...
   */
  action_1({arg1, arg2}) {
    return;
  }

  /**
   * Ceci permet de ...
   */
  action_2({arg1, arg2}) {
    return;
  }
}

let PlayerGTAInstance = Object.freeze(new PlayerGTA());

export {PlayerGTAInstance};
