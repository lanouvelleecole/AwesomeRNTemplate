import { GetAppState } from "./GetAppState";

/**
 *
 * @param {*} uniqueID
 *
 * @returns l'item ayant le bon uniqueId, si existant, ou null.
 */
export const GetItemByUniqueID = (uniqueID) => {
  return GetAppState().find((item) => {
    return item.uniqueId == uniqueID;
  });
};
