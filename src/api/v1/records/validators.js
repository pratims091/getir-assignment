import {
  body,
} from 'express-validator';

// Remove the following eslint disable comment when new exports are added
// eslint-disable-next-line import/prefer-default-export
export const index = [
  body('startDate').notEmpty().trim().isDate(), // validate date in YYYY-MM-DD format
  body('endDate').notEmpty().trim().isDate(),
  body('minCount').notEmpty().isInt({ min: 0 }).toInt(), // Not Allowing negative integer
  body('maxCount').notEmpty().isInt({ min: 0 }).toInt(),
];
