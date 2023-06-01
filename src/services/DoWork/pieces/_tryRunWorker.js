import { _runWorker } from "./_runWorker";
import { _onWorkError } from "./_onWorkError";

/**
 *
 * @param {*} workListId
 * @param {*} worker
 * @param {*} workCancelGrabber
 * @param {*} onDone
 * @param {*} onError
 * @param {*} workIndex
 *
 * Essaie d'exécuter le Work, et grab toute erreur pouvant survenir durant exec
 */
export function _tryRunWorker({
  workListId,
  worker,
  workCancelGrabber,
  onDone,
  onError,
  workIndex,
}) {
  try {
    _runWorker({ workListId, worker, workCancelGrabber, onDone, onError });
  } catch (e) {
    // alors indique problème
    _onWorkError({
      workListId,
      workIndex,
      e,
      onError,
    });
  }
}
