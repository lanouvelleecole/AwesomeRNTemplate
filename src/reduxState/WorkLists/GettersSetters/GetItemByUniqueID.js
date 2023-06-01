import { GetWorkLists } from "./GetWorkLists";

/**
 *
 * @param {*} uniqueID
 *
 * @returns l'item ayant le bon uniqueId, si existant, ou null.
 */
export const GetItemByUniqueID = (uniqueID) => {
  const workList = GetWorkLists().find((item) => {
    return item.uniqueId == uniqueID;
  });

  // parse works, et workListData
  // de string a array/map respectively
  return workList != null
    ? {
        ...workList,
        works: JSON.parse(workList.works),
        workListData: JSON.parse(workList.workListData),
      }
    : null;
};
