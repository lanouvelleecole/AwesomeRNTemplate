/**
 *
 * @param {*} workList
 * la liste de boulot en cours d'exécution
 *
 * @param {*} where
 * callback de détermination de l'élu
 *
 * @returns le work individuel selon critères souhaités
 *
 */

export const GetWorkWhere = ({ workList, where }) => {
  const works = workList.works;

  return works.find(where);
};
