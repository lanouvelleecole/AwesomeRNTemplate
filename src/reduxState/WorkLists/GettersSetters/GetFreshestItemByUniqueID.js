import { GetFreshestWorkLists } from "./GetFreshestWorkLists";

/**
 *
 * @param {*} uniqueID
 *
 * @returns l'item ayant le bon uniqueId, si existant, ou null.
 */
export const GetFreshestItemByUniqueID = (uniqueID) => {
  return GetFreshestWorkLists().find((item) => {
    return item.uniqueId == uniqueID;
  });
};
