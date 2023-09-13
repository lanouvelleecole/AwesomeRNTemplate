import { store } from "src/reduxState/reduxStore";

// permet exécution optionnelle de callback
import { RunIfPossible } from "src/services/RunIfPossible/RunIfPossible";

// Le AsyncThunk de récupération/triage de toutes les données stockées dans ToolboxState.
import { getAllRowsFromDB } from "../AsyncThunks/getAllRowsFromDB";

// Le nom de la DB Sqlite,
// ainsi qu'une description des noms/types des rows de cette DB Sqlite
import { rowNamesAndTypes, databaseName } from "../DatabaseInfo";

/**
 *
 * @param {*} onSuccess, callback si tout c bien pacé
 * @param {*} onError, callback si ca pue
 *
 * @returns la liste de tous les ToolboxState (rows {key: value}).
 *
 * Aussi, on en profite pour répartir les rows en groupes,
 * selon row.groupName, si existant
 */
export const GetAllRowsFromDB = ({ onSuccess, onError }) => {
  // Promise nous permet de pouvoir retourner la liste de données
  // de manière asynchrone.
  return new Promise((resolve, reject) => {
    // dans Redux, on lance un AsyncThunk,
    // qui va premièrement récupérer les données,
    // stockées dans SQLITE.
    //
    // Cet AsyncThunk va ensuite transmettre ces données (rows)
    // au Reducer correspondant, qui va lui répartir les données en groupes (via initialState.groups).
    //
    // Ce Reducer va aussi stocker la liste entière de rows, (via initialState.allRows)
    store
      .dispatch(
        // Ze AsynchThunk iz here
        getAllRowsFromDB({
          dbName: databaseName,
          rowNamesAndTypes: rowNamesAndTypes,
        })
      )
      .unwrap()
      /**
       * cette callback, s'execute lorsque les
       * données ont été ajoutées/réparties dans Sqlite/Redux
       */
      .then((rows) => {
        resolve(rows);

        RunIfPossible({ func: onSuccess, args: rows });
      })
      /** si bobo durant ajouts/répartitions */
      .catch((e) => {
        reject(e);

        RunIfPossible({ func: onError, args: e });
      });
  });
};