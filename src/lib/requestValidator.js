import { validationResult } from 'express-validator';

// Middleware to validate request
export default (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ code: 422, errors: errors.array(), msg: 'Invalid request' });
  }
  return next();
};
