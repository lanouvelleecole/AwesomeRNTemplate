import { mapAsync } from "../MapAsync/MapAsync";
import { RunIfPossible } from "../RunIfPossible/RunIfPossible";

export async function DeleteDatabase({ SqliteReduxObject, onSuccess, onError }) {
    try {
        const allRows = await SqliteReduxObject.GetAllRowsFromDB({});

        console.log(`before deletion, db contains ${allRows.length} rows`);

        const deletions = await mapAsync(allRows, async (row, index) => {
            return SqliteReduxObject.DeleteSpecificRowsFromDB({
                rowName: 'uniqueId',
                rowValue: row.uniqueId
            })
        });

        const allRowsCleaned = await SqliteReduxObject.GetAllRowsFromDB({});

        console.log(`after deletion, db contains ${allRowsCleaned?.length} rows`);

        RunIfPossible({ func: onSuccess, args: deletions })

        return deletions;
    } catch (error) {
        RunIfPossible({ func: onError, args: error })

        return;
    }
}