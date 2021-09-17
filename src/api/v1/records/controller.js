import { errorHandler } from '../../../lib/errors';
import * as service from './service';

// Remove the following eslint disable comment when new exports are added
// eslint-disable-next-line import/prefer-default-export
export const index = async (req, res) => {
  try {
    const {
      startDate,
      endDate,
      minCount,
      maxCount,
    } = req.query;

    const records = await service.index({
      startDate,
      endDate,
      minCount,
      maxCount,
    });

    return res.status(200).send({
      code: 0, // Custom code for success
      msg: 'Success',
      records,
    });
  } catch (error) {
    return errorHandler(error, res);
  }
};
