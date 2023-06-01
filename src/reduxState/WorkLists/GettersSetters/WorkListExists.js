import { GetItemByUniqueID } from "./GetItemByUniqueID";

/**
 *
 * @param {*} workListId,
 * l'uniqueId du WorkList
 * dont on veut connaitre
 * la présence ou pas.
 *
 * Ce WorkList existe il déja, ou pas ?
 */
export const WorkListExists = ({ workListId }) => {
  const workList = GetItemByUniqueID(workListId);

  return workList != null;
};
