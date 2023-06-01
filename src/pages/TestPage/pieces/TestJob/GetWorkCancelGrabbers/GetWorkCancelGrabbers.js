/* PLOP_INJECT_IMPORT */
import {
  GrabTestJobCanceller
} from "src/pages/TestPage/pieces/TestJob/AllWorks/TestJob/GrabTestJobCanceller";

/** les callbacks qui stockent les données de cancel, si besoin */
export const GetWorkCancelGrabbers = () => {
  return {
    /* PLOP_INJECT_CODE */
		TestJob: GrabTestJobCanceller,
  };
};
