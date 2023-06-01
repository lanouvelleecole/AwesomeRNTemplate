/* PLOP_INJECT_IMPORT */
import {
  SaveTestJobWork
} from "src/pages/TestPage/pieces/TestJob/AllWorks/TestJob/SaveTestJobWork";

/** les callbacks qui stockent le résultat de work dans le Work tout juste exécuté */
export function GetWorkSavers() {
  return {
    /* PLOP_INJECT_CODE */
		TestJob: SaveTestJobWork,
  };
}
