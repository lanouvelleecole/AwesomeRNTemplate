/* eslint-disable no-unused-vars */
/**
 * Les états dans lesquels le WorkList peut être
 */

export const WorkListState = {
  WORK_IN_PROGRESS: 0,
  WORK_DONE: 1,
  ERROR_WORK: 2,
  WORK_NOT_IN_PROGRESS: 3,
};

/**
 *
 * @param {*} workListState
 *
 * @returns
 */
const WorkListStateFn = (workListState) => {
  if (workListState == WorkListState.WORK_NOT_IN_PROGRESS) {
    return;
  } else if (workListState == WorkListState.WORK_IN_PROGRESS) {
    return;
  } else if (workListState == WorkListState.ERROR_WORK) {
    return;
  } else if (workListState == WorkListState.WORK_DONE) {
    return;
  } else {
    return;
  }
};
