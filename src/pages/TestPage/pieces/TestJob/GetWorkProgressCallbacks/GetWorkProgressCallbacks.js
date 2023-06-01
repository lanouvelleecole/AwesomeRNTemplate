/* PLOP_INJECT_IMPORT */
import {
  ProgressTestJobWork
} from "src/pages/TestPage/pieces/TestJob/AllWorks/TestJob/ProgressTestJobWork";

/** les callbacks de avancement de boulot */
export function GetWorkProgressCallbacks() {
  return {
    /* PLOP_INJECT_CODE */
		TestJob: ProgressTestJobWork,
  };
}
