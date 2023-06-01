/* PLOP_INJECT_IMPORT */
import {
  CancelTestJob
} from "src/pages/TestPage/pieces/TestJob/AllWorks/TestJob/CancelTestJob";

/** les callbacks qui stockent les annulateurs de work */
export const GetWorkCancellers = () => {
  return {
    /* PLOP_INJECT_CODE */
		TestJob: CancelTestJob,
  };
};
