import {
  query,
} from 'express-validator';

// Remove the following eslint disable comment when new exports are added
// eslint-disable-next-line import/prefer-default-export
export const index = [
  query('startDate').notEmpty().trim().isDate(), // validate date in YYYY-MM-DD format
  query('endDate').notEmpty().trim().isDate(),
  query('minCount').notEmpty().isInt({ min: 0 }).toInt(), // Not Allowing negative integer
  query('maxCount').notEmpty().isInt({ min: 0 }).toInt(),
];
