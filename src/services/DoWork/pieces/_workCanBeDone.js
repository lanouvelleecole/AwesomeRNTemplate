import { WorkListState } from "./WorkListState";

//  Work => bool
//
// les conditions sont elles remplies pour
// qu'on puisse faire le boulot ?
// conditions = fonction de work existe, et le work list n'est pas encore marqué comme terminé

export const _workCanBeDone = (worker, work) => {
  return (
    worker != null && work != null && work.status != WorkListState.WORK_DONE
  );
};
