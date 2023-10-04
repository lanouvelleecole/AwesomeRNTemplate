import { GetGUIAnswers } from "./GetGUIAnswers";

/**
 *
 * @param {*} uniqueID
 *
 * @returns l'item ayant le bon uniqueId, si existant, ou null.
 */
export const GetItemByUniqueID = (uniqueID) => {
  return GetGUIAnswers().find((item) => {
    return item.uniqueId == uniqueID;
  });
};
