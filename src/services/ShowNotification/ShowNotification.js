/* PLOP_INJECT_IMPORT */
//import React from "react";

import * as Notifications from 'expo-notifications';

import * as Permissions from 'expo-permissions';

/**
 *
 * @param {*} title
 * le titre de la notif
 *
 * @param {*} body
 * le sous titre de la notif
 *
 * @param {*} extra
 * payload données
 *
 * @param {*} id
 * l'identifiant de notif (nombre)
 *
 * Affiche une notif dans le status bar (la ou y'a l'heure)
 *
 * Construit avec l'aide de:
 *
 *
 */
const ShowNotification = async ({title, body, extra, id}) => {
  /* PLOP_INJECT_CODE */

  // do ur own shyt here aight, on hood

  console.log(`Notif Title: ${title}`);
  console.log(`Notif body: ${body}`);
};

export {ShowNotification};
