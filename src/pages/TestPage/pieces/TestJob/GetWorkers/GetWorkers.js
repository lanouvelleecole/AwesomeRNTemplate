/* PLOP_INJECT_IMPORT */
import {
  TestJobWork
} from "src/pages/TestPage/pieces/TestJob/AllWorks/TestJob/TestJobWork";

/** les callbacks qui font le boulot */
export function GetWorkers() {
  return {
    /* PLOP_INJECT_CODE */
		TestJob: TestJobWork,
  };
}
