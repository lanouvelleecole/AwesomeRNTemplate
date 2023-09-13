import { RunIfPossible } from "src/services/RunIfPossible/RunIfPossible";
import { InitLocalDatabase } from "./InitLocalDatabase";

/**
 *
 * @param {*}
 *
 * @returns via callback de succès ou erreur
 *
 * Cette fonction permet de mettre à jour un ou plusieurs rows
 * (selon rowName et rowValue)
 * , dans la base de données.
 *
 
UpdateSpecificRowsFromDB({
  dbName: "funga",
  rowName: "uniqueId",
  rowValue: 0,
  row: rowNamesAndTypes: {
    name: "Sucius",
    age: "65",
    moyenneBac: "4",
  },
  rowNamesAndTypes: {
    name: "TEXT",
    age: "INTEGER",
    moyenneBac: "REAL",
  },
  onSuccess: (rows) => {
    /*console.log(`Voici les données mises à jour: ${rows}`);
  },
  onError: (e) => {
    /*console.log("Erreur durant mise à jour de données.");
  },
});

 *
 */
const UpdateSpecificRowsFromDB = ({
  dbName,
  row,
  rowName,
  rowValue,
  rowNamesAndTypes,
  onSuccess,
  onError,
}) => {
  /** Ceci permet de retourner le futur résultat de la requête */
  return new Promise((resolve, reject) => {
    _UpdateSpecificRowsFromDB({
      dbName,
      row,
      rowName,
      rowValue,
      rowNamesAndTypes,
      onSuccess,
      onError,
      resolve,
      reject,
    });
  });
};

/** le processus */
const _UpdateSpecificRowsFromDB = ({
  dbName,
  row,
  rowName,
  rowValue,
  rowNamesAndTypes,
  onSuccess,
  onError,
  resolve,
  reject,
}) => {
  const db = InitLocalDatabase({
    dbName: dbName,
    rowNamesAndTypes: rowNamesAndTypes,
  });

  // key = ?
  const keyEquals = Object.entries(row)
    .map(([key, value]) => {
      return `${key} = ?`;
    })
    .join(", ");

  // les valeurs correspondant aux point d'interrogations
  const keyValues = Object.entries(row).map(([key, value]) => {
    return value;
  });

  keyValues.push(rowValue);

  db.transaction((tx) => {
    // passing sql query and parameters:null
    tx.executeSql(
      `UPDATE ${dbName} SET ${keyEquals} WHERE ${rowName} = ?`,
      keyValues,
      // success callback which sends two things:
      // Transaction object and ResultSet Object
      (txObj, resultSet) => {
        resolve(resultSet.rowsAffected);
        RunIfPossible({ func: onSuccess, args: resultSet.rowsAffected });
      },

      // failure callback which sends two things Transaction object and Error
      (txObj, error) => {
        reject(error);
        RunIfPossible({ func: onError, args: error });
      }
    );
  });
};

export { UpdateSpecificRowsFromDB };
