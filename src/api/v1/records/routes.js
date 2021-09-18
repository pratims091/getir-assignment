import express from 'express';
import * as controller from './controller';
import * as validators from './validators';
import validateRequest from '../../../lib/requestValidator';

const router = express.Router();

// This should be a GET request
router.post('/', [validators.index, validateRequest], controller.index);

export default router;
