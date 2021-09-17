/* eslint max-classes-per-file: 0 */

import logger from '../../utils/logger';

class ApiError extends Error {
  constructor(statusCode, code, message) {
    super(message);
    this.statusCode = statusCode;
    this.code = code;
    this.message = message;
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

// Follow this to create more custom API errors
export class SampleError extends ApiError {
  constructor(msg) {
    const statusCode = 400; // HTTP error code only
    const code = 1000; // Custom error code
    const message = `This is sample error: ${msg}`; // Custom error message
    super(statusCode, code, message);
  }
}

/* Custom error handler, anything other than ApiError is treated as 500,
*  and should be notfied to devs.
*/
export const errorHandler = (error, res) => {
  logger.error(error);

  if (error instanceof ApiError) {
    return res.status(error.statusCode).json({
      code: error.code,
      msg: error.message,
    });
  }
  const resp = {
    code: 500,
    msg: 'Oops! Something went wrong, please try again later',
  };

  if (process.env.NODE_ENV !== 'production') resp.error = error.message; // Respond with raw error in non production environments

  return res.status(500).json(resp);
};
