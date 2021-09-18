/* eslint-disable no-useless-catch */
import dbClient from '../../../db';

/**
 * Summary. Search records collection.
 *
 * Description. Searches record collection on createdAt and sum of counts array.
 * @param {string}   startDate    Start date in YYYY-MM-DD format.
 * @param {string}   endDate      End date in YYYY-MM-DD format.
 * @param {integer}  minCount     Minimum count.
 * @param {integer}  maxCount     Maximum count.
 *
 * @return {Array} Matched array of record.
 */
// Remove the following eslint disable comment when new exports are added
// eslint-disable-next-line import/prefer-default-export
export const index = async ({
  startDate,
  endDate,
  minCount,
  maxCount,
}) => {
  try {
    await dbClient.connect();

    const db = dbClient.db(); // database name is part of database URL.
    const collection = db.collection('records');

    const aggregate = [
      {
        $match: {
          createdAt: {
            $gte: new Date(startDate),
            $lte: new Date(endDate),
          },
        },
      },
      {
        $project: {
          _id: 0,
          key: 1,
          createdAt: 1,
          totalCount: { $sum: '$counts' },
        },
      },
      {
        $match: {
          totalCount: {
            $gte: minCount,
            $lte: maxCount,
          },
        },
      },
    ];
    const records = await collection.aggregate(aggregate).toArray();

    return records;
  } catch (e) {
    throw e;
  } finally {
    await dbClient.close(); // Release the connection once we are done with it.
  }
};
