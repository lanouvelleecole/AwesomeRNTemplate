/**
 *
 * @param {*} workList
 * la liste de boulot en cours d'exécution
 *
 * @returns le work individuel à exécuter dans la liste de work
 *
 */

export const GetCurrentWork = (workList) => {
  const workIndex = workList.workIndex;
  const works = workList.works;

  if (workIndex < works.length) {
    return works[workIndex];
  } else {
    return null;
  }
};
